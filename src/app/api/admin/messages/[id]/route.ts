import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { deleteContactMessage } from "@/lib/contacts";

/*
  Deletes a single submission. Auth is re-checked here (not just in proxy.ts) so
  the endpoint is safe on its own — the proxy is only an optimistic first gate.
*/
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;

  try {
    await deleteContactMessage(id);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Message not found." }, { status: 404 });
  }
}
