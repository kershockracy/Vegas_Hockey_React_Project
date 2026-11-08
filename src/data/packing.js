// ITEC 305 -- a named export of data, separate from the React components.
// This is the same idea as the CORE_CONCEPTS array of objects in class.
// Each object describes ONE section of the packing list.
// Each section has an items ARRAY containing the actual gear names.
// PackingChecklist.jsx uses .map() to turn the data into JSX elements.
// Tip: add an item by adding another string to the correct items array.
// No JSX goes in this file: data and display are kept separate.

export const PACKING_GROUPS = [
  {
    "id": "group1",
    "title": "Hockey gear",
    "items": [
      "Skates (both!) + blade protection / soakers",
      "Primary stick and backup stick",
      "Helmet with cage or visor",
      "Hockey gloves",
      "Shoulder/chest pads",
      "Elbow pads",
      "Hockey pants / girdle",
      "Shin guards",
      "Protective cup / pelvic protection",
      "Mouthguard / neck guard (if required)",
      "Team jerseys: light and dark",
      "Team hockey socks (both sets)",
      "Base layers / compression wear",
      "Skate socks for each game + spares",
      "Hockey bag and stick bag",
      "Team-issued extras / roster ID (if needed)"
    ]
  },
  {
    "id": "group2",
    "title": "Hockey small stuff",
    "items": [
      "Cloth stick tape (white / black)",
      "Clear shin-pad tape",
      "Stick wax",
      "Extra skate laces",
      "Spare helmet screws / small parts",
      "Small skate repair tool (checked baggage)",
      "Sharpening plan or skate edge tool",
      "Spare mouthguard",
      "Smelling salts — confirm FAA/JetBlue rules BEFORE flying",
      "Electrolyte powder / packets",
      "Protein bars and quick snacks",
      "Refillable water bottle (empty through security)",
      "Athletic tape / blister pads",
      "Small first-aid items / bandages",
      "Microfiber towel / gear drying towel",
      "Laundry or odor-proof bags / zip bags",
      "Sharpie / player-number labels",
      "Flip-flops for locker room"
    ]
  },
  {
    "id": "group3",
    "title": "Casual & pool",
    "items": [
      "Swimsuit / swim trunks (consider 2)",
      "Pool slides / flip-flops",
      "Casual T-shirts / tops",
      "Shorts and jeans / casual pants",
      "Light jacket / hoodie for cool nights",
      "Comfortable walking sneakers",
      "Athletic or gym clothes",
      "Pajamas / sleepwear",
      "Underwear and everyday socks",
      "Sunglasses and hat",
      "Vegas / team spirit shirt",
      "Lightweight day bag or backpack",
      "Reusable laundry bag"
    ]
  },
  {
    "id": "group4",
    "title": "Dressier option",
    "items": [
      "Collared shirt / polo or dressy top",
      "Chinos / dark jeans or dress pants",
      "Clean casual dress shoes",
      "Belt and matching socks",
      "Optional sport coat / blazer"
    ]
  },
  {
    "id": "group5",
    "title": "Personal hygiene",
    "items": [
      "Toothbrush, toothpaste and floss",
      "Deodorant / antiperspirant",
      "Shampoo and conditioner (if preferred)",
      "Body wash / soap",
      "Razor and shaving cream",
      "Hairbrush / comb / hair product",
      "Face wash and moisturizer",
      "Sunscreen and lip balm",
      "Contacts / solution or eyeglasses",
      "Prescriptions and routine medications",
      "Daily grooming items / nail care",
      "Hand sanitizer / wipes / tissues",
      "Travel-size cologne / fragrance (optional)",
      "Personal care items / toiletries bag"
    ]
  },
  {
    "id": "group6",
    "title": "Travel & electronics",
    "items": [
      "Government photo ID and wallet",
      "Flight details / JetBlue app",
      "Golden Knights ticket and tournament info",
      "Phone + charging cable and plug",
      "Portable power bank (carry-on only)",
      "Earbuds / headphones",
      "Payment cards and a little cash",
      "Luggage tags and tracker if used",
      "Securely pack keys and essential documents",
      "Confirm JetBlue hockey bag + stick policies",
      "Check Airbnb checkout / baggage storage",
      "Coordinate group transport with hockey gear"
    ]
  }
];
