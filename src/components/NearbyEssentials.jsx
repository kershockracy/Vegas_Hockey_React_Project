import { useState } from 'react';
import Section from './Section.jsx';
import { NEARBY_CATEGORIES, NEARBY_PLACES } from '../data/nearby.js';

// ITEC 305: Standard JavaScript functions create URL strings for regular <a>
// links; no mapping SDK, backend, Google API key or live-hours API is required.
// The typed origin is local React state, not stored in the public repository.
function directionsLink(address, origin) {
  return 'https://www.google.com/maps/dir/?api=1&origin=' +
    encodeURIComponent(origin) + '&destination=' +
    encodeURIComponent(address) + '&travelmode=driving';
}

function nearbySearchLink(category, origin) {
  return 'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(category.search + ' near ' + origin);
}

// ITEC 305: PlaceCard receives PROPS from NearbyEssentials; the parent
// uses .map() with a unique key to reuse the same component for all places.
function NearbyPlaceCard({ place, origin }) {
  return (
    <article className="nearby-place-card">
      <span className="nearby-place-label">{place.label}</span>
      <h3>{place.name}</h3>
      <p className="nearby-address">{place.address}</p>
      <div className="nearby-hour"><span>HOURS</span><strong>{place.hours}</strong></div>
      <p className="nearby-note">{place.note}</p>
      <div className="nearby-card-actions">
        <a href={directionsLink(place.address, origin)} target="_blank" rel="noopener noreferrer">Directions ↗</a>
        <a href={nearbySearchLink({ search: place.name + ' ' + place.address }, origin)} target="_blank" rel="noopener noreferrer">Live hours ↗</a>
        {place.sourceUrl ? <a href={place.sourceUrl} target="_blank" rel="noopener noreferrer">Source ↗</a> : null}
      </div>
    </article>
  );
}

export default function NearbyEssentials() {
  const [categoryId, setCategoryId] = useState('all');
  const [airbnbOrigin, setAirbnbOrigin] = useState('');
  // Without the private street address we use an approximate *area*, never
  // claim these locations are the closest or sort by invented distances.
  const origin = airbnbOrigin.trim() || 'Spring Valley, Las Vegas, NV';
  const category = NEARBY_CATEGORIES.find((item) => item.id === categoryId);
  const visiblePlaces = categoryId === 'all'
    ? NEARBY_PLACES
    : NEARBY_PLACES.filter((place) => place.categories.includes(categoryId));

  return (
    <Section className="container content-section" id="nearby" title="Near the Airbnb" kicker="04 / STORES, NIGHTLIFE & HOCKEY ESSENTIALS">
      <p className="section-intro">Find groceries, beer, bars, country dancing, billiards, dispensaries, licensed cannabis lounges, adult clubs, skate sharpening, recovery services, and a sportsbook around Spring Valley / Chinatown. These are useful area options, <strong>not a distance-ranked list</strong>: the Airbnb's precise address is not public.</p>

      <div className="nearby-finder">
        <div className="nearby-finder-main">
          <label htmlFor="airbnb-start">Your starting address for directions (optional)</label>
          <input
            id="airbnb-start"
            type="text"
            value={airbnbOrigin}
            onChange={(event) => setAirbnbOrigin(event.target.value)}
            placeholder="Paste the Airbnb's exact address here"
          />
          <p>Without an address, Maps starts from the general Spring Valley area. Your address is not saved to this site; if you open Maps it is sent to Google for the search or route.</p>
        </div>
        <div className="nearby-finder-action">
          <span>GOOGLE MAPS SEARCH</span>
          <a href={nearbySearchLink(category, origin)} target="_blank" rel="noopener noreferrer">Find nearby {categoryId === 'all' ? 'places' : category.label.toLowerCase()} ↗</a>
          <small>Maps shows current listings, directions and hours.</small>
        </div>
      </div>

      <div className="nearby-filters" aria-label="Filter nearby places">
        {NEARBY_CATEGORIES.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === categoryId ? 'nearby-filter is-selected' : 'nearby-filter'}
            onClick={() => setCategoryId(item.id)}
            aria-pressed={item.id === categoryId}
          >{item.label}</button>
        ))}
      </div>

      <div className="nearby-list-summary">
        <strong>{category.label}</strong>
        <span>{visiblePlaces.length} suggested {visiblePlaces.length === 1 ? 'place' : 'places'} · hours are reference schedules, not live</span>
      </div>
      {visiblePlaces.length > 0 ? (
        <div className="nearby-places-grid">
          {visiblePlaces.map((place) => <NearbyPlaceCard key={place.id} place={place} origin={origin} />)}
        </div>
      ) : (
        <div className="nearby-empty">
          <p>No preselected business for this category yet. Use <strong>Find nearby</strong> above to see businesses and up-to-date hours near your starting address.</p>
        </div>
      )}

      <div className="nearby-guidance">
        <strong>Before you go</strong>
        <p><strong>Hours:</strong> Typical hours checked November 9, 2026; Veterans Day and event-week schedules may differ. Open each live listing or call ahead, especially for skate sharpening, massages and barbers.</p>
        <p><strong>Recreational cannabis:</strong> Nevada permits adult-use sales at state-licensed stores for ages 21+ with ID. Public consumption (including the Strip) and consuming in a vehicle are prohibited. A private Airbnb may ban consumption. Licensed cannabis consumption lounges allow legal on-site use under their own rules; never drive impaired.</p>
        <p><strong>Adults-only:</strong> Dispensaries, consumption lounges, bars, sportsbooks and adult entertainment venues may require age verification. Check venue policies and admission costs.</p>
        <a href="https://ccb.nv.gov/laws-regulations/" target="_blank" rel="noopener noreferrer">Nevada Cannabis Compliance Board: legal rules ↗</a>
        <a href="https://ccb.nv.gov/list-of-licensees/" target="_blank" rel="noopener noreferrer">Official list of state-licensed cannabis businesses ↗</a>
      </div>
    </Section>
  );
}
