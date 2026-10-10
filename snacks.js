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
    emoji: "🔥",
    name: "Spicy Chips",
    price: 1.25,
    category: "Chips"
  },
  {
    emoji: "🟢",
    name: "Small Sprite Can",
    price: 1.00,
    category: "Drinks"
  },
  {
    emoji: "🟢",
    name: "Large Sprite  Bottles",
    price: 2.00,
    category: "Drinks"
  },
  {
    emoji: "🍹",
    name: "AriZona",
    price: 2.00,
    category: "Drinks",
    badge: "Popular"
  },
  {
    emoji: "🟣",
    name: "Kool Aid",
    price: 100.00,
    category: "Drinks"
  },
  {
    emoji: "🍋",
    name: "AriZona Lemonade",
    price: 1.00,
    category: "Drinks"
  },
  {
    emoji: "💲",
    name: "Chips+Sprite+HoneyBun",
    price: 2.00,
    category: "Deals",
    badge: "Best Value"
  },
  {
    emoji: "🔴",
    name: "Sour Patch Kids",
    price: 2.00,
    category: "Candy"
  }
];
