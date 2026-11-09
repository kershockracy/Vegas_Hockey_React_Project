import Section from './Section.jsx';
import { COACH_NOTES, PLAYBOOK_PAGES, PLAYBOOK_FILE } from '../data/coach.js';

// ITEC 305: rendering a collection using .map() and REUSABLE components.
// Destructuring gives us the named props; the parent passes an object by spread.
function CoachMessage({ date, author, title, message }) {
  return <article className="coach-message"><span className="eyebrow">{date} · {author}</span><h3>{title}</h3><p>{message}</p></article>;
}

function PlaybookChapter({ number, title, description }) {
  // This is a template literal: backticks and ${...} substitute a value.
  // '#page=' is a hint to the PDF viewer about which page to open.
  const pageUrl = `${PLAYBOOK_FILE}#page=${number}`;
  return (
    <a className="playbook-page" href={pageUrl} target="_blank" rel="noopener noreferrer">
      <span className="playbook-page-num">{number}</span>
      <span className="playbook-page-copy"><strong>{title}</strong><small>{description}</small></span>
      <span className="playbook-arrow" aria-hidden="true">↗</span>
    </a>
  );
}

export default function CoachCorner() {
  return (
    <Section className="container content-section" id="coach" kicker="03 / TEAM RESOURCES" title="Coach's corner & playbook">
      <p className="section-intro">Find coach announcements and the original four-page illustrated team playbook here. Game times always come from the official tournament schedule above.</p>
      <div className="coach-layout">
        <div className="coach-board">
          <div className="coach-panel-top"><span className="eyebrow">COACH'S ANNOUNCEMENTS</span><span className="coach-count">{COACH_NOTES.length} posted</span></div>
          {/* TERNARY = condition ? what-if-true : what-if-false.
              When no notes exist, explain that instead of pretending coach posted.
              When notes exist, .map() displays them as repeated components. */}
          {COACH_NOTES.length === 0 ? (
            <div className="coach-empty"><span className="coach-whistle" aria-hidden="true">✦</span><h3>Coach's notes will appear here.</h3><p>No official coach message has been posted yet.</p><small>Site editor: add notes to <code>src/data/coach.js</code>, build, commit and sync.</small></div>
          ) : (
            <div className="coach-note-list">{COACH_NOTES.map((note) => <CoachMessage key={note.id} {...note} />)}</div>
          )}
        </div>
        <div className="playbook-board">
          <div className="coach-panel-top"><span className="eyebrow">TEAM RESOURCE</span><span className="coach-count">4-page PDF</span></div>
          <h3>Hockey playbook</h3>
          <p className="playbook-lede">Open the original scanned diagrams. These are page shortcuts, not substitutes for reading the handwritten notes.</p>
          <a className="playbook-main-link" href={PLAYBOOK_FILE} target="_blank" rel="noopener noreferrer">View full playbook PDF ↗</a>
          <a className="playbook-download" href={PLAYBOOK_FILE} download="HOCKEY_PLAYBOOK.pdf">Download a copy ↓</a>
          <div className="playbook-chapters">
            {PLAYBOOK_PAGES.map((page) => <PlaybookChapter key={page.id} {...page} />)}
          </div>
        </div>
      </div>
      <p className="coach-privacy">Public-site note: the playbook will be visible to anyone who visits the publicly shared site. Get the coach's approval before posting private tactics.</p>
    </Section>
  );
}
