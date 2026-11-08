// ===================================================================
// ITEC 305: .map(), KEYS and reading an OBJECT through PROPS
// ===================================================================
// This one component is reused for every travel day.
// The parent supplies a different "day" object each time: <DayCard day={...}/>.
// That is the whole point of props: same reusable display, different data.
//
// day.events is an ARRAY of event OBJECTS. .map() calls a callback for
// each object and creates a new array of <li> JSX elements for React.
// Each repeated element gets a UNIQUE key. React uses keys to keep track
// of list elements correctly when the interface is updated.

export default function DayCard({ day }) {
  return (
    <article className="day-card">
      <div className="day-card-top">
        <div><span className="eyebrow">{day.kicker}</span><h3>{day.head}</h3><p>{day.theme}</p></div>
        <span className="day-status">{day.status}</span>
      </div>
      <ol className="timeline">
        {day.events.map((event) => (
          <li className="timeline-row" key={event.id}>
            <div className="timeline-time">{event.time}</div>
            <div className="timeline-main">
              <strong>{event.title}</strong>
              <p>{event.description}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="day-footnote">{day.foot}</p>
    </article>
  );
}
