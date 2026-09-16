"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getBookingService, type BookingField } from "@/lib/booking";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const labelClass =
  "brygada mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#6B4841]/80";

const inputClass =
  "w-full border border-[#6B4841]/20 bg-[#FFFBF5] px-4 py-3 text-[length:var(--text-body)] text-[#6B4841] placeholder:text-[#6B4841]/35 transition-colors focus:border-[#C483C8] focus:outline-none focus:ring-2 focus:ring-[#C483C8]/30";

const primaryButton = `brygada inline-flex h-12 items-center justify-center bg-[#6B4841] px-8 text-[0.85rem] font-bold uppercase tracking-[0.18em] text-[#F7EAD8] transition-colors duration-300 hover:bg-[#1E0F0B] disabled:cursor-wait disabled:opacity-70 ${focusRing}`;

type Status = "idle" | "sending" | "success" | "error";

/* Button that opens a booking form popup for one service.
   The popup can also be opened directly with a link to /services#book-<service key>. */
export default function BookingButton({ serviceKey, className }: { serviceKey: string; className: string }) {
  const service = getBookingService(serviceKey);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [today, setToday] = useState<string>();

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    const now = new Date();
    setToday(new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10));
    dialog.showModal();
    document.body.style.overflow = "hidden";
  };

  const close = () => dialogRef.current?.close();

  // Open from a shared link like /services#book-weddings
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === `#book-${serviceKey}`) open();
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, [serviceKey]);

  if (!service) return null;

  const handleClosed = () => {
    document.body.style.overflow = "";
    if (window.location.hash === `#book-${serviceKey}`) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    if (status === "success") {
      formRef.current?.reset();
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values: Record<string, string | string[]> = {};
    for (const field of service.fields) {
      values[field.name] = field.type === "checkboxes" ? data.getAll(field.name).map(String) : String(data.get(field.name) ?? "");
    }

    setStatus("sending");
    setErrorMessage("");
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service: service.key, values, website: data.get("website") }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setSubmittedName(String(values.name).split(" ")[0]);
      setStatus("success");
      dialogRef.current?.scrollTo({ top: 0 });
    } catch {
      setStatus("error");
      setErrorMessage("Sorry, your enquiry couldn't be sent. Please try again in a moment.");
    }
  };

  const renderField = (field: BookingField) => {
    const id = `${service.key}-${field.name}`;
    const required = field.required ? <span className="text-[#C483C8]"> *</span> : null;

    if (field.type === "checkboxes") {
      return (
        <fieldset>
          <legend className={labelClass}>
            {field.label}
            {required}
          </legend>
          <div className="flex flex-wrap gap-3">
            {field.options?.map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-3 border border-[#6B4841]/20 bg-[#FFFBF5] px-4 py-3 text-[length:var(--text-body)] text-[#6B4841] transition-colors has-[:checked]:border-[#6B4841] has-[:checked]:bg-[#6B4841]/[0.06]"
              >
                <input type="checkbox" name={field.name} value={option} className="h-4 w-4 accent-[#6B4841]" />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      );
    }

    return (
      <>
        <label htmlFor={id} className={labelClass}>
          {field.label}
          {required}
        </label>
        {field.type === "textarea" ? (
          <textarea id={id} name={field.name} rows={4} placeholder={field.placeholder} className={`${inputClass} resize-y`} />
        ) : field.type === "select" ? (
          <select id={id} name={field.name} required={field.required} defaultValue="" className={`${inputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none' stroke='%236B4841' stroke-width='1.5'%3E%3Cpath d='M1 1l5 5 5-5'/%3E%3C/svg%3E")] bg-[position:right_1rem_center] bg-no-repeat pr-10`}>
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
            min={field.type === "date" ? today : undefined}
            autoComplete={field.name === "name" ? "name" : field.name === "email" ? "email" : field.name === "phone" ? "tel" : undefined}
            className={inputClass}
          />
        )}
      </>
    );
  };

  return (
    <>
      <button type="button" onClick={open} className={className}>
        Book {service.title}
      </button>

      <dialog
        ref={dialogRef}
        onClose={handleClosed}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        aria-labelledby={`${service.key}-booking-title`}
        className="m-0 h-full max-h-none w-full max-w-none overflow-y-auto bg-[#F7EAD8] p-0 text-[#6B4841] backdrop:bg-[#1E0F0B]/75 backdrop:backdrop-blur-sm md:m-auto md:h-auto md:max-h-[92vh] md:w-[min(56rem,92vw)] md:shadow-[0_30px_80px_-20px_rgba(30,15,11,0.6)]"
      >
        {/* Close */}
        <button
          type="button"
          onClick={close}
          aria-label="Close booking form"
          className={`sticky top-0 z-10 ml-auto flex h-12 w-12 items-center justify-center bg-[#F7EAD8] text-[#6B4841] transition-colors hover:text-[#1E0F0B] ${focusRing}`}
        >
          <span aria-hidden className="absolute h-[1.5px] w-6 rotate-45 bg-current" />
          <span aria-hidden className="absolute h-[1.5px] w-6 -rotate-45 bg-current" />
        </button>

        <div className="-mt-12 px-[max(1.25rem,4vw)] pb-10 pt-10 md:px-12 md:pb-12">
          {/* Heading */}
          <div className="flex items-center gap-5 border-b border-[#6B4841]/15 pb-6 pr-10">
            <div className="relative aspect-[3/4] w-16 shrink-0 overflow-hidden shadow-[0_8px_20px_-12px_rgba(30,15,11,0.4)] sm:w-20">
              <Image src={service.image} alt="" fill sizes="80px" className="object-cover" />
            </div>
            <div>
              <p className="brygada text-[length:var(--text-eyebrow)] font-bold uppercase tracking-[0.35em] text-[#D49C84]">
                Book Your Event
              </p>
              <h2
                id={`${service.key}-booking-title`}
                className="rye mt-1 uppercase leading-tight tracking-wide"
                style={{ fontSize: "var(--text-h3)" }}
              >
                {service.title}
              </h2>
              <p className="mt-1 text-[length:var(--text-body)] leading-relaxed text-[#6B4841]/75">{service.intro}</p>
            </div>
          </div>

          {status === "success" ? (
            <div className="py-12 text-center" role="status">
              <p className="rye uppercase tracking-wide" style={{ fontSize: "var(--text-h3)" }}>
                Thank you{submittedName ? `, ${submittedName}` : ""}!
              </p>
              <p className="mx-auto mt-3 max-w-md text-[length:var(--text-body)] leading-relaxed text-[#6B4841]/80">
                Your {service.title.toLowerCase()} enquiry has been sent. We&apos;ll get back to you within 24 hours.
              </p>
              <button type="button" onClick={close} className={`${primaryButton} mt-8`}>
                Close
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="pt-6">
              <p className="mb-6 text-[0.85rem] text-[#6B4841]/65">
                Fields marked <span className="text-[#C483C8]">*</span> are required.
              </p>

              <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
                {service.fields.map((field) => (
                  <div key={field.name} className={field.wide || field.type === "textarea" ? "md:col-span-2" : ""}>
                    {renderField(field)}
                  </div>
                ))}
              </div>

              {/* Honeypot for spam bots, hidden from people and screen readers */}
              <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
                <label>
                  Website
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              {status === "error" && (
                <p role="alert" className="mt-6 border border-[#B5483B]/30 bg-[#B5483B]/10 px-4 py-3 text-[0.95rem] text-[#8A2E24]">
                  {errorMessage}
                </p>
              )}

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={close}
                  className={`brygada h-12 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-[#6B4841]/70 transition-colors hover:text-[#6B4841] ${focusRing}`}
                >
                  Cancel
                </button>
                <button type="submit" disabled={status === "sending"} className={primaryButton}>
                  {status === "sending" ? "Sending..." : "Send Enquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
