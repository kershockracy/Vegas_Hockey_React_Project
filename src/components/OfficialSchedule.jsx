import { LINKS } from '../data/links.js';

// ===================================================================
// ITEC 305: STATIC CONTENT versus DYNAMIC CONTENT
// ===================================================================
// The two known tournament game times below come from the group's plans.
// These exact times are "static" because they are written in this JSX.
// The official schedule page can change; the local copy cannot update
// automatically. We therefore put an obvious link to the authoritative
// ASHA schedule at the very top of this site.
//
// In an actual full-stack app, a backend/API might fetch live data. Such
// fetching was NOT part of the attached class exercises, so this project
// deliberately uses only the methods we practiced: JSX, components, props,
// static data in JavaScript, and ordinary links.

export default function OfficialSchedule() {
  return (
    <section id="official-schedule" className="container official-section">
      <div className="official-panel" id="top">
        <div className="official-topline"><span className="eyebrow">01 / THE MOST IMPORTANT LINK</span><span className="source-pill">OFFICIAL ASHA WEBSITE</span></div>
        <div className="official-main">
          <div>
            <p className="official-kicker">ARMED SERVICES HOCKEY ASSOCIATION</p>
            <h1>Check the <em>official</em><br />game schedule.</h1>
            <p className="official-description">Game times, opponents, rinks and playoff assignments can change. Use the association's schedule as the source of truth—not this sightseeing plan.</p>
            <a className="official-button" href={LINKS.tournament} target="_blank" rel="noopener noreferrer">
              OPEN THE OFFICIAL SCHEDULE <span aria-hidden="true">↗</span>
            </a>
            <p className="official-caption">Opens the 2026 Veterans Day Tournament schedules page on armedserviceshockey.org.</p>
          </div>
          <div className="game-summary" aria-label="Currently known game times">
            <p className="game-summary-title">OUR FIRST TWO KNOWN GAMES</p>
            <div className="game-summary-row"><div><span className="day-token">THU</span><strong>November 12</strong><small>Henderson · Rink 2</small></div><b>5:50 PM</b></div>
            <div className="game-summary-row"><div><span className="day-token">FRI</span><strong>November 13</strong><small>Henderson · Rink 2</small></div><b>8:20 AM</b></div>
            <div className="game-summary-row pending"><div><span className="day-token">TBD</span><strong>November 14–15</strong><small>Check ASHA for additional games</small></div><b>TBD</b></div>
            <p className="game-summary-note">These first two games were supplied by the group. The remaining schedule is not yet confirmed in this guide.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
