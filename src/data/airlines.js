// ITEC 305: An array of OBJECTS keeps policy information separate from JSX.
// The policy was researched Nov 8, 2026 from official JetBlue pages.
// Disability rating alone is NOT a separately listed JetBlue free-bag benefit.
// JetBlue rules can change. Links below are always the final authority.
export const JETBLUE_RULES = [
 {id:'sticks',title:'Two hockey sticks',text:'JetBlue’s 2026 Contract of Carriage lists two hockey sticks taped together as a checked sporting-equipment item counting as one bag. It does not promise that a separate gear bag is included with the sticks. Confirm bag counting and packing with JetBlue.'},
 {id:'standard',title:'Standard checked bags',text:'Standard checked-bag limits are normally 50 lb and 62 total linear inches (L+W+H). Special sporting-equipment conditions apply, and excess, oversize or overweight fees may be charged.'},
 {id:'leisure',title:'Active-duty — personal travel',text:'5% discount on JetBlue-operated base fares and two complimentary bags up to 50 lb each for eligible active-duty travelers. DOD Common Access Card required; qualifying dependents on the same reservation may be covered.'},
 {id:'orders',title:'Active-duty — duty travel',text:'5% discount and up to five complimentary bags up to 99 lb each for eligible travelers on duty. Requires military orders and DOD CAC. Eligible dependent conditions apply.'},
 {id:'vet',title:'Retired military / veterans',text:'JetBlue lists a 5% base-fare discount and two complimentary checked bags up to 50 lb each for qualified paid WeSalute+ (formerly Veterans Advantage) subscribers. Subscribers must book by calling JetBlue with their member ID; this offer cannot be applied at the airport.'},
 {id:'disabled',title:'Service-connected / disabled veterans',text:'No separate automatic bag-fee waiver is published based solely on a VA disability rating or veteran ID. Disability-related assistive devices are different from hockey sporting equipment and have separate rules.'}
];

// Leave room for the other teammates' airlines without inventing policies.
// Add another object after verifying a carrier's sports equipment rules.
// Example: {id:'new', name:'Airline name', status:'Verified policy', url:'https://...'}
export const OTHER_AIRLINES = [
 {id:'pending',name:'Other teammate airline',status:'Waiting for airline and route details',url:''}
];

export const POLICY_SOURCES = [
 {id:'military',title:'JetBlue: Military & veteran customers',url:'https://www.jetblue.com/flying-with-us/military-customers'},
 {id:'checked',title:'JetBlue: Checked bags',url:'https://www.jetblue.com/help/checked-bags'},
 {id:'contract',title:'JetBlue: Contract of Carriage (Section 13B)',url:'https://cms.jetblue.com/public/dam/ui-assets/p/legal/Contract-of-Carriage--2026.04.17-.pdf'}
];
