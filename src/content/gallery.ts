export type GalleryImage = {
  src: string;
  alt: string;
  /** Controls the tile's footprint in the bento grid. */
  size: "lg" | "tall" | "wide" | "sm";
};

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=75`;

/*
  Facility photos. Swap these for real photography of the gym once available —
  each tile's `size` controls its footprint in the bento grid, so keep at
  least one "lg", a couple of "wide"/"tall", and a "sm" for the layout to
  read well if you change the count.
*/
export const galleryImages: GalleryImage[] = [
  {
    src: img("1571902943202-507ec2618e8f"),
    alt: "Cardio and rowing floor with floor-to-ceiling windows at Raza Fitness Hub",
    size: "lg",
  },
  {
    src: img("1541534741688-6078c6bfb5c5"),
    alt: "Member performing an overhead barbell squat in the rack",
    size: "tall",
  },
  {
    src: img("1583454110551-21f2fa2afe61"),
    alt: "Close-up of a member loading plates onto a dumbbell",
    size: "sm",
  },
  {
    src: img("1540497077202-7c8a3999166f"),
    alt: "Bright, fully-equipped strength and cardio training floor",
    size: "wide",
  },
  {
    src: img("1546483875-ad9014c88eba"),
    alt: "Member training on the bench press floor",
    size: "tall",
  },
  {
    src: img("1571008887538-b36bb32f4571"),
    alt: "Member training on a cable machine",
    size: "sm",
  },
  {
    src: img("1558611848-73f7eb4001a1"),
    alt: "Free-weight area bathed in natural morning light",
    size: "wide",
  },
];
