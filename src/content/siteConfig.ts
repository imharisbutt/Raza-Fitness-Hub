import type { NavLink } from "@/types";

/*
  Central site config — swap these placeholder values for the client's real
  details (name, contact, socials) without touching any component.
*/
export const siteConfig = {
  name: "Raza Fitness Hub",
  shortName: "RFH",
  tagline: "Lahore's Premium Strength & Performance Club",
  description:
    "Raza Fitness Hub is a premium strength and performance gym in Lahore. Train with expert coaches, world-class equipment, and a community built to push you further.",
  url: "https://imharisbutt.github.io/Raza-Fitness-Hub",
  email: "ahmad.raza@rfhub.pk",
  // Static hosting (GitHub Pages) has no backend, so the contact form posts
  // directly to Formspree. Sign up at formspree.io, create a form, and
  // replace this with your real endpoint (https://formspree.io/f/xxxxxxxx).
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
  phoneDisplay: "+92 300 1234567",
  phoneRaw: "923001234567",
  instagram: "razafitnesshub",
  instagramUrl: "https://instagram.com/razafitnesshub",
  whatsappUrl: "https://wa.me/923001234567",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#pricing" },
  { label: "Trainers", href: "#trainers" },
  { label: "Branches", href: "#branches" },
  { label: "Contact", href: "#contact" },
];
