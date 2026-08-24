/** Brand, contact details and navigation — edit these first. */

export const BRAND = {
  name: "Fish Adda",
  tagline: "Mon bole Fish, Dil bole Adda",
  legal: "A unit of Jyoty Food And Beverages",
  email: "connect.fishadda@gmail.com",
  whatsapp: "916290753683", // country code + number, no "+" or spaces
  openingAt: "Parnasree, Behala, Kolkata",
  comingSoonLabel: "• Parnasree •Behala",
  companyAddress: {
    line1: "21 Kalicharan Dutta Road",
    line2: "Behala, Kolkata – 700061",
  },
  //mapEmbed: "https://www.google.com/maps?q=Parnasree%2C%20Behala%2C%20Kolkata&output=embed",
  //mapTitle: "Map showing Parnasree, Behala, Kolkata",
mapEmbed:
  "https://www.google.com/maps?q=Fish+Adda,+G854%2B6JW,+Shekhawat+Rd,+Dhopapara,+Parnasree+Palli,+Behala,+Kolkata,+West+Bengal+700060&z=17&output=embed",

mapTitle:
  "Fish Adda, G854+6JW, Shekhawat Road, Dhopapara, Parnasree Palli, Behala, Kolkata",
};

/** Links in the header, footer and mobile menu. */
export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/story", label: "Our Story" },
  { to: "/founders", label: "Founders" },
  { to: "/franchise", label: "Franchise" },
  { to: "/contact", label: "Contact" },
] as const;

/** Links in the fixed bottom bar on mobile. */
export const BOTTOM_NAV_LINKS = [
  { to: "/", label: "Home", glyph: "home" },
  { to: "/menu", label: "Menu", glyph: "menu" },
  { to: "/story", label: "Story", glyph: "story" },
  { to: "/franchise", label: "Franchise", glyph: "shop" },
  { to: "/contact", label: "Contact", glyph: "mail" },
] as const;
