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
    name: "Spicy Chips",
    price: 1.00,
    category: "Chips",
    badge: "Popular"
  },
  {
    emoji: "🎈",
    name: "Airheads",
    price: 2.00,
    category: "Sweets",
    badge: "$2 for 3 (Best Value)"
  },
  {
    emoji: "🍯",
    name: "HoneyBuns",
    price: 1.00,
    category: "Sweets"
  },
  {
    emoji: "🟢",
    name: "Small Sprite Can",
    price: 1.00,
    category: "Drinks"
  },
  {
    emoji: "🍋",
    name: "AriZona Lemonade",
    price: 1.00,
    category: "Drinks"
  },
  {
    emoji: "🥤",
    name: "Kool Aid",
    price: 1.00,
    category: "Drinks"
  },
  {
    emoji: "💲",
    name: "Get a Dollar of when you order ONLINE",
    price: 1.00,
    category: "Discount",
    badge: "1 Per Person  - Purchase Necessary"
  }
];
