import { createFileRoute, Link } from "@tanstack/react-router";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Loader2,
  MapPin,
  Send,
  ShieldCheck,
  User,
  XCircle,
  AlertCircle,
  Sparkles,
  RotateCcw,
  BadgeCheck,
  AlertTriangle,
  Info,
} from "lucide-react";
import { PageHero } from "@/components/Section";
import {
  verifyIeeeMembership,
  type MembershipVerificationResult,
} from "@/lib/membership-verifier";

// ─── EmailJS Configuration ──────────────────────────────────────────────────
// Uses existing configuration from environment variables
const EMAILJS_SERVICE_ID =
  (import.meta.env["VITE_EMAILJS_SERVICE_ID"] as string | undefined) ?? "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID =
  (import.meta.env["VITE_EMAILJS_TEMPLATE_ID"] as string | undefined) ?? "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY =
  (import.meta.env["VITE_EMAILJS_PUBLIC_KEY"] as string | undefined) ?? "YOUR_PUBLIC_KEY";

const IS_CONFIGURED =
  EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
  EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
  EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY";

export const Route = createFileRoute("/event-proposal")({
  head: () => ({
    meta: [
      { title: "Propose an Event | IEEE Student Branch, SRM IST" },
      {
        name: "description",
        content:
          "Have an innovative idea? Submit your proposal to the IEEE Student Branch committee for review. Exclusively for registered IEEE Student Branch members.",
      },
      { property: "og:title", content: "Propose an Event — IEEE Student Branch" },
      {
        property: "og:description",
        content:
          "Have an innovative idea? Submit your proposal to the IEEE Student Branch committee for review.",
      },
      { property: "og:url", content: "/event-proposal" },
    ],
    links: [{ rel: "canonical", href: "/event-proposal" }],
  }),
  component: EventProposalPage,
});

type Status = "idle" | "submitting" | "success" | "error";

export type MembershipGrade =
  | "Student Member"
  | "Graduate Student Member"
  | "Professional Member"
  | "Other";

export type BranchPosition =
  | "Chairperson"
  | "Vice Chairperson"
  | "Secretary"
  | "Treasurer"
  | "Technical Coordinator"
  | "Event Coordinator"
  | "Core Committee Member"
  | "Other";

export type EventCategory =
  | "Workshop"
  | "Hackathon"
  | "Seminar"
  | "Webinar"
  | "Technical Talk"
  | "Competition"
  | "Other";

export type EventMode = "Offline" | "Online" | "Hybrid";

interface ProposalFormData {
  // Section 1: IEEE Membership Verification
  fullName: string;
  membershipId: string;
  membershipEmail: string;
  membershipGrade: MembershipGrade;
  branchPosition: BranchPosition;
  registerNumber: string;
  membershipConfirmed: boolean;

  // Section 2: Event Information
  eventTitle: string;
  category: EventCategory;
  proposedDate: string;
  startTime: string;
  endTime: string;
  venue: string;
  eventMode: EventMode;
  expectedParticipants: string;
  targetAudience: string;

  // Section 3: Proposal Description
  description: string;
  objectives: string;
  agenda: string;
  technicalRequirements: string;
  resourcesRequired: string;
  estimatedBudget: string;
  expectedOutcomes: string;

  // Final Confirmation
  confirmedCoreMember: boolean;
}

const INITIAL_FORM: ProposalFormData = {
  fullName: "",
  membershipId: "",
  membershipEmail: "",
  membershipGrade: "Student Member",
  branchPosition: "Core Committee Member",
  registerNumber: "",
  membershipConfirmed: false,

  eventTitle: "",
  category: "Workshop",
  proposedDate: "",
  startTime: "",
  endTime: "",
  venue: "",
  eventMode: "Offline",
  expectedParticipants: "",
  targetAudience: "",

  description: "",
  objectives: "",
  agenda: "",
  technicalRequirements: "",
  resourcesRequired: "",
  estimatedBudget: "",
  expectedOutcomes: "",

  confirmedCoreMember: false,
};

const MEMBERSHIP_GRADES: MembershipGrade[] = [
  "Student Member",
  "Graduate Student Member",
  "Professional Member",
  "Other",
];

const BRANCH_POSITIONS: BranchPosition[] = [
  "Chairperson",
  "Vice Chairperson",
  "Secretary",
  "Treasurer",
  "Technical Coordinator",
  "Event Coordinator",
  "Core Committee Member",
  "Other",
];

const CATEGORIES: EventCategory[] = [
  "Workshop",
  "Hackathon",
  "Seminar",
  "Webinar",
  "Technical Talk",
  "Competition",
  "Other",
];

