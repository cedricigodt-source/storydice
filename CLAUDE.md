# Storydice

Een digitale storydice voor de klas: met één knop gooi je dobbelstenen met prentjes, die groot op het bord geprojecteerd worden. Doel, eerste versie en keuzes staan in `PROJECT_OVERVIEW.md`. Lees dat eerst.

## Werkwijze

- De gebruiker programmeert niet. Praat Nederlands, kort en zonder jargon, en geef bij keuzes een aanbeveling.
- Volg `.claude/rules/commandos.md` bij elk commando: één eenvoudig commando per keer.
- Applicatiewijzigingen verlopen via een GitHub-issue, met `/work-issue` of `/work-issues`.
- Bewaar geen geheimen en geen gegevens over leerlingen in de repo.

## Bouwstenen

- **React met Vite, in TypeScript.** Eén scherm dat reageert op klikken. TypeScript vangt veel fouten op voordat de app draait.
- **Vormgeving:** het design system in `design-system/`. Laad `design-system/tokens.css` en `design-system/components/bundle.css` één keer in `src/main.tsx`, en gebruik de `ai-`-klassen en tokens in plaats van losse kleurcodes. `bundle.js` is niet nodig: React regelt zelf het gedrag.
- **Prentjes:** een gratis iconenset met een open licentie, gekozen in het eerste issue. Vermeld de licentie in de repo.
- **Opslag:** alleen het gekozen aantal dobbelstenen, in `localStorage`. Verder niets.
- **Tests voor de werking:** Vitest met React Testing Library.
- **Tests met de echte app:** Playwright, tegen de app die Vite start.
- **Controle van de code:** ESLint, zoals Vite het meelevert.
- **Publicatie:** GitHub Pages via een workflow in `.github/workflows/`, bij elke push naar `main`. Zet daarvoor `base: '/storydice/'` in `vite.config.ts`.

## Commando's

Deze commando's werken zodra het eerste issue het project heeft aangemaakt met `package.json`. Werk deze sectie bij als een script een andere naam krijgt.

Afhankelijkheden installeren:

```
npm install
```

De app lokaal starten:

```
npm run dev
```

De code controleren:

```
npm run lint
```

Tests voor de werking:

```
npm test
```

De browser voor de tests met de echte app installeren (één keer per computer):

```
npx playwright install chromium
```

Tests met de echte app (Playwright start zelf de app met Vite):

```
npm run test:e2e
```

De website bouwen:

```
npm run build
```

`npm test` voert Vitest één keer uit, zonder te blijven wachten op wijzigingen. Tests voor de werking staan naast de code als `src/**/*.test.tsx`, tests met de echte app in `e2e/`. De workflow `.github/workflows/ci.yml` voert dezelfde controles uit bij elke pull request en push naar `main`. Voer de controles uit in de volgorde uit `/work-issue`: lint, tests, tests met de echte app en build.
