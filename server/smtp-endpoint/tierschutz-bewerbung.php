<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

$allowedOrigin = getenv('FORM_ALLOWED_ORIGIN') ?: 'https://kostenlose-tierschutz-website.de';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if ($origin === $allowedOrigin) {
    header('Access-Control-Allow-Origin: ' . $allowedOrigin);
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
}

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || $origin !== $allowedOrigin) {
    respond(false, 'Diese Anfrage kann nicht verarbeitet werden.', 403);
}

rateLimit();

$payload = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($payload)) {
    respond(false, 'Die Formularangaben konnten nicht gelesen werden.', 400);
}

$data = [
    'organisation' => clean($payload['organisation'] ?? '', 120),
    'kontaktperson' => clean($payload['kontaktperson'] ?? '', 120),
    'email' => clean($payload['email'] ?? '', 180),
    'region' => clean($payload['region'] ?? '', 120),
    'website' => clean($payload['website'] ?? '', 220),
    'schwerpunkt' => clean($payload['schwerpunkt'] ?? '', 120),
    'beschreibung' => clean($payload['beschreibung'] ?? '', 4000),
    'pflegeperson' => clean($payload['pflegeperson'] ?? '', 180),
    'homepage' => clean($payload['homepage'] ?? '', 120),
    'source' => clean($payload['source'] ?? 'kostenlose-tierschutz-website.de', 120),
];

if ($data['homepage'] !== '') {
    respond(true, 'Danke, die Bewerbung ist angekommen.');
}

if ($data['organisation'] === '' || $data['kontaktperson'] === '' || $data['email'] === '' || $data['schwerpunkt'] === '' || $data['beschreibung'] === '') {
    respond(false, 'Bitte alle Pflichtfelder ausfüllen.', 400);
}

if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Bitte eine gültige E-Mail-Adresse eintragen.', 400);
}

try {
    sendInternalMail($data);
    if ((getenv('FORM_CONFIRMATION_ENABLED') ?: 'true') === 'true') {
        sendConfirmationMail($data);
    }
    respond(true, 'Danke, die Bewerbung ist angekommen.');
} catch (Throwable $error) {
    error_log('Tierschutz form mail failed: ' . $error->getMessage());
    respond(false, 'Der Versand ist gerade nicht erreichbar. Bitte direkt per E-Mail schreiben.', 500);
}

function clean(mixed $value, int $limit): string
{
    $text = trim((string) $value);
    $text = str_replace(["\r\n", "\r"], "\n", $text);
    $text = strip_tags($text);
    if (mb_strlen($text, 'UTF-8') > $limit) {
        $text = mb_substr($text, 0, $limit, 'UTF-8');
    }
    return $text;
}

