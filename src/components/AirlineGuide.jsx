import Section from './Section.jsx';
import { JETBLUE_RULES, OTHER_AIRLINES, POLICY_SOURCES } from '../data/airlines.js';

// ITEC 305: Child COMPONENTS receive data through props.
// We don't need a separate function for every policy. One reusable
// AirlineRule is called many times with different properties.
function AirlineRule({ title, text }) {
  return <article className="airline-rule"><h4>{title}</h4><p>{text}</p></article>;
}

function OtherAirline({ name, status, url }) {
  // Conditional rendering via TERNARY. When url is empty, show placeholder.
  // This avoids pretending we verified other airline policies.
  return (
    <div className="other-airline">
      <strong>{name}</strong>
      {url ? <a href={url} target="_blank" rel="noopener noreferrer">Official policy ↗</a> : <span>{status}</span>}
    </div>
  );
}

export default function AirlineGuide() {
  return (
    <Section className="container content-section" id="airlines" kicker="06 / HOCKEY GEAR IN THE AIR" title="Airlines & military baggage benefits">
      <p className="section-intro">Officially published JetBlue policies for teammates flying with gear. Benefits vary by eligibility, membership, fare and reason for travel. Check current airline policies before your flight.</p>
      <div className="airline-head"><div><span className="eyebrow">VERIFIED AIRLINE LINKS</span><h3>JetBlue Airways</h3><p>JFK ↔ LAS · November 11–15</p></div><span className="airline-checked">Checked Nov 8, 2026</span></div>
      <div className="airline-grid">
        {/* .map() accepts an ARROW FUNCTION callback. It transforms each
            JavaScript object into a JSX component. key is stable and unique.
            {...rule} SPREADS fields into props such as title= and text=. */}
        {JETBLUE_RULES.map((rule) => <AirlineRule key={rule.id} {...rule} />)}
      </div>
      <div className="airline-sources"><strong>Always check the official pages</strong>
        {POLICY_SOURCES.map((source) => <a key={source.id} href={source.url} target="_blank" rel="noopener noreferrer">{source.title} ↗</a>)}
      </div>
      <div className="airline-alert"><b>Before checking your hockey gear</b><p>Weigh the hockey bag, protect and label sticks, and ask whether the gear bag and two-stick bundle count as separate checked pieces. For smelling salts, confirm the exact product's chemical and airline/TSA restrictions. Do not assume service-connected disability alone waives bag fees.</p></div>
      <div className="other-airlines-head"><h3>Other airlines</h3><p>Space for the rest of the team's airline details and verified policies.</p></div>
      <div className="other-airlines-list">{OTHER_AIRLINES.map((airline) => <OtherAirline key={airline.id} {...airline} />)}</div>
      <p className="airline-footnote">To add an airline, edit <code>src/data/airlines.js</code>, run the build, commit and sync. No back-end/API is required.</p>
    </Section>
  );
}
