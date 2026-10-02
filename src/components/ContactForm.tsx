import { useState } from "react";

const FIELD =
  "h-11 w-full rounded-sm border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="rounded-md border border-border bg-card p-6 shadow-[var(--shadow-card)]"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        (e.currentTarget as HTMLFormElement).reset();
      }}
    >
      <h3 className="text-lg font-bold text-primary">Send us a message</h3>
      <span className="mt-2 block h-1 w-12 bg-accent" aria-hidden="true" />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-foreground">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className={FIELD} placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={FIELD} placeholder="you@srmist.edu.in" />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-foreground">
          Subject
        </label>
        <input id="subject" name="subject" required className={FIELD} placeholder="How can we help?" />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-sm border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          placeholder="Write your message…"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 items-center rounded-sm bg-primary px-6 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        Send Message
      </button>

      <p role="status" aria-live="polite" className="mt-4 text-sm text-muted-foreground">
        {sent ? "Thank you — your message has been recorded and the branch will reply by email." : ""}
      </p>
    </form>
  );
}
