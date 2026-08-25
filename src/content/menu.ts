/** Menu categories, items and the featured "Signature Picks" dishes. */

import { IMAGES } from "./images";


/* =========================================================
   MENU ITEM IMAGES
   ========================================================= */

import chickenCheeseBall from "../assets/Menu/Chicken/Chicken Cheese Ball.webp";
import chickenCutlet from "../assets/Menu/Chicken/Chicken Cutlet.webp";
import chickenNuggets from "../assets/Menu/Chicken/Chicken Nuggets.webp";
import chickenWings from "../assets/Menu/Chicken/Chicken Wings.webp";

import coldCoffee from "../assets/Menu/Coffee/Cold Coffee.webp";
import hotCoffee from "../assets/Menu/Coffee/Hot Coffee.webp";

import fishBall from "../assets/Menu/Fish/Fish Ball.webp";
import fishFinger from "../assets/Menu/Fish/Fish Finger.webp";
import fishFry from "../assets/Menu/Fish/Fish Fry.webp";
import fishRoll from "../assets/Menu/Fish/Fish Roll.webp";

import nonVegMaggi from "../assets/Menu/Maggi/Non-Veg Maggi.webp";
import vegMaggi from "../assets/Menu/Maggi/Veg Maggi.webp";

import darjeelingChickenMomo from "../assets/Menu/Momo/Darjeeling Chicken Momo.webp";
import gandharajMomo from "../assets/Menu/Momo/Gandharaj Momo.webp";
import kurkureMomo from "../assets/Menu/Momo/Kurkure Momo.webp";
import panFriedMomo from "../assets/Menu/Momo/Pan Fried Momo.webp";

import RosogollaTea from "../assets/Menu/Tea/Rosogolla Tea.webp";
import MokaibariTea from "../assets/Menu/Tea/Mokaibari Tea.webp";
import MasalaTea from "../assets/Menu/Tea/Masala Tea.webp";
import LankaTea from "../assets/Menu/Tea/Lanka Tea.webp";

import redSaucePasta from "../assets/Menu/Pasta/Red Sauce Pasta.webp";
import whiteSaucePasta from "../assets/Menu/Pasta/White Sauce Pasta.webp";

import appleCrunch from "../assets/Menu/Soft Drinks/Apple Crunch.webp";
import blueCuracaoMojito from "../assets/Menu/Soft Drinks/Blue Curacao Mojito.webp";
import masalaColdDrinks from "../assets/Menu/Soft Drinks/Masala Cold Drinks.webp";
import pineappleCrunch from "../assets/Menu/Soft Drinks/Pineapple Crunch.webp";
import virginMojito from "../assets/Menu/Soft Drinks/Virgin Mojito.webp";

import frenchFry from "../assets/Menu/Veg/French Fry.webp";
import potatoCheeseShotz from "../assets/Menu/Veg/Potato Cheese Shotz.webp";
import vegCheeseBall from "../assets/Menu/Veg/Veg Cheese Ball.webp";
import vegRoll from "../assets/Menu/Veg/Veg Roll.webp";

/* =========================================================
   TYPES
   ========================================================= */

export type MenuCategory = {
  id: string;
  label: string;
  blurb: string;
  image: string;
  items: string[];
};

/* =========================================================
   MENU IMAGE MAP
   ========================================================= */

