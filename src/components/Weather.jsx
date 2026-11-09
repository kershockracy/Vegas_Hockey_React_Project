import Section from './Section.jsx';
import { LINKS } from '../data/links.js';
import { WEATHER_DAYS, FORECAST_DATE } from '../data/weather.js';

// ITEC 305: WeatherDay is a reusable COMPONENT; its name begins uppercase.
// The object parameter is destructured: it receives one props object and extracts values.
// Props are INPUTS. They don't change themselves, so this component needs no useState().
function WeatherDay({ day, date, high, low, rain, condition, icon }) {
  return (
    <div className="weather-day">
      <strong>{day} <span>{date}</span></strong>
      <span className="weather-icon" aria-hidden="true">{icon}</span>
      <span className="weather-condition">{condition}</span>
      <span className="weather-temps"><b>{high}°</b> <small>{low}°</small></span>
      <span className="weather-rain">Rain {rain}</span>
    </div>
  );
}

export default function Weather() {
  return (
    <Section className="container content-section" id="weather" title="Las Vegas weather" kicker="01 / FORECAST">
      <div className="weather-shell">
        <div className="weather-top">
          <div><span className="eyebrow">NOV 11–15 · LAS VEGAS, NV</span><p>Just temperatures, sky conditions, and rain chance.</p></div>
          {/* External <a> opens the latest forecast. No React state or API needed. */}
          <a className="weather-current-link" href={LINKS.weather} target="_blank" rel="noopener noreferrer">Updated forecast ↗</a>
        </div>
        <div className="weather-strip">
          {/* .map() transforms each data OBJECT into one WeatherDay JSX element.
              The callback (forecast) => (...) runs once for each array item.
              {...forecast} SPREADS the object into named props; key identifies
              repeated elements, helping React compare the rendered list. */}
          {WEATHER_DAYS.map((forecast) => <WeatherDay key={forecast.day} {...forecast} />)}
        </div>
        <p className="weather-disclaimer">Forecast snapshot: {FORECAST_DATE}, not automatically refreshed. Click “Updated forecast” to see current conditions before traveling.</p>
      </div>
    </Section>
  );
}
