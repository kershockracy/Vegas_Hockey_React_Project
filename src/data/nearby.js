// ============================================================================
// ITEC 305: array of objects used by a reusable React component and .map().
// "Hours" are published/listed schedules checked November 9, 2026.
// Not a live Google Maps API. Always check the opening hours for the trip day.
// No exact Airbnb address is included in this public GitHub Pages website.
// ============================================================================

export const NEARBY_CATEGORIES = [
  { id: 'all', label: 'All places', search: 'places of interest' },
  { id: 'rec', label: 'Recreational cannabis', search: 'licensed recreational cannabis dispensary' },
  { id: 'medical', label: 'Medical dispensary', search: 'medical marijuana dispensary' },
  { id: 'lounge', label: 'Cannabis lounge', search: 'licensed cannabis consumption lounge' },
  { id: 'liquor', label: 'Liquor & beer', search: 'liquor and beer store' },
  { id: 'dive', label: 'Dive bar', search: 'dive bar' },
  { id: 'cocktail', label: 'Nice cocktail bar', search: 'cocktail lounge' },
  { id: 'country', label: 'Country dancing', search: 'country western line dancing bar dance club' },
  { id: 'billiards', label: 'Pool & billiards', search: 'pool billiards hall pool tables bar' },
  { id: 'grocery', label: 'Groceries', search: 'grocery supermarket' },
  { id: 'walmart', label: 'Walmart / big box', search: 'Walmart supercenter department store' },
  { id: 'adult', label: 'Adult club', search: 'gentlemens club strip club' },
  { id: 'hockey', label: 'Skate sharpening', search: 'hockey pro shop skate sharpening' },
  { id: 'massage', label: 'Massage', search: 'massage spa' },
  { id: 'haircut', label: 'Haircuts', search: 'barber shop hair salon' },
  { id: 'sportsbook', label: 'Sportsbook', search: 'casino sports betting sportsbook' },
  { id: 'laundry', label: 'Laundry', search: 'laundromat wash and fold' },
  { id: 'food', label: 'Late-night food', search: '24 hour food restaurant' },
  { id: 'pharmacy', label: 'Pharmacy', search: 'pharmacy open now' },
  { id: 'gas', label: 'Gas & convenience', search: 'gas station convenience store' },
  { id: 'coffee', label: 'Coffee & breakfast', search: 'coffee breakfast cafe' },
  { id: 'urgent', label: 'Urgent care', search: 'urgent care clinic' },
];

