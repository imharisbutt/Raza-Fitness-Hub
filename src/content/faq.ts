export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Do I need any experience to join?",
    answer:
      "Not at all. Whether you're stepping into a gym for the first time or you're a seasoned lifter, our coaches build a plan around your current level — no judgment, no guesswork.",
  },
  {
    question: "What are your gym hours?",
    answer:
      "Our Gulberg branch is open daily from 6:00 AM to 11:00 PM, seven days a week. Our DHA Phase 6 branch opens later in 2026 — follow our Instagram for the exact date.",
  },
  {
    question: "Do you offer a free trial or trial pass?",
    answer:
      "Yes — every new member starts with a free fitness assessment and a full walkthrough of the facility, so you know exactly what you're signing up for before committing.",
  },
  {
    question: "Can I freeze or cancel my membership?",
    answer:
      "Our memberships are month-to-month with no long-term lock-in. You can pause or cancel anytime — just let our front desk know before your next billing date.",
  },
];
