# Kostenlose Tierschutz Website

Statische Projektseite für die Domain `kostenlose-tierschutz-website.de`.

Die Seite basiert auf der Standalone-Datei aus `C:/Downloads/Tierschutz Website-Spende v2 (standalone).html`, wurde aber in ein normales Projekt mit getrenntem HTML, CSS, JavaScript und lokalen Font-Assets überführt.

## Struktur

- `index.html` - fertige statische Startseite
- `assets/css/styles.css` - Layout, Farben, lokale Font-Faces
- `assets/js/main.js` - vorbereiteter Mailto-Entwurf für Bewerbungen und Reveal-Animationen
- `assets/fonts/` - lokal entpackte Webfonts
- `assets/img/` - echte Fotos, Logo und Bildnachweise
- `impressum/`, `datenschutz/` - Rechtstexte für die Live-Seite
- `server/smtp-endpoint/` - optionaler, aktuell nicht genutzter PHP/PHPMailer-Endpunkt für späteren SMTP-Versand
- `docs/` - Projektnotizen, Quelle und Deployment-Hinweise
- `.github/workflows/deploy-pages.yml` - vorbereiteter GitHub-Pages-Deploy

## Lokal ansehen

Die Seite funktioniert direkt per Doppelklick auf `index.html`.

Alternativ:

```bash
npm start
```

Danach ist die Seite lokal unter `http://127.0.0.1:4173/` erreichbar.

## Formular

Das Bewerbungsformular öffnet einen vorbereiteten Mail-Entwurf an `info@andersen-webworks.de`. Das ist derselbe statische Ansatz wie auf `jan-erik-andersen.de`: GitHub Pages braucht dafür kein Backend, keine SMTP-Secrets und keinen externen Formularanbieter. Die Besucher müssen die E-Mail im eigenen Mailprogramm noch absenden.

Der PHP/PHPMailer-Endpunkt unter `server/smtp-endpoint/` bleibt nur als spätere Option liegen, falls irgendwann echter serverseitiger SMTP-Versand gewünscht ist.

## Deployment

Der vorbereitete Deploy-Weg ist GitHub Pages per GitHub Actions. Der Workflow veröffentlicht nur `index.html`, `assets/`, `robots.txt`, `sitemap.xml`, `site.webmanifest` und `CNAME`.

Details stehen in [docs/deployment.md](docs/deployment.md).
