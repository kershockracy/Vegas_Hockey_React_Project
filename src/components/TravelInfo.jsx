import { useState } from 'react';
import { LINKS } from '../data/links.js';
import Section from './Section.jsx';

// ===================================================================
// ITEC 305: A SECOND EXAMPLE OF useState AND CONDITIONAL RENDERING
// ===================================================================
// The trip's main information is always visible. The "Flight tips" box
// is extra information revealed by clicking a button.
// This is based on our React homework: click a button, update state,
// and conditionally show or hide an element.
//
// Starting state = false. Clicking the button calls handleTips(), which
// flips it from false to true. The JSX expression {showTips && (...)}
// means "show this content only while showTips is true".

export default function TravelInfo() {
  const [showTips, setShowTips] = useState(false);

  function handleTips() {
    setShowTips(!showTips);
  }

  return (
    <Section className="container content-section" id="travel" title="Flights, villa & travel" kicker="04 / THE LOGISTICS">
      <div className="travel-grid">
        <article className="travel-card">
          <span className="eyebrow">GETTING THERE</span><h3>JetBlue · JFK → LAS</h3>
          <p><strong>Wednesday, Nov 11 · Flight B6 511</strong></p>
          <div className="flight-line"><div><b>JFK</b><small>10:20 AM · ET</small></div><span aria-hidden="true">→</span><div><b>LAS</b><small>1:09 PM · PT</small></div></div>
          <p>Las Vegas arrival shown as Terminal 3 in the supplied flight screenshot. Confirm flight status before departure.</p>
          <a href={LINKS.jetblue} target="_blank" rel="noopener noreferrer">Check JetBlue flight status ↗</a>
        </article>
        <article className="travel-card">
          <span className="eyebrow">HEADING HOME</span><h3>JetBlue · LAS → JFK</h3>
          <p><strong>Sunday, Nov 15 · Flight B6 948</strong></p>
          <div className="flight-line"><div><b>LAS</b><small>11:09 PM · PT</small></div><span aria-hidden="true">→</span><div><b>JFK</b><small>6:59 AM Mon · ET</small></div></div>
          <p>Boarding listed for 10:24 PM. Leave time for checked hockey bags, sticks and security.</p>
          <a href={LINKS.jetblue} target="_blank" rel="noopener noreferrer">Check JetBlue flight status ↗</a>
        </article>
        <article className="travel-card travel-card-villa">
          <span className="eyebrow">HOME BASE</span><h3>Spring Valley villa</h3>
          <p>The group's 10-bedroom Airbnb is west of the Strip. Pool, hot tub, billiards, basketball and an outdoor kitchen.</p>
          <p>Confirm check-in, Sunday gear/luggage storage, pool heating charges and rideshare arrangements with the host.</p>
          <a href={LINKS.airbnb} target="_blank" rel="noopener noreferrer">Open the Airbnb listing ↗</a>
        </article>
      </div>
      <div className="travel-notice">
        <div>
          <strong>Quick travel reminder</strong>
          <p>Take rideshare to Wednesday's NHL game so the group can explore the Strip afterward. For rink days, allow space for full hockey bags and sticks.</p>
        </div>
        <button type="button" onClick={handleTips}>{showTips ? 'Hide flight tips −' : 'Show flight tips +'}</button>
      </div>
      {showTips && (
        <div className="tips-panel">
          <p><strong>Hockey equipment:</strong> Verify JetBlue's current rules for sticks, bags and equipment before departure.</p>
          <p><strong>Smelling salts:</strong> Check the exact product's airline and hazardous-material rules; do not assume they are permitted in carry-on or checked bags.</p>
          <p><strong>Portable chargers:</strong> Keep lithium power banks in carry-on baggage as required by airline safety rules.</p>
          <p><strong>Airbnb:</strong> Arrange storage for hockey equipment between Sunday checkout and your late-night return flight.</p>
        </div>
      )}
      <div className="time-warning"><b>Golden Knights ticket time discrepancy:</b> the arena's event listing says 6:30 PM Wednesday, but the group's original ticket screenshot says 7:00 PM. Plan for the earlier listed time and verify directly with the ticket provider.</div>
    </Section>
  );
}
