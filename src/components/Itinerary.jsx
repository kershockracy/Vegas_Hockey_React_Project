import { useState } from 'react';
import { DAYS } from '../data/days.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import TabButton from './TabButton.jsx';
import DayCard from './DayCard.jsx';

// ===================================================================
// ITEC 305: STATE, EVENT HANDLERS, ARROW FUNCTIONS and .map()
// ===================================================================
// This part is intentionally similar to our class "Examples" section.
// A regular "let selectedDay = 0" would NOT make the screen update when
// someone clicks a tab. React does not re-execute a component just because
// an ordinary variable was reassigned.
//
// useState gives us TWO elements in an ARRAY:
// 1. selectedDay = the current state VALUE.
// 2. setSelectedDay = React's setter FUNCTION.
// Array destructuring pulls these two values out using [ ... ].
//
// Calling the setter tells React to re-execute this component. React then
// compares the new JSX with the previous JSX and updates the browser view.
// We keep the state HERE because the itinerary tabs need it, not in App.

export default function Itinerary() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // This FUNCTION takes a PARAMETER called dayIndex.
  // We use it to tell React which travel day was selected.
  function handleSelect(dayIndex) {
    setSelectedDay(dayIndex);
    setShowAll(false);
  }

  function handleShowAll() {
    setShowAll(!showAll);
  }

  return (
    <Section className="container content-section" id="itinerary" title="Day-by-day itinerary" kicker="02 / PLANNED AROUND THE ICE">
      <p className="section-intro">Your hockey games take priority. Sightseeing and nightlife are suggestions and can move when the brackets are announced.</p>
      <div className="itinerary-layout">
        <Tabs
          // ITEC 305: This is a NAMED JSX SLOT passed as the "buttons" prop.
          // .map() changes an array of DAY data into an array of TabButtons.
          // The "index" argument tells us where the day is in the array.
          buttons={DAYS.map((day, index) => (
            <TabButton
              key={day.day}
              isSelected={selectedDay === index && !showAll}
              // IMPORTANT: The arrow function is NOT run right now.
              // React runs it WHEN the button is clicked. That is when
              // handleSelect receives index as its function parameter.
              onSelect={() => handleSelect(index)}
            >
              {day.day} <span>{day.date}</span>
            </TabButton>
          ))}
        >
          <div className="itinerary-tools">
            <span>All times Pacific · Activities subject to hockey schedule</span>
            <button className="text-button" type="button" onClick={handleShowAll}>
              {showAll ? 'Show selected day' : 'Show all five days'}
            </button>
          </div>
          {/* ITEC 305: CONDITIONAL RENDERING with a ternary.
              If showAll is true, .map() displays every DayCard.
              Otherwise it shows ONE DayCard at DAYS[selectedDay]. */}
          {showAll ? (
            DAYS.map((day) => <DayCard key={day.day} day={day} />)
          ) : (
            <DayCard day={DAYS[selectedDay]} />
          )}
        </Tabs>
      </div>
    </Section>
  );
}
