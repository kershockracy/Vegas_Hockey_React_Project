import { VETERAN_OFFERS } from '../data/veteranOffers.js';

// ITEC 305: This is a REUSABLE COMPONENT which takes ONE prop: offerIds.
// We pass an array such as ['silverton','mgm'] from the day object.
// .map() runs a callback once for each ID, returning a small JSX link.
// Because the key is a UNIQUE ID string, React can track each link.
//
// Notice VETERAN_OFFERS[offerId]: the square brackets mean the property
// name comes FROM A VARIABLE. Dot notation VETERAN_OFFERS.offerId would
// look for a property literally named "offerId", and that is not our goal.
// No useState is needed: these are normal external HTML links, not data
// changing on the page.
export default function VeteranPerksFootnote({ offerIds }) {
  return (
    <aside className="veteran-day-note" aria-label="Veteran offers for this day">
      <div className="veteran-day-note-title">✦ VETERAN FOOD & PERKS</div>
      <ul className="veteran-day-note-list">
        {offerIds.map((offerId) => (
          <li key={offerId}>
            <a href={VETERAN_OFFERS[offerId].source} target="_blank" rel="noopener noreferrer">
              {VETERAN_OFFERS[offerId].name}
            </a>
            <span> — {VETERAN_OFFERS[offerId].short}</span>
          </li>
        ))}
      </ul>
      <a className="veteran-more-link" href="#veteran-perks">
        See all deals, dates, requirements & map links ↓
      </a>
      <p className="veteran-note-disclaimer">Offers apply individually to qualifying service members, not automatically to the entire party. Confirm participation and bring proof of service.</p>
    </aside>
  );
}
