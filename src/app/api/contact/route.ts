import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  interest: z.string().optional(),
  message: z.string().min(1),
});

/*
  Contact form endpoint (stub). Validates the payload and returns success.
  TODO: wire up a real email service (e.g. Resend / Nodemailer) or a CRM
  before launch so submissions actually reach the client.
*/
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed" },
      { status: 422 },
    );
  }

  // Placeholder: log so the internee can confirm submissions during dev.
  console.log("New contact submission:", parsed.data);

  return NextResponse.json({ ok: true }, { status: 200 });
}
