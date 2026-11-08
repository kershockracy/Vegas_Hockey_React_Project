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
