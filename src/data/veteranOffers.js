// ============================================================================
// ITEC 305 -- ARRAYS, OBJECTS, CONST, NAMED EXPORTS AND BRACKET NOTATION
// ============================================================================
// This file stores Veteran's Day promotions in plain JavaScript DATA.
// React uses the data to display the SAME information in two different places:
// (1) a short footnote at the bottom of each itinerary day, and
// (2) a complete Veteran Freebies section with terms and links.
//
// OBJECT: VETERAN_OFFERS uses { } to store named properties.
// Its property names are short IDs such as 'southpoint' or 'silverton'.
// Access examples:
//    VETERAN_OFFERS.southpoint.name          <-- dot notation
//    VETERAN_OFFERS['southpoint'].name       <-- bracket notation
//    const id = 'southpoint';
//    VETERAN_OFFERS[id].name                 <-- bracket notation with VARIABLE
// The last version is how a day can ask for a specific deal by its ID.
//
// ARRAY: VETERAN_OFFER_ORDER is a list of IDs. .map() can loop over it.
// Remember that const means we cannot REASSIGN the variable to a new object;
// it doesn't automatically freeze the properties inside the object.
//
// SOURCE NOTE: Sources linked below are 2026 published offers, checked Nov 8.
// These are not live reservations or automatic guarantees. Local participation,
// eligibility, IDs, times and exclusions still matter. Only the WED deals
// are Veterans Day one-day freebies unless other dates are explicitly shown.
// The site never claims VA disability percentage alone creates a free meal.

