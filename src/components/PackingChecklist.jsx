import { PACKING_GROUPS } from '../data/packing.js';
import Section from './Section.jsx';
import PackingItem from './PackingItem.jsx';

// ===================================================================
// ITEC 305: TWO LEVELS OF .map() and COMPONENT REUSE
// ===================================================================
// The PACKING_GROUPS array contains 6 section objects.
// We use the OUTER .map() to create each section.
// Each section has its own "items" array of packing strings.
// We use the INNER .map() to create one PackingItem component per item.
//
// We could type 78 checkboxes by hand, but that would repeat lots of code.
// This is exactly why we learned components, arrays, props and .map().
//
// This is NOT an exam or quiz. It is the real trip checklist that the
// players can use. The learning happens in the comments inside the code.

export default function PackingChecklist() {
  return (
    <Section className="container content-section packing-section" id="packing" title="Pack like a hockey player" kicker="05 / THE GROUP PACKING LIST">
      <p className="section-intro">Hockey equipment, rink-side extras, pool gear, Vegas clothes, a dressier option and everyday toiletries. Tap a box as you pack.</p>
      <div className="packing-banner">
        <div><span className="eyebrow">78 ITEMS / 6 CATEGORIES</span><strong>SKATES. SWIM TRUNKS. STICK WAX.</strong><p>Checkmarks are temporary and reset when the page is refreshed. No account or sign-in is needed.</p></div>
        <span className="packing-symbol" aria-hidden="true">✓</span>
      </div>
      <div className="packing-grid">
        {PACKING_GROUPS.map((group) => (
          <article className="packing-card" key={group.id}>
            <h3>{group.title}</h3>
            <ul className="packing-list">
              {group.items.map((item) => (
                // The item text is unique within its own section.
                // key helps React correctly track the list elements.
                <PackingItem key={item} text={item} />
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="packing-last-note">Special gear note: check the actual product and airline policy before flying with smelling salts, sharp tools, skate accessories, or anything potentially restricted.</p>
    </Section>
  );
}