const EVENT_MODES: EventMode[] = ["Offline", "Online", "Hybrid"];

function EventProposalPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [verificationResult, setVerificationResult] = useState<MembershipVerificationResult | null>(
    null,
  );
  const [verifyingMembership, setVerifyingMembership] = useState(false);

  const [submittedSnapshot, setSubmittedSnapshot] = useState<{
    title: string;
    proposer: string;
    membershipId: string;
    membershipGrade: string;
    position: string;
    date: string;
    category: string;
    verificationStatus: string;
  } | null>(null);

  const [form, setForm] = useState<ProposalFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = <K extends keyof ProposalFormData>(key: K, value: ProposalFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  // Perform server-side membership check
  async function performVerificationCheck(): Promise<MembershipVerificationResult> {
    setVerifyingMembership(true);
    try {
      const result = await verifyIeeeMembership({
        data: {
          membershipId: form.membershipId,
          email: form.membershipEmail,
        },
      });
      setVerificationResult(result);
      return result;
    } catch (err) {
      console.error("Server verification check error:", err);
      const fallbackResult: MembershipVerificationResult = {
        verified: false,
        status: "pending_roster_check",
        message:
          "Unable to reach server verification service. Proposal will be processed under 'Pending Committee Verification' workflow.",
      };
      setVerificationResult(fallbackResult);
      return fallbackResult;
    } finally {
      setVerifyingMembership(false);
    }
  }

  function validate(): boolean {
    const errs: Record<string, string> = {};

    // ── Section 1: IEEE Membership Identification ──
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      errs["fullName"] = "Full name is required (at least 2 characters).";
    }
    if (!form.membershipId.trim()) {
      errs["membershipId"] = "IEEE Membership ID is required.";
    } else if (!/^\d{5,10}$/.test(form.membershipId.trim())) {
      errs["membershipId"] =
        "IEEE Membership ID must be a valid numeric membership number (typically 7–9 digits).";
    }

    if (!form.membershipEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.membershipEmail)) {
      errs["membershipEmail"] = "Please enter a valid registered IEEE membership email address.";
    }
    if (!form.membershipGrade) {
      errs["membershipGrade"] = "Please select your IEEE membership grade.";
    }
    if (!form.branchPosition) {
      errs["branchPosition"] = "Please select your IEEE Student Branch position.";
    }
    if (!form.registerNumber.trim()) {
      errs["registerNumber"] = "SRM register number is required.";
    }
    if (!form.membershipConfirmed) {
      errs["membershipConfirmed"] =
        "You must confirm that you are a registered IEEE member and that details provided are accurate.";
    }

    // ── Section 2: Event Information ──
    if (!form.eventTitle.trim() || form.eventTitle.trim().length < 3) {
      errs["eventTitle"] = "Event title is required (at least 3 characters).";
    }
    if (!form.category) {
      errs["category"] = "Please select an event category.";
    }
    if (!form.proposedDate.trim()) {
      errs["proposedDate"] = "Proposed event date is required.";
    }
    if (!form.startTime.trim()) {
      errs["startTime"] = "Start time is required.";
    }
    if (!form.endTime.trim()) {
      errs["endTime"] = "End time is required.";
    }
    if (!form.venue.trim()) {
      errs["venue"] = "Event venue or platform link is required.";
    }
    if (!form.eventMode) {
      errs["eventMode"] = "Please select an event mode (Offline / Online / Hybrid).";
    }
    if (!form.expectedParticipants.trim()) {
      errs["expectedParticipants"] = "Expected number of participants is required.";
    }
    if (!form.targetAudience.trim()) {
      errs["targetAudience"] = "Target audience is required (e.g. All B.Tech, CSE/ECE students).";
    }

    // ── Section 3: Proposal Description ──
    if (!form.description.trim() || form.description.trim().length < 15) {
      errs["description"] = "Please provide an event description (at least 15 characters).";
    }
    if (!form.objectives.trim() || form.objectives.trim().length < 10) {
      errs["objectives"] = "Please state the objectives of the event (at least 10 characters).";
    }
    if (!form.agenda.trim() || form.agenda.trim().length < 10) {
      errs["agenda"] = "Please provide proposed activities or agenda (at least 10 characters).";
    }
    if (!form.technicalRequirements.trim()) {
      errs["technicalRequirements"] =
        "Technical requirements are required (enter 'None' if not applicable).";
    }
    if (!form.resourcesRequired.trim()) {
      errs["resourcesRequired"] =
        "Resources required are required (enter 'None' if not applicable).";
    }
    if (!form.estimatedBudget.trim()) {
      errs["estimatedBudget"] =
        "Estimated budget is required (e.g. '₹5,000' or 'Nil' if zero-budget).";
    }
    if (!form.expectedOutcomes.trim() || form.expectedOutcomes.trim().length < 10) {
      errs["expectedOutcomes"] = "Expected outcomes are required (at least 10 characters).";
    }

    // Final confirmation
    if (!form.confirmedCoreMember) {
      errs["confirmedCoreMember"] =
        "You must confirm that you are submitting this proposal as an IEEE Student Branch Core Committee member.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    if (!validate()) {
      window.scrollTo({ top: 350, behavior: "smooth" });
      return;
    }

    setStatus("submitting");

    // Perform server-side verification check
    const verification = await performVerificationCheck();

    // If an approved database is configured and the member was explicitly NOT found, block submission
    if (verification.status === "not_found") {
      setErrorMsg(
        "Membership Verification Failed: The provided IEEE Membership ID and email were not found in the authorised IEEE Student Branch committee records. Only authorised branch members may submit event proposals. Please check your details or contact the executive committee.",
      );
      setStatus("error");
      return;
    }

    if (verification.status === "invalid_format") {
      setErrorMsg(verification.message);
      setStatus("error");
      return;
    }

    // Unique Proposal Reference ID
    const refId = `PROP-${new Date().getFullYear()}-${Math.random()
      .toString(36)
      .slice(2, 8)
      .toUpperCase()}`;

    if (!IS_CONFIGURED) {
      setErrorMsg(
        "Email delivery service is currently not configured on the server. Please contact the branch administrator at ieeestudentchapter@ist.srmtrichy.edu.in.",
      );
      setStatus("error");
      return;
    }

    const verificationBadgeText =
      verification.status === "verified"
        ? "AUTHENTICATED (Server Roster Verified)"
        : "PENDING VERIFICATION (Awaiting Committee Manual vTools Verification)";

    const structuredMessage = `
EVENT PROPOSAL SUBMISSION (GOOGLE FORMS STYLE)
============================================================
Proposal Reference ID: ${refId}
Submitted Timestamp: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}

[SECTION 1: IEEE MEMBERSHIP IDENTIFICATION]
------------------------------------------------------------
1. Full Name: ${form.fullName}
2. IEEE Membership ID: ${form.membershipId}
3. Registered IEEE Email: ${form.membershipEmail}
4. IEEE Membership Grade: ${form.membershipGrade}
5. Student Branch Position: ${form.branchPosition}
6. SRM Register Number: ${form.registerNumber}
7. Membership Declaration: Confirmed by Proposer
* Verification Status: ${verificationBadgeText}
* Verification Detail: ${verification.message}

[SECTION 2: EVENT INFORMATION]
------------------------------------------------------------
8. Event Title: ${form.eventTitle}
9. Event Category: ${form.category}
10. Event Mode: ${form.eventMode}
11. Proposed Date: ${form.proposedDate}
12. Timing: ${form.startTime} to ${form.endTime}
13. Venue / Platform: ${form.venue}
14. Expected Participants: ${form.expectedParticipants}
15. Target Audience: ${form.targetAudience}

[SECTION 3: PROPOSAL DESCRIPTION & LOGISTICS]
------------------------------------------------------------
16. Event Description:
${form.description}

17. Objectives of the Event:
${form.objectives}

18. Proposed Activities / Agenda:
${form.agenda}

19. Technical Requirements:
${form.technicalRequirements}

20. Resources Required:
${form.resourcesRequired}

21. Estimated Budget:
${form.estimatedBudget}

22. Expected Outcomes:
${form.expectedOutcomes}

[CORE COMMITTEE DECLARATION]
------------------------------------------------------------
Core Committee Submitter Confirmation: Yes (Confirmed)
============================================================
Sent via IEEE Student Branch Event Proposal Portal
(SRM Institute of Science and Technology, Tiruchirappalli)
`.trim();

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.fullName,
          from_email: form.membershipEmail,
          register_number: form.registerNumber,
          category: "Event Proposal",
          subject: `[Event Proposal] ${form.eventTitle}`,
          message: structuredMessage,
          reference_id: refId,
          to_email: "ieeestudentchapter@ist.srmtrichy.edu.in",
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      setReferenceId(refId);
      setSubmittedSnapshot({
        title: form.eventTitle,
        proposer: form.fullName,
        membershipId: form.membershipId,
        membershipGrade: form.membershipGrade,
        position: form.branchPosition,
        date: form.proposedDate,
        category: form.category,
        verificationStatus:
          verification.status === "verified"
            ? "Verified against Roster"
            : "Pending Committee Verification",
      });
      setStatus("success");
      setForm(INITIAL_FORM);
      formRef.current?.reset();
      window.scrollTo({ top: 120, behavior: "smooth" });
    } catch (err: unknown) {
      console.error("EmailJS Event Proposal Error:", err);
      setErrorMsg(
        "Unable to send your event proposal at this moment. Please check your internet connection or try again. All entered form data has been preserved.",
      );
      setStatus("error");
    }
  }

  // ── SUCCESS CONFIRMATION VIEW ──────────────────────────────────────────────
  if (status === "success") {
    const isPending = submittedSnapshot?.verificationStatus !== "Verified against Roster";

    return (
      <div className="min-h-screen bg-[#f0f4f9] py-8 sm:py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-2xl">
          {/* Top Google Forms Style Accent Card */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="h-2.5 bg-primary" aria-hidden="true" />
            <div className="p-6 sm:p-10 text-center">
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
                  isPending ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"
                }`}
                aria-hidden="true"
              >
                {isPending ? (
                  <AlertTriangle className="h-9 w-9" />
                ) : (
                  <CheckCircle2 className="h-9 w-9" />
                )}
              </div>

              <span
                className={`mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                  isPending
                    ? "bg-amber-100 text-amber-800 border border-amber-300"
                    : "bg-green-100 text-green-800 border border-green-300"
                }`}
              >
                {isPending ? (
                  <>
                    <Clock className="h-3.5 w-3.5" />
                    Pending Committee Verification
                  </>
                ) : (
                  <>
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Verified Submission
                  </>
                )}
              </span>

              <h1 className="mt-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                Event Proposal Recorded
              </h1>

              <p className="mt-2 text-sm text-muted-foreground sm:text-base leading-relaxed">
                Thank you, <strong>{submittedSnapshot?.proposer}</strong>. Your event proposal has
                been recorded and transmitted to the IEEE Student Branch committee at{" "}
                <span className="font-semibold text-primary">
                  ieeestudentchapter@ist.srmtrichy.edu.in
                </span>
                .
              </p>

              {/* Reference ID Container */}
              <div className="mt-6 rounded-lg border border-border bg-slate-50 p-4 text-center sm:p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Proposal Reference ID
                </span>
                <p className="mt-1 font-mono text-2xl font-bold tracking-widest text-primary">
                  {referenceId}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Quote this reference ID for inquiries with the branch executive committee.
                </p>
              </div>

              {/* Notice regarding pending verification workflow */}
              {isPending && (
                <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50/70 p-4 text-left text-xs text-amber-900 flex items-start gap-2.5">
                  <Info className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Membership Verification Notice:</strong> The branch executive committee
                    will cross-check your IEEE Membership Number (
                    <strong>{submittedSnapshot?.membershipId}</strong>) against official IEEE
                    vTools/Section records prior to scheduling proposal evaluation.
                  </p>
                </div>
              )}

              {/* Summary Card */}
              {submittedSnapshot && (
                <div className="mt-6 rounded-lg border border-border bg-background p-4 text-left text-xs sm:text-sm space-y-2">
                  <h3 className="font-bold text-primary text-xs uppercase tracking-wide border-b border-border pb-1">
                    Submitted Proposal Summary
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-muted-foreground pt-1">
                    <div>
                      <span className="font-semibold text-foreground">Event: </span>
                      {submittedSnapshot.title}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Category: </span>
                      {submittedSnapshot.category}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Date: </span>
                      {submittedSnapshot.date}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">IEEE Member ID: </span>
                      {submittedSnapshot.membershipId}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Grade: </span>
                      {submittedSnapshot.membershipGrade}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Position: </span>
                      {submittedSnapshot.position}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setReferenceId("");
                    setSubmittedSnapshot(null);
                    setVerificationResult(null);
                  }}
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow transition-colors hover:bg-primary-deep"
                >
                  Submit Another Response
                </button>
                <Link
                  to="/events"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-6 text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
                >
                  View Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── GOOGLE FORMS STYLE FORM VIEW ──────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f0f4f9] py-8 sm:py-12 px-3 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-4">
        {/* ================= HEADER CARD (Google Forms Style) ================= */}
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          {/* Top IEEE Blue Strip */}
          <div className="h-3 bg-primary" aria-hidden="true" />

          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
              <Sparkles className="h-4 w-4" />
              IEEE Student Branch (STB60221343)
            </div>

            <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-primary">
              Propose an Event
            </h1>

            <p className="mt-2 text-sm text-foreground/80 leading-relaxed sm:text-base">
              Have an innovative idea? Submit your proposal to the IEEE Student Branch committee for
              review.
            </p>

            {/* Note & Required Field Indicator */}
            <div className="mt-4 pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
              <span className="font-semibold text-primary flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent" />
                Exclusively for Registered IEEE Members & Core Committee
              </span>
              <span className="text-destructive font-semibold">* Indicates required question</span>
            </div>
          </div>
        </div>

        {/* ================= ERROR BANNER ================= */}
        {status === "error" && errorMsg && (
          <div
            role="alert"
            className="rounded-xl border border-destructive/40 bg-destructive/10 p-5 text-sm text-destructive shadow-sm"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <strong className="font-bold block text-base">Submission Error</strong>
                <p className="mt-1 leading-relaxed">{errorMsg}</p>
              </div>
            </div>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* ================= SECTION 1: IEEE MEMBERSHIP VERIFICATION ================= */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            {/* Section Header */}
            <div className="border-b border-border bg-slate-50/80 px-6 py-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <span className="grid h-5 w-5 place-items-center rounded bg-primary text-white text-[0.65rem]">
                  1
                </span>
                Section 1 of 3
              </div>
              <h2 className="mt-1 text-lg font-bold text-primary sm:text-xl">
                IEEE Membership Verification
              </h2>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                This event proposal form is exclusively available to registered IEEE members and
                authorised IEEE Student Branch committee members. Please provide your official
                membership details.
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Question 1: Full Name */}
              <GFormField
                number="1"
                label="Full Name"
                required
                error={errors["fullName"]}
                hint="Your official name as registered with IEEE."
              >
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  placeholder="Your answer"
                  autoComplete="name"
                  className={gInputClass(!!errors["fullName"])}
                />
              </GFormField>

              {/* Question 2: IEEE Membership ID */}
              <GFormField
                number="2"
                label="IEEE Membership ID / Membership Number"
                required
                error={errors["membershipId"]}
                hint="Your 7 to 9-digit numeric IEEE membership identifier (e.g. 98765432)."
              >
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      required
                      inputMode="numeric"
                      value={form.membershipId}
                      onChange={(e) => {
                        update("membershipId", e.target.value);
                        setVerificationResult(null);
                      }}
                      placeholder="e.g. 98765432"
                      className={gInputClass(!!errors["membershipId"])}
                    />
                    <button
                      type="button"
                      disabled={verifyingMembership || !form.membershipId.trim()}
                      onClick={performVerificationCheck}
                      className="inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-md border border-primary/30 bg-primary/5 px-4 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {verifyingMembership ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          Checking…
                        </>
                      ) : (
                        <>
                          <BadgeCheck className="h-4 w-4" />
                          Verify Status
                        </>
                      )}
                    </button>
                  </div>

                  {/* Verification status feedback */}
                  {verificationResult && (
                    <div
                      className={`rounded-md p-3 text-xs leading-relaxed flex items-start gap-2 ${
                        verificationResult.status === "verified"
                          ? "bg-green-50 border border-green-200 text-green-900"
                          : verificationResult.status === "pending_roster_check"
                            ? "bg-amber-50 border border-amber-200 text-amber-900"
                            : "bg-red-50 border border-red-200 text-red-900"
                      }`}
                    >
                      {verificationResult.status === "verified" ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                      ) : verificationResult.status === "pending_roster_check" ? (
                        <Info className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <strong className="block font-semibold">
                          {verificationResult.status === "verified"
                            ? "Membership Roster Verified"
                            : verificationResult.status === "pending_roster_check"
                              ? "Verification Workflow: Pending Committee Roster Cross-Check"
                              : "Membership ID Verification Alert"}
                        </strong>
                        <span>{verificationResult.message}</span>
                      </div>
                    </div>
                  )}
                </div>
              </GFormField>

              {/* Question 3: Registered IEEE Email */}
              <GFormField
                number="3"
                label="Registered IEEE Membership Email Address"
                required
                error={errors["membershipEmail"]}
                hint="The email address tied to your official IEEE account (e.g. you@ieee.org or institutional email)."
              >
                <input
                  type="email"
                  required
                  value={form.membershipEmail}
                  onChange={(e) => update("membershipEmail", e.target.value)}
                  placeholder="name@ieee.org or you@srmist.edu.in"
                  autoComplete="email"
                  className={gInputClass(!!errors["membershipEmail"])}
                />
              </GFormField>

              {/* Question 4: IEEE Membership Grade (Radio Group) */}
              <GFormField
                number="4"
                label="IEEE Membership Grade"
                required
                error={errors["membershipGrade"]}
                hint="Select your current grade in the IEEE global membership system."
              >
                <div className="mt-2 space-y-2.5">
                  {MEMBERSHIP_GRADES.map((grade) => (
                    <label
                      key={grade}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="membershipGrade"
                        value={grade}
                        checked={form.membershipGrade === grade}
                        onChange={() => update("membershipGrade", grade)}
                        className="h-4 w-4 text-primary focus:ring-accent border-gray-300"
                      />
                      <span className="text-sm font-medium text-foreground">{grade}</span>
                    </label>
                  ))}
                </div>
              </GFormField>

              {/* Question 5: IEEE Student Branch Position (Radio Group) */}
              <GFormField
                number="5"
                label="IEEE Student Branch Position"
                required
                error={errors["branchPosition"]}
                hint="Your designated role within the SRMIST Student Branch."
              >
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {BRANCH_POSITIONS.map((pos) => (
                    <label
                      key={pos}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="branchPosition"
                        value={pos}
                        checked={form.branchPosition === pos}
                        onChange={() => update("branchPosition", pos)}
                        className="h-4 w-4 text-primary focus:ring-accent border-gray-300"
                      />
                      <span className="text-sm font-medium text-foreground">{pos}</span>
                    </label>
                  ))}
                </div>
              </GFormField>

              {/* Question 6: SRM Register Number */}
              <GFormField
                number="6"
                label="SRM Register Number"
                required
                error={errors["registerNumber"]}
                hint="Official university registration number."
              >
                <input
                  type="text"
                  required
                  value={form.registerNumber}
                  onChange={(e) => update("registerNumber", e.target.value)}
                  placeholder="e.g. RA2211003010xxx"
                  className={gInputClass(!!errors["registerNumber"])}
                />
              </GFormField>

              {/* Question 7: Membership Confirmation Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 p-3 rounded-lg border border-border bg-slate-50/60 hover:bg-slate-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    required
                    checked={form.membershipConfirmed}
                    onChange={(e) => update("membershipConfirmed", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-accent"
                  />
                  <span className="text-sm font-medium text-foreground leading-relaxed">
                    I confirm that I am a registered IEEE member and that the membership details
                    provided above are accurate. <span className="text-destructive">*</span>
                  </span>
                </label>
                {errors["membershipConfirmed"] && (
                  <p className="mt-1 text-xs text-destructive flex items-center gap-1 font-medium">
                    <XCircle className="h-3.5 w-3.5" />
                    {errors["membershipConfirmed"]}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ================= SECTION 2: EVENT INFORMATION ================= */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="border-b border-border bg-slate-50/80 px-6 py-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <span className="grid h-5 w-5 place-items-center rounded bg-primary text-white text-[0.65rem]">
                  2
                </span>
                Section 2 of 3
              </div>
              <h2 className="mt-1 text-lg font-bold text-primary sm:text-xl">
                Event Information
              </h2>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                Provide the high-level details, target date, mode, and expected attendance.
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Question 8: Event Title */}
              <GFormField
                number="8"
                label="Event Title"
                required
                error={errors["eventTitle"]}
                hint="Clear, compelling title for the proposed event."
              >
                <input
                  type="text"
                  required
                  value={form.eventTitle}
                  onChange={(e) => update("eventTitle", e.target.value)}
                  placeholder="Your answer"
                  className={gInputClass(!!errors["eventTitle"])}
                />
              </GFormField>

              {/* Question 9: Event Category */}
              <GFormField
                number="9"
                label="Event Category"
                required
                error={errors["category"]}
                hint="Select the category that best describes the format."
              >
                <select
                  value={form.category}
                  onChange={(e) => update("category", e.target.value as EventCategory)}
                  className={gInputClass(!!errors["category"])}
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </GFormField>

              {/* Question 10: Proposed Date */}
              <GFormField
                number="10"
                label="Proposed Date"
                required
                error={errors["proposedDate"]}
                hint="Target date for hosting the event."
              >
                <input
                  type="date"
                  required
                  value={form.proposedDate}
                  onChange={(e) => update("proposedDate", e.target.value)}
                  className={gInputClass(!!errors["proposedDate"])}
                />
              </GFormField>

              {/* Question 11: Timing */}
              <div className="grid gap-4 sm:grid-cols-2">
                <GFormField
                  number="11a"
                  label="Start Time"
                  required
                  error={errors["startTime"]}
                >
                  <input
                    type="time"
                    required
                    value={form.startTime}
                    onChange={(e) => update("startTime", e.target.value)}
                    className={gInputClass(!!errors["startTime"])}
                  />
                </GFormField>

                <GFormField
                  number="11b"
                  label="End Time"
                  required
                  error={errors["endTime"]}
                >
                  <input
                    type="time"
                    required
                    value={form.endTime}
                    onChange={(e) => update("endTime", e.target.value)}
                    className={gInputClass(!!errors["endTime"])}
                  />
                </GFormField>
              </div>

              {/* Question 12: Event Venue */}
              <GFormField
                number="12"
                label="Event Venue"
                required
                error={errors["venue"]}
                hint="Physical campus venue or online meeting link."
              >
                <input
                  type="text"
                  required
                  value={form.venue}
                  onChange={(e) => update("venue", e.target.value)}
                  placeholder="e.g. IST 501 Seminar Hall / Google Meet"
                  className={gInputClass(!!errors["venue"])}
                />
              </GFormField>

              {/* Question 13: Event Mode (Radio Group) */}
              <GFormField
                number="13"
                label="Event Mode"
                required
                error={errors["eventMode"]}
                hint="Delivery modality."
              >
                <div className="mt-2 flex flex-wrap gap-4">
                  {EVENT_MODES.map((mode) => (
                    <label
                      key={mode}
                      className="flex items-center gap-2.5 p-2 rounded-md hover:bg-slate-50 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="eventMode"
                        value={mode}
                        checked={form.eventMode === mode}
                        onChange={() => update("eventMode", mode)}
                        className="h-4 w-4 text-primary focus:ring-accent border-gray-300"
                      />
                      <span className="text-sm font-medium text-foreground">{mode}</span>
                    </label>
                  ))}
                </div>
              </GFormField>

              {/* Question 14: Expected Participants */}
              <GFormField
                number="14"
                label="Expected Number of Participants"
                required
                error={errors["expectedParticipants"]}
                hint="Estimated participant attendance."
              >
                <input
                  type="text"
                  required
                  value={form.expectedParticipants}
                  onChange={(e) => update("expectedParticipants", e.target.value)}
                  placeholder="e.g. 80–120 participants"
                  className={gInputClass(!!errors["expectedParticipants"])}
                />
              </GFormField>

              {/* Question 15: Target Audience */}
              <GFormField
                number="15"
                label="Target Audience"
                required
                error={errors["targetAudience"]}
                hint="Eligible participants and focus batches."
              >
                <input
                  type="text"
                  required
                  value={form.targetAudience}
                  onChange={(e) => update("targetAudience", e.target.value)}
                  placeholder="e.g. All B.Tech Students, AIML / CSE 2nd & 3rd Year"
                  className={gInputClass(!!errors["targetAudience"])}
                />
              </GFormField>
            </div>
          </div>

          {/* ================= SECTION 3: PROPOSAL DESCRIPTION ================= */}
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="border-b border-border bg-slate-50/80 px-6 py-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <span className="grid h-5 w-5 place-items-center rounded bg-primary text-white text-[0.65rem]">
                  3
                </span>
                Section 3 of 3
              </div>
              <h2 className="mt-1 text-lg font-bold text-primary sm:text-xl">
                Proposal Description & Logistics
              </h2>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                Provide detailed objectives, schedule breakdown, required hardware/software, and
                budget.
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Question 16: Event Description */}
              <GFormField
                number="16"
                label="Event Description"
                required
                error={errors["description"]}
                hint="Comprehensive outline of the event topic and scope."
              >
                <textarea
                  required
                  rows={4}
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  placeholder="Your answer"
                  className={gInputClass(!!errors["description"])}
                />
              </GFormField>

              {/* Question 17: Objectives */}
              <GFormField
                number="17"
                label="Objectives of the Event"
                required
                error={errors["objectives"]}
                hint="What will this event achieve technically or academically?"
              >
                <textarea
                  required
                  rows={3}
                  value={form.objectives}
                  onChange={(e) => update("objectives", e.target.value)}
                  placeholder="1. Build practical competencies in...&#10;2. Introduce participants to industry workflows..."
                  className={gInputClass(!!errors["objectives"])}
                />
              </GFormField>

              {/* Question 18: Proposed Activities / Agenda */}
              <GFormField
                number="18"
                label="Proposed Activities / Agenda"
                required
                error={errors["agenda"]}
                hint="Draft schedule and planned session breakdowns."
              >
                <textarea
                  required
                  rows={3}
                  value={form.agenda}
                  onChange={(e) => update("agenda", e.target.value)}
                  placeholder="Session 1: Keynote & Foundational concepts&#10;Session 2: Hands-on lab sprint..."
                  className={gInputClass(!!errors["agenda"])}
                />
              </GFormField>

              {/* Question 19: Technical Requirements */}
              <GFormField
                number="19"
                label="Technical Requirements"
                required
                error={errors["technicalRequirements"]}
                hint="Computers, software licenses, audio systems, high-speed Wi-Fi, etc."
              >
                <textarea
                  required
                  rows={3}
                  value={form.technicalRequirements}
                  onChange={(e) => update("technicalRequirements", e.target.value)}
                  placeholder="e.g. Lab systems with Python 3.11 installed, projector with HDMI, Wi-Fi access."
                  className={gInputClass(!!errors["technicalRequirements"])}
                />
              </GFormField>

              {/* Question 20: Resources Required */}
              <GFormField
                number="20"
                label="Resources Required"
                required
                error={errors["resourcesRequired"]}
                hint="Guest honorarium, mementos, participant refreshments, certificates."
              >
                <textarea
                  required
                  rows={3}
                  value={form.resourcesRequired}
                  onChange={(e) => update("resourcesRequired", e.target.value)}
                  placeholder="e.g. Speaker memento, E-certificates for attendees, high-tea refreshments."
                  className={gInputClass(!!errors["resourcesRequired"])}
                />
              </GFormField>

              {/* Question 21: Estimated Budget */}
              <GFormField
                number="21"
                label="Estimated Budget"
                required
                error={errors["estimatedBudget"]}
                hint="Projected total cost or state 'Nil' if zero-budget."
              >
                <input
                  type="text"
                  required
                  value={form.estimatedBudget}
                  onChange={(e) => update("estimatedBudget", e.target.value)}
                  placeholder="e.g. ₹5,000 / Nil (Self-Funded)"
                  className={gInputClass(!!errors["estimatedBudget"])}
                />
              </GFormField>

              {/* Question 22: Expected Outcomes */}
              <GFormField
                number="22"
                label="Expected Outcomes"
                required
                error={errors["expectedOutcomes"]}
                hint="Measurable takeaways, projects completed, membership engagement."
              >
                <textarea
                  required
                  rows={3}
                  value={form.expectedOutcomes}
                  onChange={(e) => update("expectedOutcomes", e.target.value)}
                  placeholder="e.g. 50+ students deploy an AI model; 15 new IEEE memberships generated."
                  className={gInputClass(!!errors["expectedOutcomes"])}
                />
              </GFormField>
            </div>
          </div>

          {/* ================= SECTION 4: COMMITTEE CONFIRMATION & SUBMIT ================= */}
          <div className="overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm space-y-5">
            <label className="flex items-start gap-3 p-3 rounded-lg border border-border bg-slate-50/60 hover:bg-slate-50 cursor-pointer transition-colors">
              <input
                type="checkbox"
                required
                checked={form.confirmedCoreMember}
                onChange={(e) => update("confirmedCoreMember", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-accent"
              />
              <span className="text-sm font-medium text-foreground leading-relaxed">
                I confirm that I am submitting this proposal as an IEEE Student Branch Core Committee
                member. All proposal details are authentic and ready for formal review.{" "}
                <span className="text-destructive">*</span>
              </span>
            </label>

            {errors["confirmedCoreMember"] && (
              <p className="text-xs text-destructive flex items-center gap-1 font-medium">
                <XCircle className="h-3.5 w-3.5" />
                {errors["confirmedCoreMember"]}
              </p>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-3 border-t border-border">
              <button
                type="button"
                onClick={() => {
                  if (window.confirm("Are you sure you want to clear this form?")) {
                    setForm(INITIAL_FORM);
                    setErrors({});
                    setVerificationResult(null);
                  }
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors self-start"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Clear form
              </button>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-8 text-xs font-bold uppercase tracking-widest text-accent-foreground shadow transition-transform hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Event Proposal
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Google Forms Style Form Field Component ──────────────────────────────────
interface GFormFieldProps {
  number: string;
  label: string;
  required?: boolean;
  error?: string | undefined;
  hint?: string;
  children: React.ReactNode;
}

function GFormField({ number, label, required, error, hint, children }: GFormFieldProps) {
  return (
    <div className="block">
      <div className="mb-1.5 flex flex-wrap items-baseline gap-1.5">
        <span className="font-bold text-sm text-foreground">{number}.</span>
        <label className="text-sm font-semibold text-foreground">
          {label}
          {required && <span className="ml-1 text-destructive font-bold">*</span>}
        </label>
      </div>
      {hint && <p className="mb-2 text-xs text-muted-foreground">{hint}</p>}
      {children}
      {error && (
        <span className="mt-1.5 flex items-center gap-1 text-xs font-medium text-destructive">
          <XCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </span>
      )}
    </div>
  );
}

function gInputClass(hasError: boolean) {
  return `block w-full rounded-md border ${
    hasError ? "border-destructive ring-1 ring-destructive/40" : "border-gray-300"
  } bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:ring-1 focus:ring-primary focus-visible:outline-none`;
}
