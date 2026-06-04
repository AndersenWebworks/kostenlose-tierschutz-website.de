# Kostenlose Tierschutz Website

Statische Projektseite für die Domain `kostenlose-tierschutz-website.de`.

Die Seite basiert auf der Standalone-Datei aus `C:/Downloads/Tierschutz Website-Spende v2 (standalone).html`, wurde aber in ein normales Projekt mit getrenntem HTML, CSS, JavaScript und lokalen Font-Assets überführt.

## Struktur

- `index.html` - fertige statische Startseite
- `assets/css/styles.css` - Layout, Farben, lokale Font-Faces
- `assets/js/main.js` - Formular-Mailto und Reveal-Animationen
- `assets/fonts/` - lokal entpackte Webfonts
- `assets/img/` - Platz für echte Fotos und spätere Bildassets
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

Das Bewerbungsformular speichert nichts auf dem Server. Der Button öffnet einen vorbereiteten Mailto-Entwurf an `info@andersen-webworks.de`.

## Deployment

Der vorbereitete Deploy-Weg ist GitHub Pages per GitHub Actions. Der Workflow veröffentlicht nur `index.html`, `assets/`, `robots.txt`, `sitemap.xml`, `site.webmanifest` und `CNAME`.

Details stehen in [docs/deployment.md](docs/deployment.md).