export const VETERAN_OFFERS = {
  "southpoint": {
    "id": "southpoint",
    "name": "South Point Garden Buffet",
    "badge": "FREE FOR VET + 1 GUEST",
    "when": "Wed Nov 11 · 7 AM–9 PM",
    "short": "Free buffet for a veteran or active-duty member and one guest.",
    "details": "One free buffet for the qualifying service member plus one guest. Show military ID or DD214. South end of the Strip; a sizeable detour before the NHL game, so allow travel and buffet lines.",
    "place": "9777 S Las Vegas Blvd, Las Vegas, NV 89183",
    "map": "https://www.google.com/maps/search/?api=1&query=South+Point+Garden+Buffet+Las+Vegas",
    "source": "https://southpointcasino.com/whats-new",
    "secondary": "https://www.vegas24seven.com/south-point-hotel-casino-spa-honors-veterans-with-free-buffet-and-starbucks-coffee-on-veterans-day-nov-11/amp/",
    "kind": "free",
    "days": "Wed only",
    "hint": "Best overall value for a veteran bringing a guest. Your flight arrival makes this an optional detour, not a scheduled stop."
  },
  "silverton": {
    "id": "silverton",
    "name": "Silverton Casino restaurants",
    "badge": "FREE MEAL · NOV 9–13",
    "when": "Wed–Fri · Nov 9–13",
    "short": "Complimentary meal at a participating casino restaurant for enrolled veterans.",
    "details": "Enroll in Silverton’s Military & Veteran Salute / Discovery Rewards Club, then print a coupon at a casino kiosk (7 AM–10 PM). Redeem at Mi Casa, Su Casa, Sundance Grill or WuHu Noodle. Must be 21+; ask the desk about enrollment and redemption.",
    "place": "3333 Blue Diamond Rd, Las Vegas, NV 89139",
    "map": "https://www.google.com/maps/search/?api=1&query=Silverton+Casino+Lodge+Las+Vegas",
    "source": "https://silvertoncasino.com/event/veterans-eat-free/",
    "kind": "free",
    "days": "Wed–Fri",
    "hint": "Best one for Thursday or Friday because the promotion lasts beyond Veterans Day."
  },
  "applebees": {
    "id": "applebees",
    "name": "Applebee’s",
    "badge": "FREE ENTRÉE + $5 CARD",
    "when": "Wed Nov 11 · participating locations",
    "short": "Free full-size entrée from the Veterans Day menu; $5 return-visit card.",
    "details": "Veterans, active duty, Reserve and National Guard; proof of service. Dine-in only at participating restaurants. One meal per qualifying person; beverages and gratuity excluded. $5 return card expires Nov 29, 2026 and cannot be used on Veterans Day.",
    "place": "Participating Las Vegas-area locations",
    "map": "https://www.google.com/maps/search/?api=1&query=Applebees+Las+Vegas+NV",
    "source": "https://www.applebees.com/en/news/2026/veterans-day",
    "kind": "free",
    "days": "Wed only",
    "hint": "Straightforward free dinner option if the group prefers a familiar chain."
  },
  "chilis": {
    "id": "chilis",
    "name": "Chili’s Grill & Bar",
    "badge": "FREE SELECT ENTRÉE",
    "when": "Wed Nov 11 · participating locations",
    "short": "Choose a free entrée from the limited Veterans Day menu.",
    "details": "Veterans and active military; dine-in only at participating Chili’s. Choices include Chicken Crispers, Chicken Bacon Ranch Quesadillas, Oldtimer with Cheese, or soup with house salad. No substitutions; beverages and gratuity not included.",
    "place": "Participating Las Vegas-area locations",
    "map": "https://www.google.com/maps/search/?api=1&query=Chilis+Las+Vegas+NV",
    "source": "https://www.chilis.com/restaurant-events/veterans-day",
    "kind": "free",
    "days": "Wed only",
    "hint": "Another simple free-meal option before the NHL game, subject to location participation."
  },
  "redrobin": {
    "id": "redrobin",
    "name": "Red Robin",
    "badge": "FREE BURGER + FRIES",
    "when": "Wed Nov 11 · participating locations",
    "short": "Free Red’s Big Tavern Burger with Bottomless Steak Fries.",
    "details": "Veterans and active-duty members with proof of service. Dine-in only; no purchase required. No substitutions; taxes and gratuities excluded. Participating restaurants only.",
    "place": "Participating Las Vegas-area locations",
    "map": "https://www.google.com/maps/search/?api=1&query=Red+Robin+Las+Vegas+NV",
    "source": "https://www.redrobin.com/veterans-day",
    "kind": "free",
    "days": "Wed only",
    "hint": "Good for burger fans; expect busy dining rooms on Veterans Day."
  },
  "palms": {
    "id": "palms",
    "name": "Palms A.Y.C.E. Buffet",
    "badge": "FREE BRUNCH · MORNING ONLY",
    "when": "Wed Nov 11 · 9 AM–2 PM",
    "short": "Free Veterans Day buffet brunch for eligible Club Serrano members.",
    "details": "Eligible active or retired military must activate at Club Serrano Desk between 9 AM and 2 PM, provide proof of service, and present Club Serrano card and photo ID at A.Y.C.E. Must be 21+; taxes/tips not included. This ends shortly after the group’s 1:09 PM flight lands, so mainly useful to teammates already in Vegas.",
    "place": "4321 W Flamingo Rd, Las Vegas, NV 89103",
    "map": "https://www.google.com/maps/search/?api=1&query=Palms+AYCE+Buffet+Las+Vegas",
    "source": "https://www.palms.com/gaming-promotions/veterans-day-brunch",
    "kind": "free",
    "days": "Wed morning",
    "hint": "Excellent offer, but probably NOT feasible with the group’s 1:09 PM arrival."
  },
  "guyfieri": {
    "id": "guyfieri",
    "name": "Guy Fieri’s Vegas Kitchen & Bar",
    "badge": "MILITARY DISCOUNT + DRINK",
    "when": "Ask during Nov 11–15 trip",
    "short": "Guy’s Salute to Service: 25% off eligible meals; complimentary domestic draft for eligible veterans and active duty.",
    "details": "At The LINQ on the Strip. Caesars’ Nov 2026 announcement describes 25% off meals for military/first responders and a complimentary domestic draft for veterans and active duty. A $25 All American Bacon Burger with fries also supports the Guy Fieri Foundation; do not assume discounts combine. Confirm availability and ID rules when seated.",
    "place": "The LINQ, 3535 S Las Vegas Blvd, Las Vegas, NV 89109",
    "map": "https://www.google.com/maps/search/?api=1&query=Guy+Fieri+Vegas+Kitchen+and+Bar+LINQ",
    "source": "https://newsroom.caesars.com/press-releases/press-release-details/2026/Fall-Bucket-List-11-Ways-to-Celebrate-the-Season-at-Caesars-Entertainments-Las-Vegas-Resorts-2026-NvetQ_FBeK/default.aspx",
    "kind": "discount",
    "days": "Ask during trip",
    "hint": "Good Strip stop if the team is already exploring near The LINQ; not a free full meal."
  },
  "mgm": {
    "id": "mgm",
    "name": "MGM Military & Veterans Program",
    "badge": "ONGOING DISCOUNTS",
    "when": "Available across the trip",
    "short": "MVP MGM Rewards provides 10% off at participating dining outlets, plus select show and attraction savings.",
    "details": "Eligible active duty, Guard/Reserve, retirees, prior service and eligible spouses can sign up in person for an MVP MGM Rewards card. MGM lists 10% off at participating food and beverage outlets plus attraction, show and retail discounts. Bring accepted military or veteran proof and photo ID. Terms and participating outlets vary.",
    "place": "MGM resorts around the Strip (Park MGM, NY-NY, Bellagio, etc.)",
    "map": "https://www.google.com/maps/search/?api=1&query=Park+MGM+Las+Vegas",
    "source": "https://www.mgmresorts.com/en/offers/military.html",
    "kind": "discount",
    "days": "Any day",
    "hint": "Worth having for the Strip, particularly around T-Mobile Arena; enrollment at MGM Rewards desk."
  }
};

// Array of deal IDs: their DISPLAY ORDER in the complete list below.
// You can reorder these strings without changing any React component.
export const VETERAN_OFFER_ORDER = [
  'southpoint', 'silverton', 'applebees', 'chilis',
  'redrobin', 'palms', 'guyfieri', 'mgm'
];
