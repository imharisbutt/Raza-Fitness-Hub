"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { FaLock, FaArrowRight } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-md border border-charcoal-700 bg-charcoal-950 px-4 py-3 text-sm text-offwhite placeholder:text-muted/70 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Login failed. Please try again.");
        return;
      }
      // Full navigation so the proxy re-reads the new session cookie.
      router.replace("/admin/messages");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center py-28">
      <Container className="max-w-md">
        <div className="rounded-lg border border-charcoal-700/60 bg-charcoal-850 p-8">
          <div className="flex flex-col items-center text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
              <FaLock size={20} />
            </span>
            <h1 className="mt-5 font-display text-3xl uppercase tracking-wide text-offwhite">
              Admin Access
            </h1>
            <p className="mt-2 text-sm text-muted">
              Enter the admin password to view contact submissions.
            </p>
          </div>

          <form onSubmit={onSubmit} className="mt-8" noValidate>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted">
              Password
            </label>
            <input
              type="password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={cn(fieldClass, error && "border-red-500/70")}
            />
            {error && <p className="mt-2 text-xs text-red-400">{error}</p>}

            <div className="mt-6">
              <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Signing in…" : "Sign In"}
                {!submitting && <FaArrowRight />}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
