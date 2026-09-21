# Sonnenhof der Koboldtiere – gespendete Website

> Arbeitsnotiz für den nächsten konkreten Sonnenhof-Aufbau. Stand: 17.09.2026 (Update nach Bildquellen-Prüfung).

## Status

- **Auftraggeberin:** Lara Sohn, Gründerin Sonnenhof der Koboldtiere; nach ihrer Angabe auch verbunden mit „Katzenstimme grenzenlos e. V."
- **Fokus der Website:** Sonnenhof der Koboldtiere; „Katzenstimme grenzenlos" wird erwähnt, ist aber nicht Schwerpunkt.
- **Bezug zur Hauptinitiative:** Diese Site wird im Rahmen von `kostenlose-tierschutz-website.de` umgesetzt (gespendete Website für kleine Tierschutzorganisationen). Sie ersetzt die Initiative nicht, sondern ist ein konkretes Praxisbeispiel.
- **Alte Standalone verworfen:** `https://andersenwebworks.tailcb6eb8.ts.net:3100/generated/sonnenhof-koboldtiere/index.html` war ein Schnellschuss ohne echte Infos. Sie wird nicht weitergeführt.
- **Site-Stand (17.09.2026):** Erste vollständige Fassung der Sonnenhof-Site liegt im Working Folder. Sechs Seiten + gemeinsames Stylesheet + ergänzte Sitemap. Alle Fund-Daten (IBAN, BIC, Bank, PayPal, Vereinsregister, Vorständin) sind eingesetzt; fehlende Felder (vollständige Postanschrift, offizielle Vereins-E-Mail, vollständige Bildauswahl) sind als `TODO:` markiert.

## Was im Working Folder liegt

- `sonnenhof.html` – Startseite mit Hero, drei Spendenpfaden, Tier-Vorschau.
- `sonnenhof-geschichte.html` – Laras Weg 2015 → 2024 mit Timeline.
- `sonnenhof-tiere.html` – Galerie der Koboldtiere (Murron, Pepe, Pavel, Hunter, Njuvra, Little Bee und Hofgemeinschaft).
- `sonnenhof-unterstuetzen.html` – einmalig / Patenschaft / Ehrenamt, inkl. Bankdaten-Block mit Kopier-Button und PayPal-Link.
- `sonnenhof-impressum.html`, `sonnenhof-datenschutz.html` – vereinsbezogene Rechtstexte (TODO-Felder markiert).
- `assets/css/sonnenhof.css` – gemeinsames Stylesheet (Grün + Sand).
- `assets/img/sonnenhof/_vorschlaege/` – vier larasfreie Hundebilder aus der Mondpixel-Galerie (Thumbnails, 800×533).
- `assets/img/sonnenhof/IMAGE-SOURCES.md` – detaillierte Bildquellen-Doku (was geht, was blockiert ist, was wir brauchen).
- `sitemap.xml` und `robots.txt` um die Sonnenhof-Seiten ergänzt.

Begründung für Root-Position statt `/sonnenhof/`: Die Workspace-Schreibwerkzeuge legen neue Ordnerstrukturen nicht automatisch an. Sobald Hosting/Domain entschieden sind, werden die Dateien in einen sauberen Subfolder (oder ein eigenes Repo) umgezogen – das ist ein einmaliger Migrationsschritt von zwei Minuten.

## Marken- und Designrichtung

- **Farbe:** Grün, warm, mit sandigen Akzenten. Markenpalette in `assets/css/sonnenhof.css`.
- **Logo:** Aktuell ein inline-SVG-Logo (warme Sonne mit Tier-Silhouetten). Eigenständiger Logo-Entwurf in Grün kann folgen, sobald Lara Wasserzeichen oder Grafik liefert.
- **Ton:** Nahbar, ruhig, respektvoll gegenüber den Tieren. Kein Vermarktungs-Sprech, kein Mitleids-Appell. Klar gegen Qualzucht und Wegwerf-Tierhaltung.
- **Fundraising-Logik:** Drei Wege (Einmalig / Patenschaft / Ehrenamt), IBAN + PayPal prominent, Patenschaftsmodell als zwei Varianten (Einzeltier / Hof).

## Laras Textkorrekturen (verbindlich für die Neufassung)

1. **Zeit, Ruhe und Zugehörigkeit** → Lara-Version:
   > Spielen, gemeinsame Gartenzeit, Gassi, schlafen, kuscheln, Nähe genießen und Teil der Familie sein.
   > *Anmerkung Lara:* „Die Tiere leben hier im Familienverbund, integriert wie in einem normalen Zuhause."

