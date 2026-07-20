import type { Branch } from "@/types";

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=70`;

/*
  Two branches — the established location and the upcoming one the client is
  expanding to. Update addresses, hours, and phone with real details.
*/
export const branches: Branch[] = [
  {
    name: "Gulberg (Main Branch)",
    status: "open",
    address: "123 Main Boulevard, Gulberg III, Lahore",
    hours: "Mon–Sun · 6:00 AM – 11:00 PM",
    phone: "+92 300 1234567",
    image: img("1534438327276-14e5300c3a48"),
    mapUrl: "https://maps.google.com/?q=Gulberg+Lahore",
  },
  {
    name: "DHA Phase 6",
    status: "coming-soon",
    address: "Commercial Area, DHA Phase 6, Lahore",
    hours: "Opening late 2026",
    phone: "+92 300 1234567",
    image: img("1571019613454-1cb2f99b2d8b"),
    mapUrl: "https://maps.google.com/?q=DHA+Phase+6+Lahore",
  },
];
