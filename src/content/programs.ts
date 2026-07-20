import {
  GiWeightLiftingUp,
  GiRunningShoe,
  GiBoxingGlove,
  GiMuscleUp,
  GiMeditation,
  GiFruitBowl,
} from "react-icons/gi";
import type { Program, Stat } from "@/types";

export const stats: Stat[] = [
  { value: "2,000+", label: "Active Members" },
  { value: "8", label: "Years Strong" },
  { value: "25+", label: "Expert Coaches" },
  { value: "2", label: "Locations" },
];

export const programs: Program[] = [
  {
    icon: GiWeightLiftingUp,
    title: "Strength Training",
    description:
      "Fully equipped free-weight and machine floors with structured programming to build real, lasting strength.",
  },
  {
    icon: GiRunningShoe,
    title: "HIIT & Cardio",
    description:
      "High-intensity conditioning sessions designed to torch calories, boost stamina, and keep your heart strong.",
  },
  {
    icon: GiBoxingGlove,
    title: "Group Classes",
    description:
      "Energetic coach-led classes — boxing, spin, and functional circuits — that make training feel like a community.",
  },
  {
    icon: GiMuscleUp,
    title: "Personal Training",
    description:
      "One-on-one coaching with a dedicated trainer who builds a plan around your body, goals, and schedule.",
  },
  {
    icon: GiMeditation,
    title: "Yoga & Recovery",
    description:
      "Mobility, stretching, and guided recovery sessions to keep you moving well and training injury-free.",
  },
  {
    icon: GiFruitBowl,
    title: "Nutrition Coaching",
    description:
      "Practical, sustainable nutrition guidance tailored to your goals — no crash diets, just results that last.",
  },
];
