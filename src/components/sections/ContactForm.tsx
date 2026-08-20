"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  budget: z.string().optional(),
  teamNeeded: z.string().optional(),
  message: z.string().min(8),
});

type Values = z.infer<typeof schema>;

export function ContactForm() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: Values) => {
    setError(null);
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Could not save. Try WhatsApp.");
      return;
    }
    setDone(true);
  };

  if (done) {
    return (
      <div className="glass p-8 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-lime">Quest accepted</p>
        <h3 className="mt-3 font-display text-3xl">Brief locked in</h3>
        <p className="mt-3 text-white/60">We will reply from Theni on email or WhatsApp.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass grid gap-4 p-6 md:grid-cols-2">
      <Field label="Name" error={errors.name?.message}>
        <input {...register("name")} className="field" />
      </Field>
      <Field label="Email" error={errors.email?.message}>
        <input type="email" {...register("email")} className="field" />
      </Field>
      <Field label="Company">
        <input {...register("company")} className="field" />
      </Field>
      <Field label="Budget">
        <select {...register("budget")} className="field">
          <option value="">Select</option>
          <option>Under ₹1L</option>
          <option>₹1L – ₹5L</option>
          <option>₹5L+</option>
          <option>Not sure</option>
        </select>
      </Field>
      <Field label="Squad">
        <select {...register("teamNeeded")} className="field md:col-span-2">
          <option value="">Any</option>
          <option>Full Stack</option>
          <option>Automation</option>
          <option>Product (TaskWagon / Snapvy / Lumen)</option>
        </select>
      </Field>
      <div className="md:col-span-2">
        <Field label="Message" error={errors.message?.message}>
          <textarea rows={5} {...register("message")} className="field" />
        </Field>
      </div>
      {error ? <p className="md:col-span-2 text-sm text-ember">{error}</p> : null}
      <div className="md:col-span-2">
        <Button type="submit">{isSubmitting ? "Sending…" : "Send brief"}</Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-white/45">
        {label}
      </span>
      {children}
      {error ? <span className="mt-1 block text-xs text-ember">{error}</span> : null}
    </label>
  );
}
