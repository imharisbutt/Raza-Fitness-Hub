import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth";
import { getContactMessages } from "@/lib/contacts";
import MessagesDashboard from "@/components/admin/MessagesDashboard";

// Always render at request time — this page reads cookies and live DB data.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact Messages",
  robots: { index: false, follow: false },
};

export default async function AdminMessagesPage() {
  // Server-side guard (in addition to proxy.ts) — redirects if not signed in.
  await requireAdmin();

  const messages = await getContactMessages();

  return <MessagesDashboard messages={messages} />;
}
