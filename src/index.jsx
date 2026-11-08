// =============================================================
// ITEC 305: THE REACT ENTRY POINT (like the class index.jsx)
// =============================================================
// index.html contains only a <div id="root"></div>. That is normal.
// This file takes our App component and places it inside that div.

import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// document.getElementById finds the ordinary HTML element named "root".
// This is part of the ONE entry-point setup demonstrated in class.
// In regular React components, we change the view using state and JSX,
// NOT by repeatedly finding elements and changing their HTML manually.
const entryPoint = document.getElementById('root');

// createRoot makes a React root. render tells React which component
// is at the top of the component tree. App contains the other components.
ReactDOM.createRoot(entryPoint).render(<App />);
