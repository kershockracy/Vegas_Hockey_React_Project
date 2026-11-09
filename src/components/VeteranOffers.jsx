import Section from './Section.jsx';
import { VETERAN_OFFERS, VETERAN_OFFER_ORDER } from '../data/veteranOffers.js';

// ============================================================================
// ITEC 305: A component receives PROPS, returns JSX, and can be REUSED.
// ============================================================================
// One OfferCard displays one object. The parent creates eight OfferCards by
// using .map() on an array of IDs. This avoids duplicating almost-identical
// JSX eight times, just like our DayCard and CoreConcept class exercises.
function OfferCard({ offer }) {
  return (
    <article className="veteran-offer-card">
      <div className="veteran-offer-card-head">
        <span className="veteran-offer-badge">{offer.badge}</span>
        <span className="veteran-offer-days">{offer.days}</span>
      </div>
      <h3>{offer.name}</h3>
      <strong className="veteran-offer-when">{offer.when}</strong>
      <p className="veteran-offer-short">{offer.short}</p>
      <p className="veteran-offer-details">{offer.details}</p>
      <p className="veteran-offer-place">{offer.place}</p>
      <div className="veteran-offer-actions">
        {/* These are regular anchor links (<a>), so no state or handlers.
            target="_blank" leaves our trip page open on a phone.
            The hrefs come from the DATA OBJECT through props. */}
        <a href={offer.source} target="_blank" rel="noopener noreferrer">Offer rules ↗</a>
        {/* ITEC 305: Conditional rendering with &&: if there is a second
            source for this deal, show another link. If not, show nothing. */}
        {offer.secondary && <a href={offer.secondary} target="_blank" rel="noopener noreferrer">2026 details ↗</a>}
        <a href={offer.map} target="_blank" rel="noopener noreferrer">Directions ↗</a>
      </div>
    </article>
  );
}

export default function VeteranOffers() {
  return (
    <Section className="container content-section" id="veteran-perks" kicker="03 / VETERANS DAY + MILITARY SAVINGS" title="Veteran freebies around Vegas">
      <p className="section-intro">Best published 2026 options around Las Vegas for veterans and active-duty teammates. Most free meals are <strong>Wednesday, Nov 11 only</strong>; Silverton’s meal runs through Friday. Offers are optional, not scheduled group activities.</p>
      <div className="veteran-highlight">
        <div><span className="eyebrow">BEST FIT FOR THE TRIP</span><p><strong>Wednesday:</strong> South Point offers a buffet for a veteran plus a guest, but it’s an optional detour with the NHL game that night. <strong>Thursday or Friday:</strong> Silverton offers a longer redemption window with advance rewards enrollment.</p></div>
        <span>Nov 11–15, 2026</span>
      </div>
      <div className="veteran-offers-grid">
        {/* VETERAN_OFFER_ORDER is an ARRAY of strings.
            .map() calls this ARROW FUNCTION once for each string.
            That callback returns the OfferCard COMPONENT using JSX.
            {...} is not needed here because we're passing one named prop:
              offer={VETERAN_OFFERS[offerId]}
            The property value is an OBJECT containing the offer details.
            key is necessary for elements produced from .map(). */}
        {VETERAN_OFFER_ORDER.map((offerId) => (
          <OfferCard key={offerId} offer={VETERAN_OFFERS[offerId]} />
        ))}
      </div>
      <div className="veteran-important">
        <strong>Before claiming an offer</strong>
        <p>Bring proof of service (military/retired ID, VA ID, veteran-designated license or DD214 as accepted by each venue). Most restaurant promotions are dine-in only, one per eligible guest, and exclude beverages, tax or gratuity unless stated. Confirm participating locations and current terms. Casino reward offers may require free membership and age 21+. A VA disability rating alone does not automatically qualify someone for every promotion.</p>
        <p>The Palms brunch finishes at 2 PM Wednesday; with the group's flight arriving at 1:09 PM, that one is primarily for teammates already in town. These are offers, not reservations.</p>
      </div>
    </Section>
  );
}
