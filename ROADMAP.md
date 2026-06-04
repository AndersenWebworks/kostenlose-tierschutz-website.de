# Roadmap bis zur Freischaltung

Stand: 04.06.2026

Ziel: Die Seite soll von einer guten statischen Preview zu einer veröffentlichbaren GitHub-Pages-Seite werden: echte Bilder, saubere Rechtstexte, klare Domain-Marke, funktionierender Bewerbungsversand und ordentlich gestaltete Mails.

Umsetzungsstand 05.06.2026: Marke, Bilder, Bildnachweise, Impressum, Datenschutz, Sitemap, Pages-Workflow und Formular-Frontend sind lokal umgesetzt. Das Bewerbungsformular nutzt wie `jan-erik-andersen.de` einen vorbereiteten Mailto-Entwurf an `info@andersen-webworks.de`; damit funktioniert es auf GitHub Pages ohne Backend, ohne SMTP-Secrets und ohne externen Formularanbieter.

## 1. Bildkonzept und Lizenznachweise

Aktueller Stand: In `index.html` sind noch Platzhalter wie "Foto: gerettete Katze / Pflegestelle", "Foto" und "Foto: Streunerkatze / Region Plau" verbaut. `assets/img/` existiert, ist aber noch leer.

Umsetzung:

- In `assets/img/` echte Bilddateien ablegen, optimiert als `.webp` plus Fallback nur dort, wo nötig.
- Pro sichtbarem Bild einen Eintrag in `assets/img/image-credits.json` anlegen.
- Zusätzlich eine menschlich lesbare `assets/img/IMAGE-LICENSES.md` nach dem Muster von `wahre-haustierliebe.de/assets/IMAGE-LICENSES.md` pflegen.
- Bildnachweise sichtbar im Footer oder auf einer eigenen Nachweisseite verlinken.
- Keine fremden Personenmotive verwenden, außer Rechte und Einwilligung sind klar dokumentiert.

Benötigte Motive:

