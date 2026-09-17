"use client";

import { useState } from "react";
import { contactService } from "@/lib/booking";

const labelClass =
  "block brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.3em] uppercase text-[#6B4841]/60 mb-2";

const inputClass =
  "w-full bg-transparent border-b border-[#6B4841]/20 py-3 text-[#6B4841] placeholder:text-[#6B4841]/30 focus:outline-none focus:border-[#C483C8] transition-colors text-[length:var(--text-body)]";

type Status = "idle" | "sending" | "success" | "error";

/* Contact page enquiry form. Sends through /api/booking to the business inbox. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(contactService.fields.map((field) => [field.name, String(data.get(field.name) ?? "")]));

    setStatus("sending");
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service: contactService.key, values, website: data.get("website") }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setFirstName(values.name.split(" ")[0]);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="border border-[#6B4841]/15 bg-[#EDE0CC]/45 px-6 py-10 text-center">
        <p className="rye uppercase tracking-wide text-[#6B4841]" style={{ fontSize: "var(--text-h3)" }}>
          Thank you{firstName ? `, ${firstName}` : ""}!
        </p>
        <p className="mx-auto mt-3 max-w-sm text-[length:var(--text-body)] leading-relaxed text-[#6B4841]/80">
          Your message has been sent. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="brygada mt-6 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-[#6B4841] underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {contactService.fields.map((field) => {
        const id = `contact-${field.name}`;
        return (
          <div key={field.name}>
            <label htmlFor={id} className={labelClass}>
              {field.label}
              {field.required && <span className="text-[#C483C8]"> *</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={id}
                name={field.name}
                rows={5}
                required={field.required}
                placeholder={field.placeholder}
                className={`${inputClass} resize-none leading-relaxed`}
              />
            ) : field.type === "select" ? (
              <select id={id} name={field.name} defaultValue="" className={`${inputClass} appearance-none`}>
                <option value="" disabled>
                  Select an option
                </option>
                {field.options?.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                autoComplete={field.name === "name" ? "name" : field.name === "email" ? "email" : "tel"}
                className={inputClass}
              />
            )}
          </div>
        );
      })}

      {/* Honeypot for spam bots */}
      <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="border border-[#B5483B]/30 bg-[#B5483B]/10 px-4 py-3 text-[0.95rem] text-[#8A2E24]">
          Sorry, your message couldn&apos;t be sent. Please try again in a moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="brygada inline-flex h-12 items-center justify-center bg-[#6B4841] px-8 text-[0.85rem] font-bold uppercase tracking-[0.18em] text-[#F7EAD8] transition-colors duration-300 hover:bg-[#1E0F0B] disabled:cursor-wait disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]"
      >
        {status === "sending" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
