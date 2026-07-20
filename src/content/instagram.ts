const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=75`;

export type InstagramPost = {
  image: string;
  alt: string;
};

/*
  Placeholder feed images mixing training, food, and lifestyle shots — the
  same variety a real Instagram grid has. Swap for the client's actual
  Instagram photos once available.
*/
export const instagramPosts: InstagramPost[] = [
  {
    image: img("1521804906057-1df8fdb718b7"),
    alt: "Member finishing a heavy deadlift set",
  },
  {
    image: img("1576678927484-cc907957088c"),
    alt: "Dumbbell rack on the training floor",
  },
  {
    image: img("1490645935967-10de6ba17061"),
    alt: "Post-workout healthy meal bowl",
  },
  {
    image: img("1611672585731-fa10603fb9e0"),
    alt: "Member training with focus in the free-weight area",
  },
  {
    image: img("1600718374662-0483d2b9da44"),
    alt: "Berry protein smoothie",
  },
  {
    image: img("1584863231364-2edc166de576"),
    alt: "Member mid-deadlift during a training session",
  },
  {
    image: img("1533560904424-a0c61dc306fc"),
    alt: "Group training session in progress",
  },
  {
    image: img("1544367567-0f2fcb009e0b"),
    alt: "Member stretching at sunset",
  },
];
