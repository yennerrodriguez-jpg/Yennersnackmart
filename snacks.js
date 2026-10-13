/*
 * ┌────────────────────────────────────────────────────────────┐
 * │  THE SNACK MENU — snack data                                  │
 * │  This is the ONLY file you edit to update the shop.           │
 * │                                                               │
 * │  To add a snack, copy a block below and change the values.    │
 * │  Fields:                                                      │
 * │    emoji     (string)  the snack emoji            [required]  │
 * │    name      (string)  the snack name             [required]  │
 * │    price     (number)  price in dollars           [required]  │
 * │    category  (string)  groups the snack           [required]  │
 * │    badge     (string)  optional tag e.g. "New"    [optional]  │
 * │                                                               │
 * │  New categories appear automatically — no HTML editing.       │
 * └────────────────────────────────────────────────────────────┘
 */

const snacks = [
  {
    emoji: "🌶",
    name: "Spicy Chips",
    price: 1.00,
    category: "Chips"
  },
  {
    emoji: "🎈",
    name: "Airheads",
    price: 1.00,
    category: "Sweets",
    badge: "Sold out"
  },
  {
    emoji: "🎈",
    name: "Airheads $2 for 3",
    price: 2.00,
    category: "Sweets",
    badge: "Sold out"
  },
  {
    emoji: "🍯",
    name: "HoneyBun",
    price: 1.00,
    category: "Sweets",
    badge: "Sold out"
  },
  {
    emoji: "🟢",
    name: "Sprite soda small can",
    price: 1.00,
    category: "Drinks",
    badge: "Sold out"
  },
  {
    emoji: "🟢",
    name: "Large soda bottle (Any kind)",
    price: 2.00,
    category: "Drinks",
    badge: "Sold out"
  },
  {
    emoji: "🍋",
    name: "AriZona Lemonade",
    price: 1.00,
    category: "Drinks",
    badge: "Sold out"
  },
  {
    emoji: "💲",
    name: "$1 off the 1st time you order ONLINE",
    price: 0.00,
    category: "Discount",
    badge: "1 per person- Purchase Necessary"
  }
];
