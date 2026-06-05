# Deployment

Die Seite ist als statisches Projekt angelegt und kann ohne Build-Schritt deployt werden. Der vorbereitete Standardweg ist GitHub Pages mit GitHub Actions.

## Dateien

Für den Live-Upload werden nur diese Dateien benötigt:

- `index.html`
- `assets/`
- `impressum/`
- `datenschutz/`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `favicon.ico`
- `favicon.svg`
- `apple-touch-icon.png`
- `web-app-manifest-192x192.png`
- `web-app-manifest-512x512.png`
- `CNAME`

Der Workflow `.github/workflows/deploy-pages.yml` kopiert genau diese Dateien nach `_site/` und veröffentlicht nur diesen statischen Ordner. Repo-Dateien wie `README.md`, `docs/`, `scripts/`, `server/` oder `package.json` werden dadurch nicht Teil der Live-Seite.

## GitHub Pages

Vorbereiteter Workflow:

- Trigger: Push auf `main` oder manueller Start über `workflow_dispatch`
- Quelle: GitHub Actions
- Artifact: `_site/`
- Custom Domain: `kostenlose-tierschutz-website.de` über `CNAME`

Für die Live-Schaltung muss im GitHub-Repo unter `Settings > Pages` die Quelle `GitHub Actions` aktiviert werden. Das ist eine GitHub-Konfigurationsänderung und wird erst nach Freigabe ausgeführt.

## Domain

Produktionsdomain:

`https://kostenlose-tierschutz-website.de/`

DNS-Ziel für die Apex-Domain:

```text
@  A     185.199.108.153
@  A     185.199.109.153
@  A     185.199.110.153
@  A     185.199.111.153
@  AAAA  2606:50c0:8000::153
@  AAAA  2606:50c0:8001::153
@  AAAA  2606:50c0:8002::153
@  AAAA  2606:50c0:8003::153
```

Optional für `www`:

```text
www  CNAME  AndersenWebworks.github.io
```

Wenn `kostenlose-tierschutz-website.de` als GitHub-Pages-Custom-Domain gesetzt ist und `www` korrekt auf GitHub Pages zeigt, leitet GitHub Pages `www` automatisch auf die Apex-Domain weiter.

## Formularversand

Das Bewerbungsformular ist als statischer Mailto-Weg umgesetzt, wie auf `jan-erik-andersen.de`: Nach dem Ausfüllen öffnet die Seite einen vorbereiteten E-Mail-Entwurf an `info@andersen-webworks.de`. Die Besucher senden diese E-Mail im eigenen Mailprogramm ab.

Das passt zum GitHub-Pages-Hosting, weil keine SMTP-Zugangsdaten im Browser liegen, kein PHP ausgeführt werden muss und kein zusätzlicher Formularanbieter beteiligt ist.

Der alte PHP/PHPMailer-Endpunkt unter `server/smtp-endpoint/` bleibt nur als spätere Option erhalten. Er ist aktuell nicht mit der Live-Seite verdrahtet.

Vor Livegang prüfen:

- finale Kontaktadresse bestätigen
- Pages-Quelle im GitHub-Repo aktivieren
- DNS beim Domainanbieter setzen
- HTTPS-Erzwingung aktivieren, sobald GitHub das Zertifikat ausgestellt hat
