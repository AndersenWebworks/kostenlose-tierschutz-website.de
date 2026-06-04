# Optionaler SMTP-Endpunkt für Bewerbungen

Dieser Ordner enthält einen vorbereiteten serverseitigen Formular-Endpunkt. Er ist aktuell nicht mit der Live-Seite verdrahtet.

Das aktive Formular nutzt den statischen Mailto-Weg wie auf `jan-erik-andersen.de`: Es öffnet einen vorbereiteten E-Mail-Entwurf an `info@andersen-webworks.de`. Dieser Ordner bleibt nur als spätere Option liegen, falls echter SMTP-Versand auf eigenem PHP-Hosting gewünscht ist.

## Deployment

1. Ordner auf ein PHP-Hosting kopieren, zum Beispiel nach `andersen-webworks.de/api/tierschutz-bewerbung.php`.
2. Im Zielordner `composer install --no-dev` ausführen.
3. SMTP- und Formularvariablen serverseitig setzen.
4. In `index.html` das Formular wieder auf einen echten Endpoint umstellen.

## Benötigte Umgebungsvariablen

```text
FORM_ALLOWED_ORIGIN=https://kostenlose-tierschutz-website.de
FORM_TO=info@andersen-webworks.de
FORM_CONFIRMATION_ENABLED=true
SMTP_HOST=smtp.example.org
SMTP_PORT=587
SMTP_SECURE=tls
SMTP_USER=...
SMTP_PASS=...
SMTP_FROM=...
SMTP_FROM_NAME=kostenlose-tierschutz-website.de
```

Keine dieser Angaben gehört in das Repository.
