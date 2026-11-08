import { useState } from 'react';

// ===================================================================
// ITEC 305: SIMPLE LOCAL STATE IN A REUSABLE COMPONENT
// ===================================================================
// The parent gives this component a "text" prop (one packing-list item).
// The item owns ONE BOOLEAN state value: packed, starting at false.
// onChange is an EVENT PROP on the real HTML checkbox.
// When checked, we call setPacked(!packed), then React re-renders this item.
//
// Why put the state here? Each item should manage its own checkmark.
// That is "state ownership" from the React Deep Dive lecture. We don't
// need to store every checkbox in App.jsx just to make it work.
//
// IMPORTANT LIMITATION: Class notes have not introduced localStorage or
// useEffect. To remain within our taught code, this checklist does NOT
// save checkmarks after a refresh. That limitation is intentional.

export default function PackingItem({ text }) {
  const [packed, setPacked] = useState(false);

  function handleToggle() {
    setPacked(!packed);
  }

  return (
    <li className={packed ? 'packing-item packed' : 'packing-item'}>
      <label>
        <input type="checkbox" checked={packed} onChange={handleToggle} />
        <span>{text}</span>
      </label>
    </li>
  );
}