export const MENU_ITEM_IMAGES: Record<string, string> = {
  /* Fish */
  "Fish Fry": fishFry,
  "Fish Ball": fishBall,
  "Fish Finger": fishFinger,
  "Spl. Fish Roll": fishRoll,

  /* Chicken */
  "Chicken Nuggets": chickenNuggets,
  "Chicken Cheese Ball": chickenCheeseBall,
  "Chicken Wings": chickenWings,
  "Chicken Cutlet": chickenCutlet,

  /* Veg */
  "Veg Cheese Ball": vegCheeseBall,
  "Potato Cheese Shotz": potatoCheeseShotz,
  "French Fry": frenchFry,
  "Veg Roll": vegRoll,

  /* Maggi */
  "Veg Maggi": vegMaggi,
  "Non-Veg Maggi": nonVegMaggi,

  /* Pasta */
  "White Sauce Pasta": whiteSaucePasta,
  "Red Sauce Pasta": redSaucePasta,

  /* Momo */
  "Darjeeling Chicken Momo": darjeelingChickenMomo,
  "Gandharaj Momo": gandharajMomo,
  "Kurkure Momo": kurkureMomo,
  "Pan Fried Momo": panFriedMomo,

  /* Coffee */
  "Cold Coffee": coldCoffee,
  "Hot Coffee": hotCoffee,

  /*tea*/
  /* Tea */
"Rosogolla Tea": RosogollaTea,
"Lanka Tea": LankaTea,
"Masala Tea": MasalaTea,
"Mokaibari Tea": MokaibariTea,

/* Coffee */

  /* Soft Drinks */
  "Blue Curacao Mojito": blueCuracaoMojito,
  "Virgin Mojito": virginMojito,
  "Apple Crunch": appleCrunch,
  "Pineapple Crunch": pineappleCrunch,
  "Masala Cold Drinks": masalaColdDrinks,

  /*
   * Tea images are not currently present in your
   * src/assets/Menu/Tea folder.
   *
   * The menu.tsx will therefore use IMAGES.dishTea
   * as the fallback for these items.
   */
};

/* =========================================================
   MENU CATEGORIES
   ========================================================= */

export const MENU: MenuCategory[] = [
  {
    id: "fish",
    label: "Fish",
    blurb: "Where the adda begins.",
    image: IMAGES.dishFishFry,
    items: [
      "Fish Fry",
      "Fish Ball",
      "Fish Finger",
      "Spl. Fish Roll",
    ],
  },

  {
    id: "chicken",
    label: "Chicken",
    blurb: "Crisp, hot, shareable.",
    image: IMAGES.dishChicken,
    items: [
      "Chicken Nuggets",
      "Chicken Cheese Ball",
      "Chicken Wings",
      "Chicken Cutlet",
    ],
  },

  {
    id: "veg",
    label: "Veg",
    blurb: "Cheesy little bites.",
    image: IMAGES.dishVeg,
    items: [
      "Veg Cheese Ball",
      "Potato Cheese Shotz",
      "French Fry",
      "Veg Roll",
    ],
  },

  {
    id: "maggi",
    label: "Maggi",
    blurb: "Comfort in a bowl.",
    image: IMAGES.dishMaggi,
    items: [
      "Veg Maggi",
      "Non-Veg Maggi",
    ],
  },

  {
    id: "pasta",
    label: "Pasta",
    blurb: "Café classics, adda style.",
    image: IMAGES.dishPasta,
    items: [
      "White Sauce Pasta",
      "Red Sauce Pasta",
    ],
  },

  {
    id: "momo",
    label: "Momo",
    blurb: "Steamed, fried, kurkure.",
    image: IMAGES.dishMomo,
    items: [
      "Darjeeling Chicken Momo",
      "Gandharaj Momo",
      "Kurkure Momo",
      "Pan Fried Momo",
    ],
  },

  {
    id: "tea",
    label: "Tea",
    blurb: "Every adda needs a cup.",
    image: IMAGES.dishTea,
    items: [
      "Rosogolla Tea",
      "Lanka Tea",
      "Masala Tea",
      "Mokaibari Tea",
    ],
  },

  {
    id: "coffee",
    label: "Coffee",
    blurb: "Hot or over ice.",
    image: IMAGES.dishCoffee,
    items: [
      "Cold Coffee",
      "Hot Coffee",
    ],
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

/* =========================================================
   TICKER
   ========================================================= */

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

/* =========================================================
   SIGNATURE / FEATURED DISHES
   ========================================================= */

export const FEATURED_DISHES: Record<
  string,
  { image: string; desc: string }
> = {
  "Fish Fry": {
    image: fishFry,
    desc: "Crispy. Classic. Kolkata-inspired.",
  },

  "Spl. Fish Roll": {
    image: fishRoll,
    desc: "A Fish Adda favourite in the making.",
  },

  "Kurkure Momo": {
    image: kurkureMomo,
    desc: "Crunchy outside, packed with flavour.",
  },

  "Rosogolla Tea": {
    image: IMAGES.dishTea,
    desc: "A Bengali twist on the everyday cup.",
  },
};

/* =========================================================
   SIGNATURE PICKS
   ========================================================= */

export const SIGNATURE_PICKS = Object.entries(
  FEATURED_DISHES,
).map(([name, d]) => ({
  name,
  ...d,
}));