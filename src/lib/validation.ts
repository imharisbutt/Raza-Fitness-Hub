import { z } from "zod";

/*
  Single source of truth for contact-submission validation. The API route uses
  this on the server so no invalid/oversized data ever reaches the database.
  The email regex matches the one the client form already uses, so client- and
  server-side checks agree.
*/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .regex(emailRegex, "Enter a valid email")
    .max(200),
  phone: z.string().trim().min(1, "Phone is required").max(40),
  // Optional program dropdown — defaults to empty string when not chosen.
  interest: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().min(1, "Please add a short message").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
