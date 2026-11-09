// ITEC 305 -- named exports and an ARRAY of OBJECTS.
// IMPORTANT: This is itinerary information WE entered. It is not pulled live
// from the tournament website. The official schedule button is the source
// everyone should check when a game is changed or added.
//
// ARRAY: DAYS holds several day objects inside [ ... ].
// OBJECT: each day holds named properties like day, date, events, and foot.
// NESTED ARRAY: each day.events property holds its timeline entries.
//
// "const" prevents assigning a DIFFERENT array to DAYS. It does NOT freeze
// the objects inside that array. We keep this schedule data as our one source
// so we don't accidentally maintain different copies in different screens.
// Another exam idea: a variable that has not been assigned is undefined,
// while null is a deliberate empty value. We use the literal text "TBD"
// here because it communicates uncertainty to the people reading the site.
//
// veteranOfferIds is an ARRAY of strings that link to veteranOffers.js.
// Our DayCard uses .map() to turn each deal ID into a small footnote.
// To change the group's itinerary later, edit the objects here.
// React automatically displays them because Itinerary.jsx uses .map() and props.

export const DAYS = [
  {
    "day": "WED",
    "date": "NOV 11",
    "theme": "Touchdown + NHL night",
    "head": "Golden Knights game & the Strip",
    "kicker": "Arrival day · Veterans Day",
    "status": "CONFIRMED GAME",
    "statuscls": "gold",
    "short": "1:09 PM arrival · 6:30 PM NHL listing",
    "events": [
      {
        "id": "wed-1",
        "time": "1:09 PM",
        "title": "LAND",
        "description": "JetBlue B6 511 lands in Las Vegas (LAS), Terminal 3. Collect luggage and hockey equipment.",
        "status": "confirmed"
      },
      {
        "id": "wed-2",
        "time": "2:00–4:30 PM",
        "title": "GET SETTLED",
        "description": "Rideshare or vehicle pickup; head toward the Spring Valley Airbnb. Check house access/check-in time before arriving.",
        "status": "tentative"
      },
      {
        "id": "wed-3",
        "time": "4:30–5:00 PM",
        "title": "RIDESHARE TO THE ARENA",
        "description": "Leave extra time for Strip traffic and pregame crowds. Target the arena area by about 5:30 PM.",
        "status": "suggested"
      },
      {
        "id": "wed-4",
        "time": "6:30 PM*",
        "title": "VGK vs. UTAH MAMMOTH",
        "description": "T-Mobile Arena · Military Appreciation Knight. Bring your ticket. *Official NHL/arena time is 6:30 PM; ticket screenshot says 7:00 PM. Verify.",
        "status": "confirmed"
      },
      {
        "id": "wed-5",
        "time": "After game",
        "title": "POSTGAME WALK",
        "description": "The Park → New York-New York / nearby food → Bellagio area if energy allows. Return to Airbnb by rideshare.",
        "status": "optional"
      }
    ],
    "veteranOfferIds": ["southpoint", "applebees", "chilis", "silverton"],
    "foot": "Low-pressure first night: the NHL game is the anchor; everything afterward is optional.",
    "label": "WED NOV 11"
  },
  {
    "day": "THU",
    "date": "NOV 12",
    "theme": "Tournament opens",
    "head": "First tournament game in Henderson",
    "kicker": "Hockey first · easier day",
    "status": "GAME AT 5:50 PM",
    "statuscls": "mint",
    "short": "5:50 PM · Henderson 2 NHL Rink",
    "events": [
      {
        "id": "thu-1",
        "time": "9:00 AM",
        "title": "BREAKFAST",
        "description": "Relaxed breakfast and hydration at the villa.",
        "status": "suggested"
      },
      {
        "id": "thu-2",
        "time": "Late morning",
        "title": "EASY VEGAS WINDOW",
        "description": "Optional pool/hot tub, local brunch, or a short Strip visit. Keep the day flexible.",
        "status": "optional"
      },
      {
        "id": "thu-3",
        "time": "3:45–4:00 PM",
        "title": "LEAVE FOR HENDERSON",
        "description": "Bring full gear. Aim to arrive about 45–60 minutes before puck drop; confirm the team’s call time.",
        "status": "suggested"
      },
      {
        "id": "thu-4",
        "time": "5:50 PM",
        "title": "TOURNAMENT GAME 1",
        "description": "America First Center · Henderson 2 NHL Rink · 222 S Water St, Henderson, NV 89015.",
        "status": "confirmed"
      },
      {
        "id": "thu-5",
        "time": "After game",
        "title": "TEAM DINNER",
        "description": "Water Street District or nearby, then rest for Friday’s early start.",
        "status": "optional"
      }
    ],
    "veteranOfferIds": ["silverton", "mgm"],
    "foot": "Thursday is not the night to stay out late: Friday’s game starts at 8:20 AM.",
    "label": "THU NOV 12"
  },
  {
    "day": "FRI",
    "date": "NOV 13",
    "theme": "Early puck drop, big night out",
    "head": "Morning hockey + classic Vegas",
    "kicker": "The best open sightseeing window",
    "status": "GAME AT 8:20 AM",
    "statuscls": "mint",
    "short": "8:20 AM · Henderson 2 NHL Rink",
    "events": [
      {
        "id": "fri-1",
        "time": "6:15–6:30 AM",
        "title": "LEAVE THE VILLA",
        "description": "Aim to be at America First Center around 7:15–7:30 AM, subject to team requirements.",
        "status": "suggested"
      },
      {
        "id": "fri-2",
        "time": "8:20 AM",
        "title": "TOURNAMENT GAME 2",
        "description": "America First Center · Henderson 2 NHL Rink.",
        "status": "confirmed"
      },
      {
        "id": "fri-3",
        "time": "10:00 AM–1:00 PM",
        "title": "POSTGAME + RECOVER",
        "description": "Breakfast/brunch, showers, laundry, recovery time at Airbnb.",
        "status": "suggested"
      },
      {
        "id": "fri-4",
        "time": "Afternoon",
        "title": "STRIP EXPLORING",
        "description": "See The Venetian, LINQ Promenade, and the High Roller area if tournament scheduling permits.",
        "status": "optional"
      },
      {
        "id": "fri-5",
        "time": "Evening",
        "title": "FREMONT STREET",
        "description": "Downtown Vegas: free Viva Vision canopy shows, music, casinos, food and bars. Plan 2–3 hours if no additional games.",
        "status": "optional"
      }
    ],
    "veteranOfferIds": ["silverton", "guyfieri", "mgm"],
    "foot": "Fremont Street is the leading nightlife pick for a group on its first Vegas trip.",
    "label": "FRI NOV 13"
  },
  {
    "day": "SAT",
    "date": "NOV 14",
    "theme": "Keep open for bracket play",
    "head": "Games TBD · choose your adventure",
    "kicker": "Flexible tournament day",
    "status": "TOURNAMENT TBD",
    "statuscls": "subtle",
    "short": "Times / opponent / rink TBD",
    "events": [
      {
        "id": "sat-1",
        "time": "TBD",
        "title": "TOURNAMENT / PLAYOFFS",
        "description": "Keep the full day available until the association posts bracket times and rink assignments.",
        "status": "tbd"
      },
      {
        "id": "sat-2",
        "time": "If free",
        "title": "OPTION A: VILLA DAY",
        "description": "Pool, hot tub, billiards, basketball, grilling and group downtime. Confirm pool/spa heating if desired.",
        "status": "optional"
      },
      {
        "id": "sat-3",
        "time": "If free",
        "title": "OPTION B: RED ROCK",
        "description": "Red Rock Canyon scenic drive; requires appropriate timed-entry reservation during daytime season hours.",
        "status": "optional"
      },
      {
        "id": "sat-4",
        "time": "Evening",
        "title": "TEAM DINNER / FREE NIGHT",
        "description": "Dinner or a show only if it won’t conflict with the tournament. Avoid nonrefundable plans.",
        "status": "optional"
      }
    ],
    "veteranOfferIds": ["guyfieri", "mgm"],
    "foot": "Do not book a fixed-time excursion until the bracket and any championship path are known.",
    "label": "SAT NOV 14"
  },
  {
    "day": "SUN",
    "date": "NOV 15",
    "theme": "Final puck drop + overnight flight",
    "head": "Championship possibilities + fly home",
    "kicker": "Airline travel late Sunday",
    "status": "TOURNAMENT TBD",
    "statuscls": "subtle",
    "short": "Flight B6 948 · 11:09 PM from LAS",
    "events": [
      {
        "id": "sun-1",
        "time": "Morning",
        "title": "CHECK OUT / PACK",
        "description": "Confirm villa checkout, collect belongings, and arrange secure daytime storage for all hockey bags.",
        "status": "suggested"
      },
      {
        "id": "sun-2",
        "time": "Daytime",
        "title": "TOURNAMENT GAMES TBD",
        "description": "Potential bracket, playoff, and championship games. Confirm exact venue.",
        "status": "tbd"
      },
      {
        "id": "sun-3",
        "time": "If free",
        "title": "FINAL VEGAS WINDOW",
        "description": "Grab food, souvenirs, or a quick photo at the Welcome to Las Vegas sign.",
        "status": "optional"
      },
      {
        "id": "sun-4",
        "time": "8:30–9:00 PM",
        "title": "AIM TO REACH LAS",
        "description": "Build in time for checked hockey equipment, security, and terminal travel. JetBlue departs from Terminal 3 on your screenshot.",
        "status": "suggested"
      },
      {
        "id": "sun-5",
        "time": "10:24 PM",
        "title": "BOARDING SHOWN",
        "description": "Boarding time from shared flight screenshot; confirm in the JetBlue app.",
        "status": "confirmed"
      },
      {
        "id": "sun-6",
        "time": "11:09 PM",
        "title": "FLIGHT B6 948",
        "description": "Depart Las Vegas late Sunday, arriving at JFK Monday Nov 16 at 6:59 AM local Eastern time.",
        "status": "confirmed"
      }
    ],
    "veteranOfferIds": ["guyfieri", "mgm"],
    "foot": "Do not underestimate the bag logistics between checkout, final games, and the evening flight.",
    "label": "SUN NOV 15"
  }
];
