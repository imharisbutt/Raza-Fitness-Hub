import type { PricingTier } from "@/types";

/*
  Placeholder membership tiers. Prices are illustrative (PKR/month) — confirm
  real pricing with the client before launch.
*/
export const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "Rs 4,500",
    period: "/month",
    description: "Everything you need to get started and stay consistent.",
    features: [
      "Full gym floor access",
      "Locker & shower facilities",
      "2 group classes per week",
      "Fitness assessment",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "Rs 7,500",
    period: "/month",
    description: "Our most popular plan for members who want to level up.",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "2 personal training sessions",
      "Personalised workout plan",
      "Nutrition consultation",
    ],
    featured: true,
    cta: "Join Pro",
  },
  {
    name: "Elite",
    price: "Rs 12,000",
    period: "/month",
    description: "The complete premium experience with full coaching support.",
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Priority class booking",
      "Monthly body composition scan",
      "Access to both branches",
    ],
    featured: false,
    cta: "Go Elite",
  },
];
