/** Menu categories, items and the featured "Signature Picks" dishes. */
import { IMAGES } from "./images";

export type MenuCategory = {
  id: string;
  label: string;
  blurb: string;
  image: string;
  items: string[];
};

export const MENU: MenuCategory[] = [
  {
    id: "fish",
    label: "Fish",
    blurb: "Where the adda begins.",
    image: IMAGES.dishFishFry,
    items: ["Fish Fry", "Fish Ball", "Fish Finger", "Spl. Fish Roll"],
  },
  {
    id: "chicken",
    label: "Chicken",
    blurb: "Crisp, hot, shareable.",
    image: IMAGES.dishChicken,
    items: ["Chicken Nuggets", "Chicken Cheese Ball", "Chicken Wings", "Chicken Cutlet"],
  },
  {
    id: "veg",
    label: "Veg",
    blurb: "Cheesy little bites.",
    image: IMAGES.dishVeg,
    items: ["Veg Cheese Ball", "Potato Cheese Shotz", "French Fry","Veg Roll"],
  },
  //{ id: "fry", label: "Fry", blurb: "The table favourite.", image: IMAGES.dishFry, items: ["French Fry"] },
  {
    id: "maggi",
    label: "Maggi",
    blurb: "Comfort in a bowl.",
    image: IMAGES.dishMaggi,
    items: ["Veg Maggi", "Non-Veg Maggi"],
  },
  {
    id: "pasta",
    label: "Pasta",
    blurb: "Café classics, adda style.",
    image: IMAGES.dishPasta,
    items: ["White Sauce Pasta", "Red Sauce Pasta"],
  },
  {
    id: "momo",
    label: "Momo",
    blurb: "Steamed, fried, kurkure.",
    image: IMAGES.dishMomo,
    items: ["Darjeeling Chicken Momo", "Gandharaj Momo", "Kurkure Momo", "Pan Fried Momo"],
  },
  {
    id: "tea",
    label: "Tea",
    blurb: "Every adda needs a cup.",
    image: IMAGES.dishTea,
    items: ["Rosogolla Tea", "Lanka Tea", "Masala Tea", "Mokaibari Tea"],
  },
  {
    id: "coffee",
    label: "Coffee",
    blurb: "Hot or over ice.",
    image: IMAGES.dishCoffee,
    items: ["Cold Coffee", "Hot Coffee"],
  },
  {
    id: "drinks",
    label: "Soft Drinks",
    blurb: "Cool down, stay longer.",
    image: IMAGES.dishSoftDrink,
    items: [
      "Blue Curacao Mojito",
      "Virgin Mojito",
      "Apple Crunch",
      "Pineapple Crunch",
      "Masala Cold Drinks",
    ],
  },
];

/** Words in the scrolling ticker strip. */
export const TICKER = [
  "FISH",
  "CHICKEN",
  "VEG",
  "MOMO",
  "MAGGI",
  "PASTA",
  "TEA",
  "COFFEE",
  "SOFT DRINKS",
];

/** Signature picks — shown on the home page and at the bottom of the menu page. */
export const FEATURED_DISHES: Record<string, { image: string; desc: string }> = {
  "Fish Fry": { image: IMAGES.dishFishFry, desc: "Crispy. Classic. Kolkata-inspired." },
  "Spl. Fish Roll": { image: IMAGES.dishFishRoll, desc: "A Fish Adda favourite in the making." },
  "Kurkure Momo": { image: IMAGES.dishMomo, desc: "Crunchy outside, packed with flavour." },
  "Rosogolla Tea": { image: IMAGES.dishTea, desc: "A Bengali twist on the everyday cup." },
};

export const SIGNATURE_PICKS = Object.entries(FEATURED_DISHES).map(([name, d]) => ({
  name,
  ...d,
}));
