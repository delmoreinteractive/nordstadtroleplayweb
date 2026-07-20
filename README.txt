NORDSTADT ROLEPLAY — WEBSITE
=============================

INHALT
------
index.html
style.css
script.js
assets/nordstadt-cover.jpg
assets/nordstadt-social.jpg
assets/favicon.svg

START
-----
1. Alle Dateien und den assets-Ordner zusammenlassen.
2. Den Ordner in Visual Studio Code öffnen.
3. index.html mit „Live Server“ starten.
4. Der Ordner kann ebenfalls direkt auf GitHub Pages hochgeladen werden.

LINKS EINTRAGEN
---------------
Ganz oben in script.js befindet sich:

const siteConfig = {
  links: {
    discord: "",
    robloxGame: "",
    tiktok: "",
    youtube: "",
    instagram: ""
  },
  ...
};

Der Discord-Link ist bereits eingetragen:

https://discord.gg/fyNv6UFMDG

Weitere vollständige Links nur zwischen die Anführungszeichen eintragen.

Beispiel:
discord: "https://discord.gg/fyNv6UFMDG",
robloxGame: "https://www.roblox.com/games/DEINE-ID",

Alle passenden Buttons auf der Website werden automatisch aktualisiert.

STATUS ÄNDERN
-------------
Der Status wird ebenfalls ganz oben in script.js gepflegt.

Mögliche Werte:
online
maintenance
offline
development

Beispiel:
game: {
  state: "online",
  label: "Online"
}

Der Status ist aktuell eine manuelle Anzeige und nicht mit Roblox oder
Discord verbunden. Für echte Live-Daten wäre eine API oder ein Backend nötig.

MANAGEMENT PFLEGEN
------------------
Der Stellenstatus wird auf der Website ausdrücklich als wöchentlich
aktualisiert gekennzeichnet.

Ganz oben in script.js kann das sichtbare Aktualisierungsdatum geändert werden:

management: {
  updateFrequency: "Wöchentlich",
  lastUpdated: "20.07.2026"
}

Unter const managementRoles = [...] können Rollen, Namen, Besetzung und
Anzahl geändert werden.

Beispiel:
{
  role: "Projekt Manager",
  holder: "Max Mustermann",
  filled: true,
  count: 1,
  vacancies: "0",
  department: "Projektleitung"
}

Bei offenen Rollen:
holder: "",
filled: false,
count: 0,
vacancies: "1"

Für variable gesuchte Stellen ist auch Folgendes möglich:
vacancies: "2–4"

EVENTS PFLEGEN
--------------
Unter const events = [...] können Events ergänzt werden.

Das Datumsformat ist:
TT.MM.JJJJ

Beispiel:
{
  title: "Community-Abend",
  type: "Community",
  date: "24.07.2026",
  description: "Gemeinsames Roleplay in Nordstadt.",
  time: "19:00 Uhr"
}

WICHTIG
-------
- Das Coverbild wurde lokal im assets-Ordner gespeichert.
- Die Website nutzt keine externen Bildpfade.
- Der Delmore-Studios-Link ist bereits im Footer eingetragen.
- Der Roblox- und Realitäts-Hinweis befindet sich im Footer.


AKTUELLER MANAGEMENT-STATUS
---------------------------
Besetzt:
- Inhaber
- Stv. Projekt Manager
- Communitymanager

Gesucht:
- Projekt Manager: 1 Position
- Geschäftsführung: 1 Position
- Management Leitung: 2 Positionen
- Personalverwaltung: 2–4 Positionen
- Entwicklungsmanagement: 2–4 Positionen
- Entwicklungsmanagement | Game: 2–4 Positionen
- Qualitätsmanager: 2–4 Positionen
- Social Media Manager: 2–4 Positionen
