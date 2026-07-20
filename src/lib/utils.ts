import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/*
  Shared keyboard-focus ring so every interactive element gets the same
  visible focus state. Pass the element's background color as ring-offset.
*/
export function focusRing(offsetClass: string = "focus-visible:ring-offset-charcoal-950") {
  return cn(
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2",
    offsetClass,
  );
}
