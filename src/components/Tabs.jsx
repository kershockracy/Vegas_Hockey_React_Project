// ITEC 305: MULTIPLE JSX SLOTS, exactly like React Deep Dive's Tabs.
// "buttons" receives JSX for the tab bar; "children" receives the
// content underneath it. Both are props. This is a reusable wrapper.
// A fragment wraps them without adding a pointless extra <div>.

export default function Tabs({ buttons, children }) {
  return (
    <>
      <div className="tab-strip" aria-label="Choose a day">{buttons}</div>
      {children}
    </>
  );
}
