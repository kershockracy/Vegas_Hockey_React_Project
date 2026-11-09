// ITEC 305: source DATA is separated from UI components (separation of concerns).
// Coach messages are objects inside an array. No messages are invented here.
// To POST a message to everyone: add an object, npm run build, commit, sync.
// Static GitHub Pages has no shared back end. State in a browser is NOT shared.
// Example: {id:'n1', date:'Nov 12', author:'Coach', title:'Meeting', message:'Text'}
export const COACH_NOTES = [];

// The original PDF has four pages. These are links to pages, not new plays.
export const PLAYBOOK_PAGES = [
 {id:'p1',number:1,title:'Defensive zone & breakout',description:'Coverage assignments and breakout diagrams'},
 {id:'p2',number:2,title:'Neutral-zone transition',description:'Wing support, forechecking, transition'},
 {id:'p3',number:3,title:'Zone entry & dump-and-chase',description:'Entry options and puck support'},
 {id:'p4',number:4,title:'Faceoff positioning',description:'Defensive, offensive, shorthanded and neutral-zone faceoffs'}
];
// Files inside public/ are copied to the compiled Vite website.
// Relative ./ path works within GitHub Pages project URLs (base: './').
export const PLAYBOOK_FILE = './HOCKEY_PLAYBOOK.pdf';
