"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { profile } from "../../content/profile";
import { isPlausibleEmail, sanitizeText } from "@/lib/sanitize";

const LIMITS = { name: 120, email: 254, message: 4000 };

export function ContactForm() {
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = sanitizeText(String(form.get("name") ?? ""), LIMITS.name);
    const email = sanitizeText(String(form.get("email") ?? ""), LIMITS.email);
    const message = sanitizeText(String(form.get("message") ?? ""), LIMITS.message);

    if (!name || !email || !message) {
      setError("Name, email, and message are required.");
      setReady(false);
      return;
    }
    if (!isPlausibleEmail(email)) {
      setError("Enter an email address so a reply has somewhere to go.");
      setReady(false);
      return;
    }

    const subject = encodeURIComponent(`Architecture conversation from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    track("contact_cta");
    setError(null);
    setReady(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-5" noValidate>
      <p className="text-sm leading-relaxed text-slate">
        This opens your email program to {profile.email}. Nothing is stored on a server. Line breaks and control characters are removed before the message is attached.
      </p>
      <div>
        <label htmlFor="name" className="text-xs uppercase tracking-[0.14em] text-slate">
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          maxLength={LIMITS.name}
          className="mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-ink outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-xs uppercase tracking-[0.14em] text-slate">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={LIMITS.email}
          className="mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-ink outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-[0.14em] text-slate">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          maxLength={LIMITS.message}
          className="mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-ink outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />
      </div>
      {error ? (
        <p role="alert" className="text-sm text-accent">
          {error}
        </p>
      ) : null}
      {ready ? (
        <p role="status" className="text-sm text-slate">
          Your email program should open with this note. If it does not, write to {profile.email}.
        </p>
      ) : null}
      <button type="submit" className="h-11 bg-accent px-5 text-sm text-accent-ink">
        Send via email
      </button>
    </form>
  );
}
