NORDSTADT ROLEPLAY — WEBSITE
=============================

INHALT
------
index.html
style.css
script.js
nordstadt-cover.jpg
nordstadt-social.jpg
favicon.svg

START
-----
1. Alle Dateien gemeinsam im selben Ordner lassen.
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

Die vollständigen Links nur zwischen die Anführungszeichen eintragen.

Beispiel:
discord: "https://discord.gg/DEIN-LINK",
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
Unter const managementRoles = [...] können Rollen, Namen, Besetzung und
Anzahl geändert werden.

Beispiel:
{
  role: "Projekt Manager",
  holder: "Max Mustermann",
  filled: true,
  count: 1,
  department: "Projektleitung"
}

Bei offenen Rollen:
holder: "",
filled: false,
count: 0

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
- Das Coverbild liegt direkt neben der index.html.
- Die Website nutzt keine externen Bildpfade.
- Der Delmore-Studios-Link ist bereits im Footer eingetragen.
- Der Roblox- und Realitäts-Hinweis befindet sich im Footer.
