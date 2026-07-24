import { NextResponse, type NextRequest } from "next/server";
import { contactSchema } from "@/lib/validation";
import { createContactMessage } from "@/lib/contacts";

/*
  Public endpoint the contact form posts to. It validates the body on the server
  (never trusting the client), saves it, and returns a small JSON result. It does
  not expose the stored row — the form only needs to know it succeeded.
*/
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the form and try again.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    await createContactMessage(parsed.data);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("[contact] Failed to save submission:", error);
    return NextResponse.json(
      { error: "Something went wrong saving your message." },
      { status: 500 },
    );
  }
}
