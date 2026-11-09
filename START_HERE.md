# VEGAS HOCKEY — NEW UPDATE: WEATHER + COACH CORNER + PLAYBOOK + AIRLINES

This is the existing **Vegas_Hockey_React_Project** updated. Keep the same repository. The ZIP is flat (package.json at the top).

## VS Code / GitHub Pages update instructions

1. Back up the current folder, then replace its source files with this updated project. Do not nest another project inside the existing project.
2. In VS Code, open the project folder (the one directly containing package.json).
3. Run `npm install` (if needed) and `npm run dev` to preview.
4. Run `npm run build` to generate `docs/` (already configured in vite.config.js).
5. In the VS Code Source Control tab: stage all changes, Commit, and Sync Changes to GitHub.
6. In your repository, Settings > Pages should use `main` and `/docs`. If it was already configured, no need to change it.

## What to edit later

- `src/data/weather.js`: five daily snapshot values, condition, as-of date. **Weather is not live.** Website links to live forecast.
- `src/data/coach.js`: COACH_NOTES array. Enter actual coach announcements as object entries; do not invent coach messages. GitHub Pages has NO shared message-posting back end.
- `public/HOCKEY_PLAYBOOK.pdf`: exact original four-page PDF from the coach. Builds into `docs/HOCKEY_PLAYBOOK.pdf` and is publicly accessible.
- `src/data/airlines.js`: OTHER_AIRLINES array provides space to add verified rules for other teammates.

## Notes about public sharing

Anyone with the public website or GitHub repo link can view the original playbook PDF. Ask the coach before publicly publishing sensitive plays. Do not commit private booking codes, contact information, or API keys. The site includes its usual official ASHA schedule link at the TOP.

## For ITEC 305 practice

- `Weather.jsx`: arrays, objects, named imports, JSX expressions, props, .map(), spread, keys.
- `CoachCorner.jsx`: ternary conditional rendering, reusable components, .map(), props; explain why static GitHub Pages cannot store shared coach posts.
- `AirlineGuide.jsx`: data separation, .map(), props, conditional rendering, template strings in coach pages.
- `index.css`: class selectors and responsive CSS, not React state.

---

# Vegas Hockey 2026 — React Itinerary

A real, shareable group itinerary built only around the techniques shown in the attached NYIT ITEC 305 React class starter, React introduction, React Deep Dive notes, and class homework. **No quiz or study-exam interface.** Explanations are written as abundant comments next to the code that demonstrates each idea.

## Run it on your Mac in VS Code

1. Extract the ZIP. The folder is named `Vegas_Hockey_React_Class_Comments`.
2. Open **that folder**, not a folder above or below it, in VS Code. Confirm `package.json` is directly inside the open folder.
3. Open Terminal > New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite, usually `http://localhost:5173/`.

If a Vite server is already running for the old version, stop it with `Ctrl+C` and then start the new one. Otherwise Vite may choose a different port, such as 5174.

## What everyone sees

- **Very top of page:** a sticky gold ribbon and prominent **Open the Official Schedule** link to ASHA's real 2026 tournament schedule (not an automatically updated copy).
- The first two games: **Thu Nov 12, 5:50 PM**, and **Fri Nov 13, 8:20 AM**, both at America First Center (Henderson 2 NHL Rink).
- Saturday and Sunday tournament game times clearly marked **TBD**.
- Five-day interactive itinerary with day tabs and show-all option.
- Direct Google Maps links to rinks and Vegas stops.
- Flights, Airbnb listing, and a **78-item hockey/pool/casual/dressy/toiletries/travel packing list**.
- **No passwords, flight booking confirmation number, or ticket order number** in the shared webpage.

## Find the class ideas in the actual code

1. `src/index.jsx` — where `createRoot` and `render` put `<App />` inside the root div.
2. `src/App.jsx` — component imports, uppercase function names, fragments, JSX and component composition.
3. `src/components/Section.jsx` — props, `children`, rest and spread (`...props`), and forwarded props.
4. `src/components/Tabs.jsx` — two JSX slots: `buttons` and `children`.
5. `src/components/Itinerary.jsx` — `useState`, arrays, `.map()`, functions with parameters, arrow callbacks, conditional rendering and `key`.
6. `src/components/TabButton.jsx` — `onClick`, props, and conditional `className`.
7. `src/components/DayCard.jsx` — rendering arrays of objects with `.map()` and props.
8. `src/components/PackingItem.jsx` — `useState` owned by a small reusable component, with `onChange`.
9. `src/components/PackingChecklist.jsx` — nested `.map()` to show an array of groups and their items.
10. `src/data/` — named exports, arrays and objects kept separately from the components.
11. `src/index.css` — CSS styles, classes, active states and mobile layouts.

## Important constraints and caveats

- This project **does not fetch the official tournament schedule**, because that would introduce concepts not used in the attached class files. The clickable ASHA schedule is intentionally the primary source for updates.
- The packing checkboxes reset on refresh or reload. Saving them between sessions would require browser storage code not used in the provided React class examples.
- All sightseeing and postgame travel is suggested, not scheduled by ASHA.
- The NHL arena event listing showed **6:30 PM**, whereas the ticket screenshot showed **7:00 PM**; confirm the correct puck drop with the ticket provider.
- The flight dates/times are taken from the shared screenshots, and should be checked through JetBlue before departure.
- The event link is `https://www.armedserviceshockey.org/leagues/schedules.cfm?clientID=7054&leagueID=34784`.

## Share the website

For a free public link, upload the **built website** to a static host (such as GitHub Pages). This is the same front-end build idea described in the class notes. Run `npm run build` and use the generated `dist` folder. This ZIP is the editable source project; it has not been published for you.

To change future tournament games: edit `src/data/days.js`. The important official link stays at the top even before you update the manually entered itinerary.


## New: veteran freebies in the daily footnotes (Nov 8, 2026)

Each itinerary day now has a modest **Veteran food & perks** note at the very bottom of its schedule. The note uses the `veteranOfferIds` array inside `src/data/days.js` to decide which items appear. The separate **Veteran freebies around Vegas** section contains the full terms, sources and Google Maps links. These are not reservations and do not change the official hockey schedule.

**Where to study the React code:**

- `src/data/veteranOffers.js` — JavaScript objects, arrays, named exports, dot/bracket notation, and lots of explanatory comments.
- `src/data/days.js` — the `veteranOfferIds` array in each day's object.
- `src/components/VeteranPerksFootnote.jsx` — a small reusable component, `props`, `.map()`, JSX, `key`, and regular links.
- `src/components/VeteranOffers.jsx` — a larger reusable `OfferCard` and `.map()` with the same data.
- `src/components/DayCard.jsx` — passing the day's `veteranOfferIds` to the footnote as a prop.
- `src/index.css` — readable CSS classes and responsive layout, no additional React hooks.

**To add/edit an offer:** Add or change its entry in `VETERAN_OFFERS`, optionally add its ID to `VETERAN_OFFER_ORDER`, then add that ID to a day in `days.js`. No advanced API code, database, or new library is needed.

**Publishing to the same GitHub Pages site:** Extract this ZIP and copy its contents INSIDE your existing Git-connected `Vegas_Hockey_React_Project` folder. Preserve the original hidden `.git` folder. Preview with `npm run dev`, then run `npm run build` (this updates `docs/`), then commit and sync in VS Code. Do not just push `src/` updates: GitHub Pages reads the built `docs/` files.
