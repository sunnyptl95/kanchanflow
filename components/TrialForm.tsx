"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./Button";

type Fields = { name: string; email: string; company: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, company }: Fields): Errors {
  const errors: Errors = {};
  if (name.trim().length < 2) errors.name = "Enter your full name.";
  if (!emailPattern.test(email)) errors.email = "Enter a work email like asha@yourplant.in.";
  if (company.trim().length < 2) errors.company = "Enter your company name.";
  return errors;
}

const inputClass =
  "mt-1 w-full border-2 border-graphite bg-white px-3 py-3 hover:bg-paper disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-red-700";

export default function TrialForm() {
  const [values, setValues] = useState<Fields>({ name: "", email: "", company: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setSending(true);
    // Frontend-only task: pretend the request takes a moment
    setTimeout(() => { setSending(false); setDone(true); }, 800);
  }

  if (done) {
    return (
      <div role="status" className="max-w-xl border-2 border-graphite bg-white p-8">
        <CheckCircle2 aria-hidden className="text-gold-deep" size={36} />
        <h3 className="mt-3 font-display text-3xl font-bold">Trial request received.</h3>
        <p className="mt-2 text-muted">
          Thanks, {values.name.split(" ")[0]}. We will email {values.email} within one working day with your login and a link to import your customers.
        </p>
      </div>
    );
  }

  const fields: { key: keyof Fields; label: string; type: string; autoComplete: string }[] = [
    { key: "name", label: "Full name", type: "text", autoComplete: "name" },
    { key: "email", label: "Work email", type: "email", autoComplete: "email" },
    { key: "company", label: "Company", type: "text", autoComplete: "organization" },
  ];

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-xl space-y-5 border-2 border-graphite bg-white p-6 md:p-8">
      {fields.map(({ key, label, type, autoComplete }) => (
        <div key={key}>
          <label htmlFor={`trial-${key}`} className="font-semibold">{label}</label>
          <input
            id={`trial-${key}`}
            type={type}
            autoComplete={autoComplete}
            value={values[key]}
            onChange={update(key)}
            disabled={sending}
            aria-invalid={Boolean(errors[key])}
            aria-describedby={errors[key] ? `trial-${key}-error` : undefined}
            className={inputClass}
          />
          {errors[key] && <p id={`trial-${key}-error`} className="mt-1 text-sm font-medium text-red-700">{errors[key]}</p>}
        </div>
      ))}
      <Button type="submit" disabled={sending} className="w-full sm:w-auto">
        {sending ? "Sending..." : "Start free trial"}
      </Button>
    </form>
  );
}
