export type Transformation = {
  name: string;
  beforeImage: string;
  afterImage: string;
  result: string;
  duration: string;
  story: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=75`;

/*
  Placeholder before/after pairs built from stock photography purely to
  illustrate the section's layout. Swap for real member transformation
  photos (ideally same person, similar pose/lighting) before launch.
*/
export const transformations: Transformation[] = [
  {
    name: "Nida Farooq",
    beforeImage: img("1567598508481-65985588e295"),
    afterImage: img("1550259979-ed79b48d2a30"),
    result: "Lost 14 kg",
    duration: "8 months",
    story:
      "I couldn't run for five minutes when I started. Now I train five days a week and feel like a completely different person.",
  },
  {
    name: "Danish Iqbal",
    beforeImage: img("1517130038641-a774d04afb3c"),
    afterImage: img("1554344728-77cf90d9ed26"),
    result: "Gained 9 kg muscle",
    duration: "10 months",
    story:
      "The coaches built a program specifically for my frame and goals. Best investment I've made in myself.",
  },
  {
    name: "Rabia Saeed",
    beforeImage: img("1600881333168-2ef49b341f30"),
    afterImage: img("1584464491033-06628f3a6b7b"),
    result: "Lost 10 kg",
    duration: "6 months",
    story:
      "Boxing class became my therapy. I found a strength I didn't know I had — inside the gym and out.",
  },
  {
    name: "Mehak Younas",
    beforeImage: img("1552196563-55cd4e45efb3"),
    afterImage: img("1594381898411-846e7d193883"),
    result: "Built core strength",
    duration: "7 months",
    story:
      "I wanted to feel strong, not just look a certain way. Raza Fitness Hub gave me both.",
  },
];
