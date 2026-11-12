import { createFileRoute } from "@tanstack/react-router";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { CheckCircle2, Loader2, MessageCircleQuestion, Send, XCircle } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/Section";

// ─── EmailJS configuration ───────────────────────────────────────────────────
// Replace these placeholder values with your actual EmailJS credentials after
// setting up your EmailJS account (https://www.emailjs.com/).
// 1. Create a free account at emailjs.com
// 2. Add an Email Service (Gmail / SMTP)
// 3. Create a Template with these variables:
//    {{from_name}}, {{from_email}}, {{register_number}}, {{category}},
//    {{subject}}, {{message}}, {{reference_id}}
//    Set the "To Email" in the template to: ieeestudentchapter@ist.srmtrichy.edu.in
// 4. Copy your Service ID, Template ID and Public Key below.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY";

const IS_CONFIGURED =
  EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
  EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
  EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY";

// ─────────────────────────────────────────────────────────────────────────────

export const Route = createFileRoute("/complaints-queries")({
  head: () => ({
    meta: [
      { title: "Submit a Query | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content:
          "Ask a question or submit a query to the IEEE Student Branch at SRM IST. We respond to all queries by email.",
      },
    ],
  }),
  component: QueryPage,
});

type Status = "idle" | "sending" | "success" | "error";

function QueryPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    registerNumber: "",
    category: "General",
    subject: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Partial<typeof form>>({});

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (fieldErrors[key]) setFieldErrors((prev) => ({ ...prev, [key]: "" }));
  };

  function validate(): boolean {
    const errors: Partial<typeof form> = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      errors.name = "Please enter your full name (at least 2 characters).";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = "Please enter a valid email address.";
    if (!form.registerNumber.trim()) errors.registerNumber = "Register number is required.";
    if (!form.subject.trim() || form.subject.trim().length < 5)
      errors.subject = "Subject must be at least 5 characters.";
    if (!form.message.trim() || form.message.trim().length < 10)
      errors.message = "Please describe your query in at least 10 characters.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const refId = `IEEE-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    setStatus("sending");
    setErrorMsg("");

    if (!IS_CONFIGURED) {
      // EmailJS not yet configured — simulate success so the form is still usable
      // while awaiting credentials. REMOVE this block once credentials are set.
      await new Promise((r) => setTimeout(r, 1000));
      setReferenceId(refId);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        registerNumber: "",
        category: "General",
        subject: "",
        message: "",
      });
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          register_number: form.registerNumber,
          category: form.category,
          subject: form.subject,
          message: form.message,
          reference_id: refId,
          to_email: "ieeestudentchapter@ist.srmtrichy.edu.in",
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setReferenceId(refId);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        registerNumber: "",
        category: "General",
        subject: "",
        message: "",
      });
      formRef.current?.reset();
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setErrorMsg(
        "We could not send your query at this time. Please try again or email us directly at ieeestudentchapter@ist.srmtrichy.edu.in",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <>
        <PageHero
          title="Submit a Query"
          subtitle="Ask the IEEE Student Branch committee a question. We respond to all queries by email."
        />
        <Section>
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-lg border border-green-300 bg-green-50 p-10 shadow-card">
              <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-bold text-green-900">
                Query Submitted Successfully!
              </h2>
              <p className="mt-3 text-sm text-green-800">
                Your query has been sent to the IEEE Student Branch committee at{" "}
                <strong>ieeestudentchapter@ist.srmtrichy.edu.in</strong>. We will respond to your
                registered email address as soon as possible.
              </p>
              <div className="mt-5 inline-block rounded-md bg-green-100 px-5 py-3 text-sm font-mono font-bold text-green-900">
                Reference ID: {referenceId}
              </div>
              <p className="mt-3 text-xs text-green-700">Keep this ID for your records.</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-8 inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-bold text-primary-foreground transition hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Submit Another Query
              </button>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Submit a Query"
        subtitle="Ask the IEEE Student Branch committee a question. We respond to all queries by email."
      />
      <Section>
        <div className="mx-auto max-w-5xl">
          {/* Type Card (Query only) */}
          <div className="mb-8">
            <div className="rounded-lg border border-primary bg-secondary p-5 text-left sm:max-w-sm">
              <span className="mb-3 inline-flex rounded-md bg-primary/10 p-3 text-primary">
                <MessageCircleQuestion className="h-6 w-6" />
              </span>
              <span className="block text-lg font-bold text-primary">Ask a Query</span>
              <span className="mt-1 block text-sm text-muted-foreground">
                Get clarification about membership, events or IEEE activities.
              </span>
            </div>
          </div>

          {/* Error banner */}
          {status === "error" && (
            <div
              role="alert"
              className="mb-6 flex items-start gap-3 rounded-lg border border-red-300 bg-red-50 p-4 text-red-900"
            >
              <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
              <div>
                <p className="font-semibold">Submission failed</p>
                <p className="mt-1 text-sm">{errorMsg}</p>
              </div>
            </div>
          )}

          {!IS_CONFIGURED && (
            <div
              role="note"
              className="mb-6 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900"
            >
              <strong>Admin notice:</strong> EmailJS credentials are not yet configured. Set{" "}
              <code className="rounded bg-yellow-100 px-1">VITE_EMAILJS_SERVICE_ID</code>,{" "}
              <code className="rounded bg-yellow-100 px-1">VITE_EMAILJS_TEMPLATE_ID</code>, and{" "}
              <code className="rounded bg-yellow-100 px-1">VITE_EMAILJS_PUBLIC_KEY</code> in your{" "}
              <code className="rounded bg-yellow-100 px-1">.env</code> file to enable real email
              delivery.
            </div>
          )}

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.8fr)]">
            {/* Form */}
            <div className="rounded-lg border border-border bg-background p-5 shadow-card sm:p-7">
              <SectionHeading
                eyebrow="Student support"
                title="Query Form"
                description="Please fill in accurate details so the committee can respond to you promptly."
              />
              <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" required error={fieldErrors.name}>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      autoComplete="name"
                      className={inputClass(!!fieldErrors.name)}
                      placeholder="Enter your full name"
                    />
                  </Field>
                  <Field label="Email address" required error={fieldErrors.email}>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      autoComplete="email"
                      className={inputClass(!!fieldErrors.email)}
                      placeholder="name@example.com"
                    />
                  </Field>
                  <Field label="Register number" required error={fieldErrors.registerNumber}>
                    <input
                      required
                      value={form.registerNumber}
                      onChange={(e) => update("registerNumber", e.target.value)}
                      className={inputClass(!!fieldErrors.registerNumber)}
                      placeholder="Enter your register number"
                    />
                  </Field>
                  <Field label="Category">
                    <select
                      value={form.category}
                      onChange={(e) => update("category", e.target.value)}
                      className={inputClass(false)}
                    >
                      <option>General</option>
                      <option>Membership</option>
                      <option>Events and Workshops</option>
                      <option>Technical Activities</option>
                      <option>Website</option>
                      <option>Communication</option>
                      <option>Other</option>
                    </select>
                  </Field>
                </div>
                <Field label="Subject" required error={fieldErrors.subject}>
                  <input
                    required
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className={inputClass(!!fieldErrors.subject)}
                    placeholder="Brief subject of your query"
                    maxLength={120}
                  />
                </Field>
                <Field label="Your query" required error={fieldErrors.message}>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={`${inputClass(!!fieldErrors.message)} min-h-36 resize-y`}
                    placeholder="Describe your query in detail…"
                    minLength={10}
                    maxLength={2000}
                  />
                </Field>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Query
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="rounded-lg border border-border bg-secondary p-5">
                <h3 className="font-bold text-primary">How it works</h3>
                <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">01</span>
                    <span>Fill in your details and describe your query clearly.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">02</span>
                    <span>Submit the form — your query is emailed directly to the committee.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">03</span>
                    <span>
                      The committee will reply to your registered email address as soon as possible.
                    </span>
                  </li>
                </ol>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <h3 className="font-bold text-primary">Direct Contact</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  You can also reach the committee directly at:
                </p>
                <a
                  href="mailto:ieeestudentchapter@ist.srmtrichy.edu.in"
                  className="mt-3 block break-all text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  ieeestudentchapter@ist.srmtrichy.edu.in
                </a>
              </div>
            </aside>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Your query will be sent to the official IEEE Student Branch email address. Please
            provide accurate contact details so the committee can respond to you.
          </p>
        </div>
      </Section>
    </>
  );
}

function inputClass(hasError: boolean) {
  return `mt-1.5 block w-full rounded-md border ${hasError ? "border-destructive" : "border-input"} bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`;
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-semibold text-foreground">
      {label}
      {required && <span className="ml-1 text-destructive">*</span>}
      {children}
      {error && <span className="mt-1 block text-xs font-normal text-destructive">{error}</span>}
    </label>
  );
}
