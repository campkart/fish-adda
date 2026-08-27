/**
 * ALL IMAGES USED ON THE SITE LIVE HERE.
 *
 * The logo comes from src/assets (do not change).
 * Every other image is currently a local file in src/assets.
 *
 * To switch any image to a cloud-hosted URL, simply replace its value with the
 * link, e.g.  heroFood: "https://cdn.example.com/hero.jpg",
 * and delete the matching import line above.
 */
import logoAsset from "../assets/logo.webp";
import heroFood from "../assets/hero-food.jpg";
import interior1 from "../assets/interior-1.jpg";
import interior2 from "../assets/interior-2.jpg";
import interior3 from "../assets/interior-3.jpg";
import dishFishFry from "../assets/dish-fish-fry.jpg";
import dishFishRoll from "../assets/dish-fish-roll.jpg";
import dishChicken from "../assets/dish-chicken.jpg";
import dishVeg from "../assets/dish-veg.jpg";
import dishFry from "../assets/dish-fry.jpg";
import dishMaggi from "../assets/dish-maggi.jpg";
//import dishPasta from "../assets/dish-pasta.jpg";
//import dishMomo from "../assets/dish-momo.jpg";
import dishTea from "../assets/dish-tea.png";
import dishCoffee from "../assets/dish-coffee.jpg";
import dishSoftDrink from "../assets/dish-softdrink.jpg";

export const IMAGES = {
  // Logo — keep as is (lives in src/assets)
  logo: logoAsset,

  // Banners
  heroFood,

  // Interior / gallery
  interior1,
  interior2,
  interior3,

  // Dishes
  dishFishFry,
  dishFishRoll,
  dishChicken,
  dishVeg,
  dishFry,
  dishMaggi,
  //dishPasta,
  //dishMomo,
  dishTea,
  dishCoffee,
  dishSoftDrink,
};

export const GALLERY = [
  {
    src: IMAGES.interior1,
    alt: "Folk-art mural of a Bengali woman carrying a fish basket on the Fish Adda wall",
    caption: "Painted stories of Bengal.",
  },
  {
    src: IMAGES.interior2,
    alt: "Mural of fishermen on a boat with painted waves and fish at Fish Adda",
    caption: "Inspired by the rivers.",
  },
  {
    src: IMAGES.interior3,
    alt: "Interior seating of Fish Adda with brick walls and folk fish artwork",
    caption: "Built for the adda.",
  },
];
