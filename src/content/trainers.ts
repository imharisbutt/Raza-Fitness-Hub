import type { Trainer } from "@/types";

/*
  Placeholder trainer profiles with stock photos. Swap `image` URLs and copy
  for the client's real team. Images use Unsplash (allowed in next.config.ts).
*/
const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=70`;

export const trainers: Trainer[] = [
  {
    name: "Bilal Ahmed",
    specialty: "Head Strength Coach",
    bio: "8+ years turning beginners into confident lifters with smart, progressive programming.",
    image: img("1584466977773-e625c37cdd50"),
    instagram: "https://instagram.com/razafitnesshub",
  },
  {
    name: "Sana Malik",
    specialty: "HIIT & Conditioning",
    bio: "Certified conditioning specialist who makes every session intense, fun, and effective.",
    image: img("1550345332-09e3ac987658"),
    instagram: "https://instagram.com/razafitnesshub",
  },
  {
    name: "Hamza Khan",
    specialty: "Personal Training",
    bio: "Focused one-on-one coaching built around your goals, and your pace.",
    image: img("1526506118085-60ce8714f8c5"),
    instagram: "https://instagram.com/razafitnesshub",
  },
  {
    name: "Ayesha Raza",
    specialty: "Functional & Recovery",
    bio: "Blends functional training with mobility work to keep members strong and injury-free.",
    image: img("1548690312-e3b507d8c110"),
    instagram: "https://instagram.com/razafitnesshub",
  },
];
