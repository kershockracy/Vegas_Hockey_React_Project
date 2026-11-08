// ITEC 305: This component has no state because it only displays information.
// Not every component needs useState. Use it when something must CHANGE
// on screen in response to the user (the day tabs and checkboxes do).

export default function Hero() {
  return (
    <section className="hero container" aria-label="Vegas hockey trip introduction">
      <div className="hero-art" aria-hidden="true"><span className="hero-sun"></span><span className="hero-grid"></span></div>
      <div className="hero-inner">
        <p className="hero-eyebrow">VETERANS DAY WEEKEND / LAS VEGAS, NEVADA</p>
        <h2>THE GAME<br /><span>PLAN.</span></h2>
        <p className="hero-lede">Five days. One hockey tournament. One Golden Knights game. Plenty of Vegas in between.</p>
        <div className="hero-chips">
          <span>NOV 11–15, 2026</span><span>LAS VEGAS</span><span>HOCKEY + THE STRIP</span>
        </div>
      </div>
    </section>
  );
}