function respond(bool $ok, string $message, int $status = 200): never
{
    http_response_code($status);
    echo json_encode(['ok' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function rateLimit(): void
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $key = hash('sha256', $ip);
    $dir = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'tierschutz-form-rate';
    if (!is_dir($dir)) {
        mkdir($dir, 0700, true);
    }
    $file = $dir . DIRECTORY_SEPARATOR . $key . '.txt';
    $now = time();
    $hits = [];
    if (is_file($file)) {
        $stored = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
        foreach ($stored as $line) {
            $timestamp = (int) $line;
            if ($timestamp > $now - 3600) {
                $hits[] = $timestamp;
            }
        }
    }
    if (count($hits) >= 5) {
        respond(false, 'Bitte später erneut versuchen.', 429);
    }
    $hits[] = $now;
    file_put_contents($file, implode("\n", $hits), LOCK_EX);
}

function mailer(): PHPMailer
{
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host = requiredEnv('SMTP_HOST');
    $mail->Port = (int) (getenv('SMTP_PORT') ?: 587);
    $mail->SMTPAuth = true;
    $mail->Username = requiredEnv('SMTP_USER');
    $mail->Password = requiredEnv('SMTP_PASS');
    $secure = getenv('SMTP_SECURE') ?: 'tls';
    if ($secure !== 'none') {
        $mail->SMTPSecure = $secure;
    }
    $from = getenv('SMTP_FROM') ?: requiredEnv('SMTP_USER');
    $fromName = getenv('SMTP_FROM_NAME') ?: 'kostenlose-tierschutz-website.de';
    $mail->setFrom($from, $fromName);
    return $mail;
}

function sendInternalMail(array $data): void
{
    $mail = mailer();
    $mail->addAddress(requiredEnv('FORM_TO'));
    $mail->addReplyTo($data['email'], $data['kontaktperson']);
    $mail->Subject = 'Neue Bewerbung: ' . $data['organisation'];
    $mail->isHTML(true);
    $mail->Body = internalHtml($data);
    $mail->AltBody = internalText($data);
    $mail->send();
}

function sendConfirmationMail(array $data): void
{
    $mail = mailer();
    $mail->addAddress($data['email'], $data['kontaktperson']);
    $mail->Subject = 'Bewerbung angekommen - kostenlose-tierschutz-website.de';
    $mail->isHTML(true);
    $mail->Body = confirmationHtml($data);
    $mail->AltBody = confirmationText($data);
    $mail->send();
}

function requiredEnv(string $key): string
{
    $value = getenv($key);
    if ($value === false || $value === '') {
        throw new RuntimeException('Missing environment variable ' . $key);
    }
    return $value;
}

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function internalHtml(array $d): string
{
    return '<!doctype html><html><body style="font-family:Arial,sans-serif;color:#28241F;line-height:1.55;">'
        . '<h1 style="font-size:22px;">Neue Bewerbung</h1>'
        . '<p><strong>Organisation:</strong> ' . e($d['organisation']) . '<br>'
        . '<strong>Ansprechperson:</strong> ' . e($d['kontaktperson']) . '<br>'
        . '<strong>E-Mail:</strong> ' . e($d['email']) . '<br>'
        . '<strong>Region:</strong> ' . e($d['region'] ?: 'nicht angegeben') . '<br>'
        . '<strong>Aktuelle Website:</strong> ' . e($d['website'] ?: 'keine') . '<br>'
        . '<strong>Schwerpunkt:</strong> ' . e($d['schwerpunkt']) . '</p>'
        . '<h2 style="font-size:17px;">Beschreibung</h2><p>' . nl2br(e($d['beschreibung'])) . '</p>'
        . '<h2 style="font-size:17px;">Pflege der Website</h2><p>' . e($d['pflegeperson'] ?: 'nicht angegeben') . '</p>'
        . '<p style="font-size:12px;color:#6B635B;">Quelle: ' . e($d['source']) . '</p>'
        . '</body></html>';
}

function internalText(array $d): string
{
    return "Neue Bewerbung\n\n"
        . "Organisation: {$d['organisation']}\n"
        . "Ansprechperson: {$d['kontaktperson']}\n"
        . "E-Mail: {$d['email']}\n"
        . "Region: " . ($d['region'] ?: 'nicht angegeben') . "\n"
        . "Aktuelle Website: " . ($d['website'] ?: 'keine') . "\n"
        . "Schwerpunkt: {$d['schwerpunkt']}\n\n"
        . "Beschreibung:\n{$d['beschreibung']}\n\n"
        . "Pflege der Website:\n" . ($d['pflegeperson'] ?: 'nicht angegeben') . "\n\n"
        . "Quelle: {$d['source']}\n";
}

function confirmationHtml(array $d): string
{
    return '<!doctype html><html><body style="font-family:Arial,sans-serif;color:#28241F;line-height:1.55;">'
        . '<p>Hallo ' . e($d['kontaktperson']) . ',</p>'
        . '<p>deine Bewerbung für <strong>' . e($d['organisation']) . '</strong> ist angekommen.</p>'
        . '<p>Wir schauen sie uns in Ruhe an und melden uns innerhalb von 14 Tagen persönlich zurück. Falls noch etwas fehlt, fragen wir nach.</p>'
        . '<p>Viele Grüße<br>Jan-Erik und Annemarie</p>'
        . '<p style="font-size:12px;color:#6B635B;">kostenlose-tierschutz-website.de</p>'
        . '</body></html>';
}

function confirmationText(array $d): string
{
    return "Hallo {$d['kontaktperson']},\n\n"
        . "deine Bewerbung für {$d['organisation']} ist angekommen.\n\n"
        . "Wir schauen sie uns in Ruhe an und melden uns innerhalb von 14 Tagen persönlich zurück. Falls noch etwas fehlt, fragen wir nach.\n\n"
        . "Viele Grüße\nJan-Erik und Annemarie\n\n"
        . "kostenlose-tierschutz-website.de\n";
}
