# Deployment

Die Seite ist als statisches Projekt angelegt und kann ohne Build-Schritt deployt werden. Der vorbereitete Standardweg ist GitHub Pages mit GitHub Actions.

## Dateien

Für den Live-Upload werden nur diese Dateien benötigt:

- `index.html`
- `assets/`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `CNAME`

Der Workflow `.github/workflows/deploy-pages.yml` kopiert genau diese Dateien nach `_site/` und veröffentlicht nur diesen statischen Ordner. Repo-Dateien wie `README.md`, `docs/`, `scripts/` oder `package.json` werden dadurch nicht Teil der Live-Seite.

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

Vor Livegang prüfen:

- Impressum und Datenschutz ergänzen oder verlinken
- echte Fotos statt Platzhalter einsetzen
- finale Kontaktadresse bestätigen
- Pages-Quelle im GitHub-Repo aktivieren
- DNS beim Domainanbieter setzen
- HTTPS-Erzwingung aktivieren, sobald GitHub das Zertifikat ausgestellt hat