2. **Die Hofgemeinschaft** → Lara-Version:
   > **Die Hofgemeinschaft als Familienverbund**
   > Querschnittsgelähmte Hunde und Katzen in Rollis und Rutschsäcken, und mit anderen Einschränkungen, finden hier zusammen mit geretteten Kaninchen ihre Familie und ihr Zuhause für immer. Sie sind nicht nur versorgt, sondern ein Teil der harmonischen Gemeinschaft.

3. **Unterstützung** → Lara-Version:
   > Ehrenamtliche Helferinnen und Helfer unterstützen praktisch, Patinnen und Paten begleiten einzelne Tiere, und Spenden finanzieren Pflege und medizinische Versorgung.

Alle drei Korrekturen sind in den jeweiligen Seiten eingebaut.

## Bildquellen-Status (detailliert in `assets/img/sonnenhof/IMAGE-SOURCES.md`)

Eigenständig herunterladbar war nur ein Bruchteil der gewünschten Bilder:

- **OneDrive-Fotos** (mit Laras benannten Wunschbildern für Njuvra und Murron): Microsoft-Login erforderlich, nicht eigenständig abrufbar.
- **Picdrop-Set `dSxhRTmCkT`** (Pavel + Hunter): nicht öffentlich, vermutlich passwortgeschützt.
- **Picdrop-Set `YGRnykpRGm`** (Elena Reckel, Lara + Hunde): öffentlich, aber Lara frontal erkennbar im Bild – fällt nach Laras Regel raus.
- **Picdrop-Set `YqiFsMFBbt`** (Mondpixel Kalenderfavoriten): öffentlich, vier larasfreie Hundebilder heruntergeladen. Acht Katzenbilder ebenfalls larasfrei, aber nicht heruntergeladen (kein Wasserzeichen auf den Bildern, niedrige Auflösung). Drei Hundebilder zeigen Lara frontal und fallen raus.
- **Picdrop-Set `f3gej8xVSr`** (Katzenstimme Kalender 2026): öffentlich, fünf Bilder, Veröffentlichung an Einverständnis via WhatsApp/Insta/Mail gebunden.

## Was wir noch brauchen, bevor eine sinnvolle neue Seite live gehen kann

- **Echte Bilder:** Annemarie bittet Lara um zwei bis drei Schlüsselbilder aus dem OneDrive-Ordner (besonders Njuvra und Murron) als Datei. Alternativ Login-Daten für die Picdrop-Set `dSxhRTmCkT` (Pavel und Hunter). Wenn die Mondpixel-Thumbnails aus `_vorschlaege/` reichen, baue ich sie als Hero und Hofgemeinschafts-Bilder ein.
- **Vollständige Vereinsanschrift** für Impressum.
- **Offizielle Vereins-E-Mail** für Impressum und Rechteauskunft.
- **Patenschaftsmodell finalisieren:** läuft es pro Tier oder als Hof-Patenschaft? Mindestbeitrag? Spendenbescheinigung? Folgeprozess (Annahme, Verteilung, Updates)?
- **WDR-Sendedatum konkret** für Deploy-Timing.

## Bewusst offen

- Domain/URL für den Sonnenhof ist noch nicht festgelegt. Möglich wären eine eigene Domain (z. B. `sonnenhof-der-koboldtiere.de`) oder ein Bereich unter `kostenlose-tierschutz-website.de`. Festlegung mit Lara und Annemarie.
- Little-Bee-Beschriftung: Foto-Layout sagt „Hund mit besonderem Pflegebedarf", Flyer sagt „querschnittsgelähmt ausgesetzt". Vor Veröffentlichung mit Lara präzisieren.
- Subfolder-Sortierung (`/sonnenhof/`) oder eigene Domain – technische Migration von zwei Minuten, sobald entschieden.
- Mondpixel-Veröffentlichungs-Einverständnis: Christina Mehr bittet um kurze Bestätigung per WhatsApp/Insta/Mail, bevor die Katzenstimme-Kalender-Bilder offiziell veröffentlicht werden. Klärung mit Lara nötig.

## Nächste sinnvolle Schritte

1. Bilder aus Laras Hand in `assets/img/sonnenhof/` ablegen (siehe Tabelle in `IMAGE-SOURCES.md`).
2. Slots in den HTML-Seiten einzeln ersetzen (Helfer-Skript: einmal lesen, einmal patchen, Bild-Pfad + Alt-Text setzen).
3. TODO-Felder im Impressum/Datenschutz mit Laras Angaben füllen.
4. Sitemap und robots.txt an finale URL anpassen (Subfolder oder Domain).
5. Logo-Endauswahl mit Lara.
6. Patenschafts-Annahme klären (Formular oder Mailto an Lara direkt).
7. Sichtprüfung der Site, danach Deploy/Veröffentlichung.
8. Nach WDR-Sendung: Monitoring der Spendenwege, ggf. nachjustieren.
