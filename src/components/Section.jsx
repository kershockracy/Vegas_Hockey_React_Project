// ===================================================================
// ITEC 305: CHILDREN, DESTRUCTURING and FORWARDED PROPS
// ===================================================================
// JSX between <Section> and </Section> automatically becomes "children".
// We use "title" and "kicker" for the section heading.
// "...props" is REST syntax: it collects other received properties,
// such as id="packing", into one object.
// "{...props}" is SPREAD syntax: it passes those properties down onto
// the real HTML <section> element, exactly as taught in React Deep Dive.
// Notice: the HTML element gets the id and className; a custom component
// does NOT forward them automatically unless we write the code to do it.

export default function Section({ title, kicker, children, ...props }) {
  return (
    <section {...props}>
      <div className="section-heading">
        <span className="eyebrow">{kicker}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
