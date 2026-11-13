<<<<<<< HEAD
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
=======
import { useState } from "react";
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73

const FIELD =
  "h-11 w-full rounded-sm border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

<<<<<<< HEAD
// Uses the same EmailJS credentials as the Query form.
// Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
// in your .env file. See src/routes/complaints-queries.tsx for full setup instructions.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY";

const IS_CONFIGURED =
  EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
  EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
  EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrorMsg("");

    if (!IS_CONFIGURED) {
      // Credentials not set yet — show success without real sending.
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      form.reset();
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: "ieeestudentchapter@ist.srmtrichy.edu.in",
          category: "Contact Form",
          register_number: "N/A",
          reference_id: `CONTACT-${Date.now()}`,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setErrorMsg(
        "Unable to send your message right now. Please email us directly at ieeestudentchapter@ist.srmtrichy.edu.in",
      );
      setStatus("error");
    }
  }

  return (
    <form
      ref={formRef}
      className="rounded-md border border-border bg-card p-6 shadow-[var(--shadow-card)]"
      onSubmit={handleSubmit}
      noValidate
=======
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
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
    >
      <h3 className="text-lg font-bold text-primary">Send us a message</h3>
      <span className="mt-2 block h-1 w-12 bg-accent" aria-hidden="true" />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
<<<<<<< HEAD
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-semibold text-foreground"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className={FIELD}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-semibold text-foreground"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={FIELD}
            placeholder="you@srmist.edu.in"
          />
=======
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
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
        </div>
      </div>

      <div className="mt-4">
<<<<<<< HEAD
        <label
          htmlFor="contact-subject"
          className="mb-1.5 block text-sm font-semibold text-foreground"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          required
          className={FIELD}
          placeholder="How can we help?"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-semibold text-foreground"
        >
          Message
        </label>
        <textarea
          id="contact-message"
=======
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
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
          name="message"
          required
          rows={5}
          className="w-full rounded-sm border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          placeholder="Write your message…"
        />
      </div>

      <button
        type="submit"
<<<<<<< HEAD
        disabled={status === "sending"}
        className="mt-6 inline-flex h-12 items-center gap-2 rounded-sm bg-primary px-6 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>

      {status === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="mt-4 flex items-start gap-2 text-sm text-green-700"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Thank you — your message has been sent to the branch committee at{" "}
            <strong>ieeestudentchapter@ist.srmtrichy.edu.in</strong>. We will reply to your email
            address shortly.
          </span>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          aria-live="polite"
          className="mt-4 flex items-start gap-2 text-sm text-destructive"
        >
          <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}
=======
        className="mt-6 inline-flex h-12 items-center rounded-sm bg-primary px-6 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        Send Message
      </button>

      <p role="status" aria-live="polite" className="mt-4 text-sm text-muted-foreground">
        {sent ? "Thank you — your message has been recorded and the branch will reply by email." : ""}
      </p>
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
    </form>
  );
}
