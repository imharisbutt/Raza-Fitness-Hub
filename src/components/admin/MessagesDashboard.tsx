"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { FaTrash, FaSearch, FaSignOutAlt, FaInbox } from "react-icons/fa";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import type { ContactMessage } from "@/types";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

function formatDate(iso: string) {
  return dateFormatter.format(new Date(iso));
}

const fieldClass =
  "w-full rounded-md border border-charcoal-700 bg-charcoal-950 px-4 py-3 text-sm text-offwhite placeholder:text-muted/70 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500";

type Props = {
  messages: ContactMessage[];
};

export default function MessagesDashboard({ messages }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return messages;
    return messages.filter(
      (m) =>
        m.name.toLowerCase().includes(q) || m.email.toLowerCase().includes(q),
    );
  }, [messages, search]);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this message? This cannot be undone.")) return;
    setError(null);
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/messages/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Failed to delete message.");
        return;
      }
      // Re-run the server component so the table reflects the deletion.
      router.refresh();
    } catch {
      setError("Network error while deleting.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <section className="min-h-screen py-28">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
              <span className="h-px w-8 bg-gold-500" />
              Admin
            </span>
            <h1 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-wide text-offwhite sm:text-5xl">
              Contact Messages
            </h1>
            <p className="mt-2 text-sm text-muted">
              {messages.length} total submission{messages.length === 1 ? "" : "s"}
              , newest first.
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 self-start rounded-md border border-charcoal-700 px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-offwhite transition-colors hover:border-gold-500/60 hover:text-gold-400"
          >
            <FaSignOutAlt size={14} />
            Log out
          </button>
        </div>

        {messages.length > 0 && (
          <div className="relative mt-8 max-w-sm">
            <FaSearch
              size={14}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email…"
              className={cn(fieldClass, "pl-10")}
            />
          </div>
        )}

        {error && (
          <p className="mt-4 rounded-md border border-red-500/40 bg-red-500/5 px-4 py-3 text-sm text-red-400">
            {error}
          </p>
        )}

        {messages.length === 0 ? (
          <EmptyState
            icon={<FaInbox size={28} />}
            title="No messages yet"
            body="When visitors submit the contact form, their messages will appear here."
          />
        ) : filtered.length === 0 ? (
          <EmptyState
            icon={<FaSearch size={24} />}
            title="No matches"
            body="No submissions match your search. Try a different name or email."
          />
        ) : (
          <div className="mt-8 overflow-x-auto rounded-lg border border-charcoal-700/60 bg-charcoal-850">
            <table className="w-full min-w-[880px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-charcoal-700/60 text-xs uppercase tracking-widest text-muted">
                  <th className="px-5 py-4 font-semibold">Name</th>
                  <th className="px-5 py-4 font-semibold">Email</th>
                  <th className="px-5 py-4 font-semibold">Phone</th>
                  <th className="px-5 py-4 font-semibold">Program</th>
                  <th className="px-5 py-4 font-semibold">Message</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap">
                    Submitted At
                  </th>
                  <th className="px-5 py-4 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((m) => (
                  <tr
                    key={m.id}
                    className="border-b border-charcoal-700/40 last:border-0 align-top transition-colors hover:bg-charcoal-800/40"
                  >
                    <td className="px-5 py-4 font-medium text-offwhite whitespace-nowrap">
                      {m.name}
                    </td>
                    <td className="px-5 py-4 text-muted">
                      <a
                        href={`mailto:${m.email}`}
                        className="hover:text-gold-400"
                      >
                        {m.email}
                      </a>
                    </td>
                    <td className="px-5 py-4 text-muted whitespace-nowrap">
                      {m.phone}
                    </td>
                    <td className="px-5 py-4 text-muted">
                      {m.interest ? (
                        m.interest
                      ) : (
                        <span className="text-muted/50">—</span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-muted">
                      <span className="block max-w-xs whitespace-pre-wrap break-words">
                        {m.message}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-muted whitespace-nowrap">
                      {formatDate(m.createdAt)}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleDelete(m.id)}
                        disabled={deletingId === m.id}
                        aria-label={`Delete message from ${m.name}`}
                        className="inline-flex items-center gap-1.5 rounded-md border border-charcoal-700 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted transition-colors hover:border-red-500/60 hover:text-red-400 disabled:opacity-50"
                      >
                        <FaTrash size={12} />
                        {deletingId === m.id ? "…" : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </section>
  );
}

function EmptyState({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="mt-8 flex flex-col items-center justify-center rounded-lg border border-charcoal-700/60 bg-charcoal-850 p-14 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
        {icon}
      </span>
      <h2 className="mt-5 font-display text-2xl uppercase tracking-wide text-offwhite">
        {title}
      </h2>
      <p className="mt-2 max-w-sm text-sm text-muted">{body}</p>
    </div>
  );
}
