import type { IconType } from "react-icons";

export type NavLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Program = {
  icon: IconType;
  title: string;
  description: string;
};

export type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
};

export type Trainer = {
  name: string;
  specialty: string;
  bio: string;
  image: string;
  instagram: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  result: string;
  rating: number;
};

export type Branch = {
  name: string;
  status: "open" | "coming-soon";
  address: string;
  hours: string;
  phone: string;
  image: string;
  mapUrl: string;
};

// Serializable shape of a saved contact submission, safe to pass from server
// components to client components (createdAt is an ISO string, not a Date).
export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  createdAt: string;
};
