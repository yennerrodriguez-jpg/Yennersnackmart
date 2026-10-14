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
    emoji: "🌶️",
    name: "Spicy chips",
    price: 1.00,
    category: "Chips",
    badge: "Popular"
  },
  {
    emoji: "🍭",
    name: "Trolli Gummies",
    price: 2.00,
    category: "Sweets",
    badge: "New"
  },
  {
    emoji: "🟢",
    name: "Small Sprite can",
    price: 1.00,
    category: "Drinks"
  },
  {
    emoji: "🟢",
    name: "Any kind of large soda bottle",
    price: 2.00,
    category: "Drinks"
  },
  {
    emoji: "🍋",
    name: "AriZona Lemonade",
    price: 1.00,
    category: "Drinks"
  },
  {
    emoji: "🎈",
    name: "Airheads",
    price: 2.00,
    category: "Sweets",
    badge: "$2 for 3"
  },
  {
    emoji: "💲",
    name: "$1 BONUS  the first time you order ONLINE",
    price: 0.00,
    category: "Deals",
    badge: "1 per person- Purchase Necessary"
  }
];
