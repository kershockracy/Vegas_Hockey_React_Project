// ===================================================================
// VEGAS HOCKEY 2026 -- THE APP COMPONENT
// ===================================================================
// ITEC 305: A React app is assembled from COMPONENTS.
// A component is a JavaScript function that begins with an UPPERCASE letter
// and RETURNS JSX (the HTML-looking code inside JavaScript).
//
// The instructor called this "separation of concerns":
// Header handles the heading; OfficialSchedule handles the schedule link;
// Itinerary handles the day tabs; PackingChecklist handles the gear.
// This is much easier to maintain than writing everything in App.jsx.
//
// IMPORTANT: React is a LIBRARY used to build the front-end user interface.
// It does not replace a database, middleware, or the official game schedule.
// This website displays our manually entered travel plans, and uses a
// normal <a> link to the real association's schedule.

import Header from './components/Header.jsx';
import OfficialSchedule from './components/OfficialSchedule.jsx';
import Hero from './components/Hero.jsx';
import Itinerary from './components/Itinerary.jsx';
import LocationLinks from './components/LocationLinks.jsx';
import TravelInfo from './components/TravelInfo.jsx';
import PackingChecklist from './components/PackingChecklist.jsx';
import Section from './components/Section.jsx';

// "export default" lets index.jsx import the component as App.
// The <Header /> syntax is COMPONENT COMPOSITION: you use a component
// like a custom HTML tag instead of calling Header() as a regular function.
export default function App() {
  return (
    // ITEC 305: A function returns ONE JSX parent.
    // <>...</> is a FRAGMENT: it groups siblings without adding an extra
    // div to the browser's document (DOM).
    <>
      {/* The official schedule is the very first visible link on this site. */}
      <Header />
      <main>
        <OfficialSchedule />
        <Hero />
        <Itinerary />
        <LocationLinks />
        <TravelInfo />
        <PackingChecklist />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <strong>VEGAS HOCKEY · 2026</strong>
          <span>Group trip guide · November 11–15, 2026 · All trip times Pacific</span>
          <span>Official ASHA schedule takes precedence. This itinerary does not update itself.</span>
        </div>
      </footer>
    </>
  );
}
