import { LINKS } from '../data/links.js';
import { PLACES } from '../data/places.js';
import Section from './Section.jsx';

// ===================================================================
// ITEC 305: REUSABLE COMPONENTS + PROPS + OBJECT PROPERTIES
// ===================================================================
// PlaceCard does not need to know anything about the whole PLACES array.
// It receives ONE place object through "props" and renders that place.
// The parent LocationLinks uses .map() to produce several PlaceCards.
// This is the same relationship as CoreConcepts and CoreConcept in class.
// We use normal anchor links, NOT a new JavaScript mapping library.

function PlaceCard({ place }) {
  return (
    <a className="place-card" href={LINKS[place.linkName]} target="_blank" rel="noopener noreferrer">
      <span className="place-kicker">{place.subtitle}</span>
      <strong>{place.name}</strong>
      <p>{place.description}</p>
      <span className="place-open">OPEN GOOGLE MAPS ↗</span>
    </a>
  );
}

// Notice LINKS[place.linkName] above is BRACKET NOTATION.
// We use it because place.linkName holds a variable property name, like
// "mapAmerica". LINKS.place.linkName would look for the wrong property.
// In contrast, LINKS.tournament accesses a known property directly.

export default function LocationLinks() {
  return (
    <Section className="container content-section" id="locations" title="Rinks & Vegas stops" kicker="03 / KNOW WHERE YOU'RE GOING">
      <p className="section-intro">Tap a card to open Google Maps. The first two games are confirmed in Henderson; check the official tournament schedule for later rink assignments.</p>
      <div className="places-grid">
        {PLACES.map((place) => (
          // ITEC 305: always include a stable KEY for items from .map().
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </Section>
  );
}