- Hero: emotionales, aber nicht kitschiges Tierschutzmotiv, idealerweise gerettete Katze oder Pflegestelle.
- Team: Porträt Jan-Erik aus `jan-erik-andersen.de/portrait.webp`.
- Team: Porträt Annemarie aus `annemarie-andersen.de/portrait-480.webp` bzw. passender vorhandener Größe.
- Streunerhilfe-Case-Study: offizielles Logo von [`streunerhilfe-plau.de`](https://streunerhilfe-plau.de/), passend in die Case-Study-Karte eingebaut.
- Optional: ein zweites freies Motiv für Kastration, Auffangstation oder Tierschutzarbeit, falls die Seite mit nur Hero + Team + Logo zu trocken wirkt.

Akzeptanz:

- Keine Bildplatzhalter mehr sichtbar.
- Jedes Bild hat `alt`, sinnvollen Zuschnitt, lokale Datei und Lizenz-/Herkunftsnachweis.
- Bilddateien sind klein genug für Pages: Ziel grob unter 250 KB pro sichtbarem Bild, Hero bei Bedarf etwas größer.

## 2. Marke im Header, Footer und Meta-Daten

Aktueller Stand: Sichtbar steht noch "Andersen Webworks" im Header und Footer. In `<title>`, Description und OpenGraph kommt Andersen Webworks ebenfalls noch als Absender vor.

Umsetzung:

- Paw-Logo und Stil vorerst behalten.
- Sichtbare Header-Marke auf `kostenlose-tierschutz-website.de` ändern, an der Stelle, an der aktuell "Andersen Webworks" steht.
- Footer-Marke ebenfalls auf `kostenlose-tierschutz-website.de` ändern.
- Meta-Titel und OG-Texte so anpassen, dass die URL/Initiative die Marke ist, nicht Andersen Webworks.
- Erik und Annemarie bleiben im Inhalt als konkrete Menschen sichtbar, aber nicht mehr als Header-Brand.

Vorschlag Header-Text:

```html
kostenlose-<span>tierschutz-website.de</span>
```

Akzeptanz:

- Oben links steht die URL als sichtbarer Seitentitel.
- Andersen Webworks taucht nur noch dort auf, wo es inhaltlich sinnvoll ist: Erfahrung, Umsetzung, Kontakt oder Impressum.

## 3. Impressum und Datenschutz

Aktueller Stand: Es gibt noch keine eigenen Seiten für Impressum und Datenschutz. In `docs/deployment.md` ist das bereits als offen markiert. Vorlage liegt lokal in `wahre-haustierliebe.de/impressum/index.html` und `wahre-haustierliebe.de/datenschutz/index.html`.

Umsetzung:

- `impressum/index.html` anlegen.
- `datenschutz/index.html` anlegen.
- Footer-Links ergänzen: Impressum, Datenschutz, Kontakt/Bewerbung.
- `sitemap.xml` um beide Seiten erweitern.
- GitHub-Pages-Workflow prüfen, damit die neuen Ordner mit veröffentlicht werden.

Inhaltliche Anpassungen:

- Anbieterkennzeichnung für Jan-Erik Andersen und Annemarie Andersen nach Vorbild von Wa(h)re Haustier(liebe).
- Projektcharakter klar benennen: ehrenamtliche Website-Spende für Tierschutzorganisationen.
- Datenschutz auf die reale Technik anpassen:
  - GitHub Pages als Hosting.
  - lokale Fonts, keine Google-Fonts-Einbindung.
  - keine Cookies, kein Tracking, keine eingebetteten Social-Media-Plugins.
  - Kontakt-/Bewerbungsformular als vorbereiteter E-Mail-Entwurf.
  - verarbeitete Formulardaten: Organisation, Kontaktperson, E-Mail, Region, Website, Schwerpunkt, Freitext, spätere Pflegeperson.
  - Speicherdauer und Löschmöglichkeit knapp erklären.

Akzeptanz:

- `/impressum/` und `/datenschutz/` sind direkt erreichbar.
- Footer verlinkt beide Seiten.
- Datenschutz beschreibt nicht versehentlich Technik von Wa(h)re Haustier(liebe), die hier nicht existiert.

## 4. [Streunerhilfe](https://streunerhilfe-plau.de/)-Case-Study mit offiziellem Logo

Aktueller Stand: Die Case Study nutzt das offizielle Logo der Streunerhilfe Plau.

Umsetzung:

- Das offizielle Logo von [`streunerhilfe-plau.de`](https://streunerhilfe-plau.de/) verwenden.
- Logo als `assets/img/streunerhilfe-plau-logo.png` speichern.
- In der Referenzkarte statt des Foto-Platzhalters verwenden.
- Bildtext und `alt` nicht generisch halten, sondern konkret: "Logo der Streunerhilfe Plau e. V."
- Herkunft dokumentieren: offizielle Logodatei der Vereinswebsite mit URL.

Akzeptanz:

- Die Case Study zeigt sichtbar das echte Vereinslogo, nicht ein Symbolfoto.
- Das Logo ist klar erkennbar, ohne die Karte zu überladen.

## 5. Formular als Mail-Entwurf öffnen

Aktueller Stand: `assets/js/main.js` öffnet einen vorbereiteten `mailto:`-Entwurf an `info@andersen-webworks.de`. Das ist bewusst derselbe Trick wie auf `jan-erik-andersen.de`.

Warum so:

- GitHub Pages kann selbst keine SMTP-Zugangsdaten speichern und kein PHP ausführen.
- Kein zusätzlicher Cloud-Account oder Formularanbieter nötig.
- Keine Bewerbungsdaten landen in einer fremden Formular-Datenbank.
- Die Besucher behalten die Kontrolle, weil sie die E-Mail im eigenen Mailprogramm noch absenden.

Umsetzung:

- Formular prüft Pflichtfelder im Browser.
- Honeypot-Feld bleibt als Bot-Bremse erhalten.
- Submit öffnet einen sauber formatierten Mail-Entwurf.
- Eingaben bleiben im Formular stehen, falls kein Mailprogramm konfiguriert ist.
- Feldlängen sind begrenzt, damit der Mailto-Entwurf nicht unnötig groß wird.

Akzeptanz:

- Button öffnet einen E-Mail-Entwurf an `info@andersen-webworks.de`.
- Betreff enthält die Organisation.
- Mailtext enthält Organisation, Kontaktperson, Antwortadresse, Region, Website, Tierschutz-Schwerpunkt, Beschreibung und spätere Pflegeperson.
- Keine Secrets im Repo, keine SMTP-Daten im Browser.

## 6. Option: später echter SMTP-Versand

Der PHP/PHPMailer-Endpunkt unter `server/smtp-endpoint/` bleibt als spätere Option liegen. Er ist aktuell nicht mit der Live-Seite verdrahtet.

Falls später doch echter serverseitiger Versand gewünscht ist:

- Endpoint auf eigenem PHP-Hosting deployen.
- SMTP-Zugangsdaten nur serverseitig setzen.
- `FORM_ALLOWED_ORIGIN=https://kostenlose-tierschutz-website.de` konfigurieren.
- SPF/DKIM/DMARC passend zur Absenderdomain prüfen.
- Datenschutztext wieder auf serverseitigen Versand anpassen.

## Sinnvolle Reihenfolge

1. Marke im Header/Footer/Meta ändern, weil das sofort sichtbar falsch ist.
2. Impressum und Datenschutz anlegen, weil Pages sonst unfertig wirkt.
3. Bilder und Lizenznachweise einbauen, inklusive Teamfotos und [Streunerhilfe](https://streunerhilfe-plau.de/)-Logo.
4. Formular auf statischen Mailto-Entwurf umstellen.
5. Manuelle Sichtprüfung per lokal geöffneter `index.html`, danach Live-Pages prüfen, sobald DNS/HTTPS sauber durch ist.

## Offene Entscheidungen

- Soll der Bildnachweis kompakt im Footer stehen oder als eigene Seite plus Footer-Link?
