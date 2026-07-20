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
  // Placeholder production domain — swap for the client's real domain before launch.
  url: "https://razafitnesshub.com",
  email: "ahmad.raza@rfhub.pk",
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
