// ===================================================================
// ITEC 305: PROPS, CHILDREN, onClick, CONDITIONAL CSS
// ===================================================================
// "onSelect" is a FUNCTION passed to this component as a prop.
// The value for a React onClick should be the FUNCTION, not the result
// of executing the function right away. So we use onClick={onSelect}
// rather than onClick={onSelect()}.
//
// "isSelected" is a BOOLEAN (true/false). The ternary ? : operator
// decides whether to apply the CSS class "active".
// "children" is the text between <TabButton> and </TabButton>.

export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <button
      type="button"
      className={isSelected ? 'tab-button active' : 'tab-button'}
      onClick={onSelect}
      aria-pressed={isSelected}
    >
      {children}
    </button>
  );
}
