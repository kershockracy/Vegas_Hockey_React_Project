import { LINKS } from '../data/links.js';

// ITEC 305: IMPORTING a named export uses curly braces: { LINKS }.
// Default imports (such as "import Header from ...") do not use braces.
// Because LINKS is one object, we read its URL with "dot notation":
// LINKS.tournament.

// Web fundamentals from the class review: HTTPS is the secure form of HTTP
// (typically port 443). A browser follows the URL in this link to load the
// remote website. That is different from React state: clicking an external
// link does not change our local data or the ASHA site's data.
export default function Header() {
  return (
    <>
      {/* The site starts with this ribbon because the LIVE schedule link
          is the group's most important piece of information.
          An <a> element is a regular HTML hyperlink; it does not need
          useState because React isn't changing the page content here. */}
      <div className="schedule-ribbon">
        <div className="container schedule-ribbon-inner">
          <div className="ribbon-copy">
            <span className="live-dot" aria-hidden="true"></span>
            <strong>OFFICIAL TOURNAMENT SCHEDULE</strong>
            <span className="ribbon-extra">Check ASHA first for the latest games and rinks</span>
          </div>
          <a className="ribbon-link" href={LINKS.tournament} target="_blank" rel="noopener noreferrer">
            OPEN SCHEDULE <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <header className="masthead">
        <div className="container masthead-inner">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">V<span>H</span></span>
            <span><strong>VEGAS HOCKEY</strong><small>VETERANS DAY · 2026</small></span>
          </a>
          <nav className="site-nav" aria-label="Site sections">
            <a href="#official-schedule">Game schedule</a>
            <a href="#weather">Weather</a>
            <a href="#itinerary">Itinerary</a>
            <a href="#veteran-perks">Veteran freebies</a>
            <a href="#coach">Coach / Playbook</a>
            <a href="#locations">Rinks & maps</a>
            <a href="#nearby">Near Airbnb</a>
            <a href="#airlines">Airlines</a>
            <a href="#packing">Packing</a>
          </nav>
        </div>
      </header>
    </>
  );
}