// A curated starting list for Spring Valley/Chinatown, NOT distance-ranked.
// Match the place with Google Maps to verify its hours before making plans.
export const NEARBY_PLACES = [
  {
    id: 'rise-tropicana', name: 'RISE Dispensary — W Tropicana',
    categories: ['rec', 'medical'], label: 'State-licensed adult-use / medical',
    address: '5765 W Tropicana Ave, Las Vegas, NV 89103',
    hours: 'Sun–Thu 8 AM–11 PM; Fri–Sat 8 AM–1 AM',
    note: '21+ for recreational purchases; bring valid photo ID.',
    sourceUrl: 'https://ccb.nv.gov/list-of-licensees/'
  },
  {
    id: 'mint-rainbow', name: 'Mint Cannabis — Spring Valley',
    categories: ['rec', 'medical'], label: 'State-licensed adult-use / medical',
    address: '6332 S Rainbow Blvd #105, Las Vegas, NV 89118',
    hours: 'Daily 8 AM–10 PM',
    note: 'Licensed adult-use shop; ask about medical-card requirements.',
    sourceUrl: 'https://ccb.nv.gov/list-of-licensees/'
  },
  {
    id: 'planet-13', name: 'Planet 13 Las Vegas',
    categories: ['rec', 'medical'], label: '24-hour adult-use dispensary',
    address: '2548 W Desert Inn Rd, Las Vegas, NV 89109',
    hours: 'Open 24 hours daily',
    note: 'Large shop in the same complex as the DAZED! licensed lounge.',
    sourceUrl: 'https://planet13.com/experience'
  },
  {
    id: 'dazed', name: 'DAZED! Consumption Lounge',
    categories: ['lounge'], label: 'Licensed legal on-site consumption',
    address: '2548 W Desert Inn Rd #130, Las Vegas, NV 89109',
    hours: 'Mon–Wed noon–midnight; Thu 11 AM–midnight; Fri–Sun 10 AM–2 AM',
    note: '21+; purchase consumption products inside the lounge. Last seating about 1 hour before close. No outside cannabis or alcohol.',
    sourceUrl: 'https://www.dazedlounge.com/'
  },
  {
    id: 'society', name: 'Society! Consumption Lounge',
    categories: ['lounge'], label: 'Licensed legal on-site consumption',
    address: '4640 Paradise Rd, Las Vegas, NV 89169',
    hours: 'Listed daily 3 PM–11 PM',
    note: '21+ cannabis lounge beside The Grove. Check admission and current hours.',
    sourceUrl: 'https://ccb.nv.gov/list-of-licensees/'
  },
  {
    id: 'lees', name: "Lee's Discount Liquor — Rainbow",
    categories: ['liquor'], label: 'Beer, liquor and wine',
    address: '4230 S Rainbow Blvd, Las Vegas, NV 89103',
    hours: 'Mon–Thu 9 AM–10 PM; Fri–Sat 9 AM–11 PM; Sun 9 AM–9 PM',
    note: 'Useful one-stop beer, spirits and wine purchase for the house.'
  },
  {
    id: 'topshelf', name: 'Top Shelf Wine & Liquor',
    categories: ['liquor'], label: 'Late-night beer and liquor',
    address: '6795 W Tropicana Ave, Las Vegas, NV 89103',
    hours: 'Listed open 24 hours daily',
    note: 'Backup bottle shop when other stores have closed.'
  },
  {
    id: 'pts', name: "PT's Pub — Flamingo & Decatur",
    categories: ['dive'], label: 'Casual neighborhood bar',
    address: '4825 W Flamingo Rd #3, Las Vegas, NV 89103',
    hours: 'Open 24 hours daily',
    note: 'Low-key tavern with food, drinks and sports viewing.'
  },
  {
    id: 'four-kegs', name: 'Four Kegs Sports Pub',
    categories: ['dive'], label: 'Old-school local bar',
    address: '276 N Jones Blvd #B, Las Vegas, NV 89107',
    hours: 'Open 24 hours daily',
    note: 'No-frills sports tavern known for comfort food.'
  },
  {
    id: 'golden-tiki', name: 'The Golden Tiki',
    categories: ['cocktail'], label: 'Memorable Chinatown cocktail bar',
    address: '3939 Spring Mountain Rd, Las Vegas, NV 89102',
    hours: 'Open 24 hours daily',
    note: '21+ immersive tiki bar with a lively late-night atmosphere.'
  },
  {
    id: 'alchemist', name: 'Alchemist Bar & Restaurant',
    categories: ['cocktail'], label: 'Upscale craft cocktails',
    address: '4300 W Spring Mountain Rd #101, Las Vegas, NV 89102',
    hours: 'Wed–Sun 5 PM–1 AM; Mon–Tue closed',
    note: 'Compact Chinatown cocktail lounge; check reservations and hours.'
  },
  {
    id: 'stoneys-country', name: "Stoney's Rockin' Country",
    categories: ['country'], label: 'Line dancing and live country music',
    address: '6611 Las Vegas Blvd S #160, Las Vegas, NV 89119',
    hours: 'Thu–Sat 7 PM–2 AM; Sun–Wed closed',
    note: 'Town Square country dance club with free line-dance lessons at 7:30 and 8:30 PM, plus mechanical bull. Nov 14: military/first responders listed free with ID; verify the event calendar and admission.',
    sourceUrl: 'https://www.stoneysrockincountry.com/'
  },
  {
    id: 'gilleys', name: "Gilley's Saloon at Treasure Island",
    categories: ['country'], label: 'Country bar on the Strip',
    address: '3300 S Las Vegas Blvd, Las Vegas, NV 89109',
    hours: 'Sun–Thu noon–1 AM; Fri–Sat noon–2 AM',
    note: 'Honky-tonk saloon with live music, a mechanical bull and line-dancing lessons Mon–Thu at 7 PM. Some nights have a cover charge.',
    sourceUrl: 'https://treasureisland.com/entertainment/bars-lounges/gilleys-saloon'
  },
  {
    id: 'griffs', name: "Griff's Bar & Billiards",
    categories: ['billiards', 'dive'], label: 'Pool hall with full bar and restaurant',
    address: '3650 S Decatur Blvd #12, Las Vegas, NV 89103',
    hours: 'Daily 9 AM–4 AM',
    note: 'Non-smoking room with many 7- and 9-foot tables, sports TVs and a full bar. Posted table rates vary by time and day.',
    sourceUrl: 'https://www.griffslv.com/'
  },
  {
    id: 'club-billiard-story', name: 'Club Billiard Story',
    categories: ['billiards'], label: 'Chinatown-area billiards room',
    address: '6850 Spring Mountain Rd #200, Las Vegas, NV 89146',
    hours: 'Listed daily 2 PM–2 AM; confirm before visiting',
    note: 'Smaller, play-focused pool and three-cushion billiards spot. Confirm available table types and hours before going.',
    sourceUrl: 'https://www.3cushionbilliards.com/where-to-play/detail/168/1/club-billiard-story'
  },
  {
    id: '168-market', name: '168 Market',
    categories: ['grocery'], label: 'Chinatown-area supermarket',
    address: '3459 S Jones Blvd, Las Vegas, NV 89146',
    hours: 'Daily 8 AM–10 PM',
    note: 'Asian grocery, produce, snacks and prepared food.'
  },
  {
    id: 'ranch99', name: '99 Ranch Market',
    categories: ['grocery'], label: 'Supermarket and fresh food',
    address: '4155 W Spring Mountain Rd, Las Vegas, NV 89102',
    hours: 'Daily 8 AM–10 PM',
    note: 'Useful for groceries and group-house food shopping.'
  },
  {
    id: 'walmart-rainbow', name: 'Walmart Supercenter — Rainbow',
    categories: ['walmart', 'grocery'], label: 'Groceries and general merchandise',
    address: '3615 S Rainbow Blvd, Las Vegas, NV 89103',
    hours: 'Daily 6 AM–11 PM',
    note: 'House supplies, forgotten toiletries, clothes, food and essentials.',
    sourceUrl: 'https://www.walmart.com/store-directory/nv/las%20vegas'
  },
  {
    id: 'rhino', name: "Spearmint Rhino — Las Vegas",
    categories: ['adult'], label: 'Adult gentlemen’s club',
    address: '3340 S Highland Dr, Las Vegas, NV 89109',
    hours: 'Listed open 24 hours daily',
    note: '21+; check admission, dress code and prices before arriving.'
  },
  {
    id: 'sapphire', name: 'Sapphire Gentlemen’s Club',
    categories: ['adult'], label: 'Large adult nightlife club',
    address: '3025 S Sammy Davis Jr Dr, Las Vegas, NV 89109',
    hours: 'Listed Mon–Thu 5–6 PM opening; Fri–Sun ~6 PM; late-night closing (verify)',
    note: '21+; confirm specific day hours, cover, transportation and costs.'
  },
  {
    id: 'hockey-shop', name: 'Las Vegas Source For Hockey',
    categories: ['hockey'], label: 'Skate sharpening / gear repair',
    address: '9295 W Flamingo Rd #130, Las Vegas, NV 89147',
    hours: 'Mon–Thu noon–9:30 PM; Fri noon–8 PM; Sat 8 AM–7 PM; Sun 8 AM–9 PM',
    note: 'Inside Las Vegas Ice Center; call first for sharpening turnaround and hockey staff availability.',
    sourceUrl: 'https://www.sourceforhockey.com/pages/las-vegas-source-for-hockey'
  },
  {
    id: 'joy-spa', name: 'Joy Spa',
    categories: ['massage'], label: 'Massage / couples massage',
    address: '4124 S Rainbow Blvd, Las Vegas, NV 89103',
    hours: 'Daily 9 AM–9 PM',
    note: 'Convenient recovery option between hockey games.'
  },
  {
    id: 'zen-massage', name: 'Zen Massage — Spring Valley',
    categories: ['massage'], label: 'Massage and skincare',
    address: '9730 W Tropicana Ave #115, Las Vegas, NV 89147',
    hours: 'Mon–Sat 10 AM–9 PM; Sun 10 AM–6 PM',
    note: 'Book a session ahead if the team wants recovery work.'
  },
  {
    id: 'dexterous', name: 'DEXTEROUS Barber Studio',
    categories: ['haircut'], label: 'Haircuts and beard trims',
    address: '5755 S Rainbow Blvd, Las Vegas, NV 89118',
    hours: 'Mon–Sat 9 AM–6 PM; Sun closed',
    note: 'Book ahead for a haircut before group photos or nightlife.'
  },
  {
    id: 'gnarly', name: 'Gnarly Barbershop',
    categories: ['haircut'], label: 'Barber shop',
    address: '9730 W Tropicana Ave #135, Las Vegas, NV 89147',
    hours: 'Daily 9 AM–6 PM',
    note: 'Haircuts and beard care; confirm walk-in availability.'
  },
  {
    id: 'palace-sports', name: 'Palace Station Race & Sportsbook',
    categories: ['sportsbook'], label: 'Casino sportsbook and sports viewing',
    address: '2411 W Sahara Ave, Las Vegas, NV 89102',
    hours: 'Mon–Thu 8 AM–11 PM; Fri 8 AM–midnight; Sat 6 AM–midnight; Sun 6 AM–11 PM',
    note: 'Official sportsbook hours (not casino-wide hours); 21+ with valid ID.',
    sourceUrl: 'https://palacestation.com/play/race-and-sports/'
  },
  {
    id: 'clean-freaks', name: 'Clean Freaks Laundry Services',
    categories: ['laundry'], label: 'Laundromat / wash-and-fold',
    address: '4011 S Buffalo Dr #B108, Las Vegas, NV 89147',
    hours: 'Mon–Fri 7 AM–10 PM; Sat 7 AM–7 PM; Sun 7 AM–10 PM',
    note: 'Useful for jerseys and base layers after tournament games.'
  },
  {
    id: 'robertos', name: "Roberto's Taco Shop — Flamingo",
    categories: ['food'], label: 'Food after late games',
    address: '6820 W Flamingo Rd #D, Las Vegas, NV 89103',
    hours: 'Open 24 hours daily',
    note: 'Low-key late-night burritos and other quick meals.'
  }
];
