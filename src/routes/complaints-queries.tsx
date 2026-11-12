import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ClipboardList,
  MessageCircleQuestion,
  Send,
} from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/Section";

type Entry = {
  id: string;
  type: "Complaint" | "Query";
  name: string;
  email: string;
  registerNumber: string;
  category: string;
  subject: string;
  description: string;
  status: "Submitted";
  createdAt: string;
};
const STORAGE_KEY = "ieee-student-branch-feedback-v1";

export const Route = createFileRoute("/complaints-queries")({
  head: () => ({
    meta: [
      { title: "Complaints & Queries | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content: "Submit a complaint or query to the IEEE Student Branch at SRM IST.",
      },
    ],
  }),
  component: ComplaintsQueriesPage,
});

function ComplaintsQueriesPage() {
  const [type, setType] = useState<"Complaint" | "Query">("Complaint");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [submittedId, setSubmittedId] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    registerNumber: "",
    category: "General",
    subject: "",
    description: "",
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setEntries(JSON.parse(saved) as Entry[]);
    } catch {
      /* Ignore malformed browser storage. */
    }
  }, []);

  const sortedEntries = useMemo(
    () => [...entries].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    [entries],
  );
  const update = (key: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const entry: Entry = {
      ...form,
      id: `IEEE-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
      type,
      status: "Submitted",
      createdAt: new Date().toISOString(),
    };
    const next = [entry, ...entries];
    setEntries(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* Storage may be disabled. */
    }
    setSubmittedId(entry.id);
    setForm({
      name: "",
      email: "",
      registerNumber: "",
      category: "General",
      subject: "",
      description: "",
    });
  }

  return (
    <>
      <PageHero
        title="Complaints & Queries"
        subtitle="Your feedback helps us make the IEEE Student Branch experience better. Share a concern or ask the committee a question."
      />
      <Section>
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => {
                setType("Complaint");
                setSubmittedId("");
              }}
              className={`rounded-lg border p-5 text-left transition hover:shadow-card ${type === "Complaint" ? "border-primary bg-secondary" : "border-border bg-background"}`}
            >
              <span className="mb-3 inline-flex rounded-md bg-primary/10 p-3 text-primary">
                <AlertCircle className="h-6 w-6" />
              </span>
              <span className="block text-lg font-bold text-primary">Raise a Complaint</span>
              <span className="mt-1 block text-sm text-muted-foreground">
                Report an issue, concern or difficulty related to branch activities.
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                setType("Query");
                setSubmittedId("");
              }}
              className={`rounded-lg border p-5 text-left transition hover:shadow-card ${type === "Query" ? "border-primary bg-secondary" : "border-border bg-background"}`}
            >
              <span className="mb-3 inline-flex rounded-md bg-primary/10 p-3 text-primary">
                <MessageCircleQuestion className="h-6 w-6" />
              </span>
              <span className="block text-lg font-bold text-primary">Ask a Query</span>
              <span className="mt-1 block text-sm text-muted-foreground">
                Get clarification about membership, events or IEEE activities.
              </span>
            </button>
          </div>

          {submittedId && (
            <div
              role="status"
              className="mb-6 flex items-start gap-3 rounded-lg border border-green-300 bg-green-50 p-4 text-green-900"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <p className="font-semibold">{type} saved successfully.</p>
                <p className="text-sm">
                  Your reference ID is <strong>{submittedId}</strong>. Keep it for your records.
                </p>
              </div>
            </div>
          )}

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.8fr)]">
            <div className="rounded-lg border border-border bg-background p-5 shadow-card sm:p-7">
              <SectionHeading
                eyebrow="Student support"
                title={`${type} Form`}
                description="Please provide accurate details so the committee can understand your submission."
              />
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" required>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Enter your name"
                    />
                  </Field>
                  <Field label="Email address" required>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      autoComplete="email"
                      className={inputClass}
                      placeholder="name@example.com"
                    />
                  </Field>
                  <Field label="Register number" required>
                    <input
                      required
                      value={form.registerNumber}
                      onChange={(e) => update("registerNumber", e.target.value)}
                      className={inputClass}
                      placeholder="Enter your register number"
                    />
                  </Field>
                  <Field label="Category">
                    <select
                      value={form.category}
                      onChange={(e) => update("category", e.target.value)}
                      className={inputClass}
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
                <Field label="Subject" required>
                  <input
                    required
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className={inputClass}
                    placeholder={`Brief subject of your ${type.toLowerCase()}`}
                    maxLength={120}
                  />
                </Field>
                <Field label="Description" required>
                  <textarea
                    required
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                    className={`${inputClass} min-h-36 resize-y`}
                    placeholder="Describe your complaint or query in detail..."
                    minLength={10}
                    maxLength={2000}
                  />
                </Field>
                <button
                  type="submit"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Send className="h-4 w-4" /> Submit {type}
                </button>
              </form>
            </div>

            <aside className="space-y-5">
              <div className="rounded-lg border border-border bg-secondary p-5">
                <h3 className="font-bold text-primary">How it works</h3>
                <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">01</span>
                    <span>Fill in your details and explain the issue clearly.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">02</span>
                    <span>Submit the form and note your reference ID.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">03</span>
                    <span>
                      The committee can follow up using the contact details provided once a shared
                      backend is connected.
                    </span>
                  </li>
                </ol>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <div className="flex items-center gap-2 text-primary">
                  <ClipboardList className="h-5 w-5" />
                  <h3 className="font-bold">Your submissions</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  This browser has {entries.length} saved{" "}
                  {entries.length === 1 ? "submission" : "submissions"}.
                </p>
                <button
                  type="button"
                  onClick={() => setShowHistory((v) => !v)}
                  className="mt-4 w-full rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-secondary"
                >
                  {showHistory ? "Hide history" : "View submission history"}
                </button>
              </div>
            </aside>
          </div>

          {showHistory && (
            <div className="mt-8 rounded-lg border border-border bg-background p-5">
              <h3 className="text-lg font-bold text-primary">Submission history</h3>
              {sortedEntries.length === 0 ? (
                <p className="mt-3 text-sm text-muted-foreground">
                  No submissions saved in this browser yet.
                </p>
              ) : (
                <div className="mt-4 space-y-3">
                  {sortedEntries.map((entry) => (
                    <article key={entry.id} className="rounded-md border border-border p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-semibold text-primary">
                          {entry.type}: {entry.subject}
                        </span>
                        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                          {entry.status}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {entry.id} · {new Date(entry.createdAt).toLocaleString()}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">{entry.description}</p>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}
          <p className="mt-6 text-xs text-muted-foreground">
            Privacy note: submissions are currently stored only in this browser using local storage.
            They are not automatically sent to the IEEE committee or shared across devices. Connect
            a secure backend before using this for official or sensitive complaints.
          </p>
        </div>
      </Section>
    </>
  );
}

const inputClass =
  "mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-semibold text-foreground">
      {label}
      {required && <span className="ml-1 text-destructive">*</span>}
      {children}
    </label>
  );
}
