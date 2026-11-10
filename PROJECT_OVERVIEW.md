# Storydice

## Doel
Een digitale storydice: dobbelstenen met prentjes. De leerkracht gooit, en de klas verzint een verhaal met de prentjes die bovenkomen. Zo krijgen leerlingen snel een startpunt voor een verhaal of een schrijfopdracht, zonder echte dobbelstenen.

## Doelgroep
Leerkrachten van de derde graad secundair onderwijs (leerlingen van 16 tot 18 jaar). De leerkracht projecteert de app op het bord voor de hele klas. Daarom moet alles groot en vanop afstand goed leesbaar zijn. Voor deze leeftijd mogen de prentjes eerder abstract zijn, zoals een sleutel, een trein, een masker of een storm, zodat er ruimte is voor eigen interpretatie.

## Eerste versie
- Met één knop gooi je alle dobbelstenen tegelijk, standaard 6.
- Elke dobbelsteen toont een prentje, groot genoeg voor projectie op het bord.
- De leerkracht kiest met hoeveel dobbelstenen er gegooid wordt.
- De prentjes komen uit een gratis, vrij te gebruiken iconenset, zodat er meteen veel verschillende prentjes zijn.

## Nog niet
- Eigen prentjes toevoegen
- Thema's, zoals een set voor sciencefiction of voor geschiedenis
- Verhalen of worpen bewaren
- Een timer of spelregels

## Platform
Een website, geopend in de browser van de klascomputer. Er moet niets geïnstalleerd worden en ze werkt op elke computer met een browser.

## Frameworks en bouwstenen
React met Vite. De app is één scherm dat reageert op een klik, en daar is React goed voor. Vite bouwt er een statische website van die gratis op GitHub Pages kan. De prentjes komen uit een gratis iconenset met een open licentie. Die kiezen we bij het eerste issue.

## Opslag
De app bewaart niets, behalve het gekozen aantal dobbelstenen in het browsergeheugen, zodat dat de volgende les nog goed staat. Er komen geen gegevens over leerlingen in de app.

## Vormgeving
Gebruikt het design system in `design-system/`. Je kan later altijd aan de AI vragen om een ander design te ontwerpen en het huidige te vervangen.

## Publicatie
Een website op GitHub Pages. Elke merge naar de hoofdbranch publiceert de site automatisch via een workflow.
