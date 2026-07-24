"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { programs } from "@/content/programs";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const fieldClass =
  "w-full rounded-md border border-charcoal-700 bg-charcoal-950 px-4 py-3 text-sm text-offwhite placeholder:text-muted/70 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setServerError(false);
    try {
      // Saves the submission to our database via the API route (was Formspree).
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      reset();
    } catch {
      setServerError(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-gold-500/40 bg-charcoal-850 p-10 text-center">
        <FaCheckCircle className="text-gold-400" size={48} />
        <h3 className="mt-5 font-display text-3xl uppercase tracking-wide text-offwhite">
          Message Sent!
        </h3>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold uppercase tracking-wide text-gold-400 hover:text-gold-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-lg border border-charcoal-700/60 bg-charcoal-850 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className={cn(fieldClass, errors.name && "border-red-500/70")}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted">
            Email
          </label>
          <input
            type="email"
            placeholder="you@email.com"
            className={cn(fieldClass, errors.email && "border-red-500/70")}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted">
            Phone
          </label>
          <input
            type="tel"
            placeholder="+92 3XX XXXXXXX"
            className={cn(fieldClass, errors.phone && "border-red-500/70")}
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted">
            I&apos;m interested in
          </label>
          <select className={fieldClass} {...register("interest")}>
            <option value="">Select a program (optional)</option>
            {programs.map((p) => (
              <option key={p.title} value={p.title}>
                {p.title}
              </option>
            ))}
            <option value="Membership">General Membership</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your goals…"
            className={cn(fieldClass, "resize-none", errors.message && "border-red-500/70")}
            {...register("message", { required: "Please add a short message" })}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
          )}
        </div>
      </div>

      {serverError && (
        <p className="mt-4 text-sm text-red-400">
          Something went wrong. Please try again or reach us on WhatsApp.
        </p>
      )}

      <div className="mt-6">
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send Message"}
          {!isSubmitting && <FaArrowRight />}
        </Button>
      </div>
    </form>
  );
}
