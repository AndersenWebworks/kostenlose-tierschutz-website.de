# Kostenlose Tierschutz Website

Statische Projektseite für die Domain `kostenlose-tierschutz-website.de`.

Die Seite basiert auf der Standalone-Datei aus `C:/Downloads/Tierschutz Website-Spende v2 (standalone).html`, wurde aber in ein normales Projekt mit getrenntem HTML, CSS, JavaScript und lokalen Font-Assets überführt.

## Struktur

- `index.html` – fertige statische Startseite der Initiative
- `assets/css/styles.css` – Layout, Farben, lokale Font-Faces
- `assets/js/main.js` – vorbereiteter Mailto-Entwurf für Bewerbungen und Reveal-Animationen
- `assets/fonts/` – lokal entpackte Webfonts
- `assets/img/` – echte Fotos, Logo und Bildnachweise
- `impressum/`, `datenschutz/` – Rechtstexte für die Live-Seite
- `server/smtp-endpoint/` – optionaler, aktuell nicht genutzter PHP/PHPMailer-Endpunkt für späteren SMTP-Versand
- `docs/` – Projektnotizen, Quelle und Deployment-Hinweise
- `.github/workflows/deploy-pages.yml` – vorbereiteter GitHub-Pages-Deploy

## Praxisbeispiel: Sonnenhof der Koboldtiere (in Aufbau)

Im Rahmen dieser Initiative entsteht eine eigenständige Spenderseite für den Lebenshof Sonnenhof der Koboldtiere in Heusweiler, Saarland. Sie wird aktuell im Working Folder direkt angelegt (Subfolder-Sortierung folgt, sobald Hosting/Domain festgelegt sind).

- `sonnenhof.html` – Startseite mit Hero, Tier-Vorschau und drei Spendenpfaden
- `sonnenhof-geschichte.html` – Laras Weg 2015 → 2024 mit Timeline
- `sonnenhof-tiere.html` – Galerie der Koboldtiere (Murron, Pepe, Njuvra, Pavel, Hunter u. a.)
- `sonnenhof-unterstuetzen.html` – Einmalig spenden / Patenschaft / Ehrenamt, mit Bankdaten und PayPal
- `sonnenhof-impressum.html`, `sonnenhof-datenschutz.html` – vereinsbezogene Rechtstexte
- `assets/css/sonnenhof.css` – gemeinsames Stylesheet (Grün-Marke, sandige Akzente)

Detaillierte Notizen, Quellen, Laras Textkorrekturen und offene Punkte liegen in `docs/sonnenhof-koboldtiere-brief.md`.

## Lokal ansehen

Die Initiative-Seite funktioniert direkt per Doppelklick auf `index.html`.

Alternativ:

```bash
npm start
```

Danach ist die Seite lokal unter `http://127.0.0.1:4173/` erreichbar.

Die Sonnenhof-Seiten können während der Aufbauphase direkt per Doppelklick auf `sonnenhof.html` geöffnet werden.

## Formular

Das Bewerbungsformular öffnet einen vorbereiteten Mail-Entwurf an `info@andersen-webworks.de`. Das ist derselbe statische Ansatz wie auf `jan-erik-andersen.de`: GitHub Pages braucht dafür kein Backend, keine SMTP-Secrets und keinen externen Formularanbieter. Die Besucher müssen die E-Mail im eigenen Mailprogramm noch absenden.

Der PHP/PHPMailer-Endpunkt unter `server/smtp-endpoint/` bleibt nur als spätere Option liegen, falls irgendwann echter serverseitiger SMTP-Versand gewünscht ist.

## Deployment

Der vorbereitete Deploy-Weg ist GitHub Pages per GitHub Actions. Der Workflow veröffentlicht nur `index.html`, `assets/`, `robots.txt`, `sitemap.xml`, `site.webmanifest` und `CNAME`.

Für die Sonnenhof-Seiten muss der Workflow erweitert werden (Dateien `sonnenhof*.html` und `assets/css/sonnenhof.css`), sobald Subfolder-Variante oder eigene Domain stehen.

Details stehen in [docs/deployment.md](docs/deployment.md).
