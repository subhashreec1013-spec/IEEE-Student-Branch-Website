import { createServerFn } from "@tanstack/react-start";

export interface MembershipVerificationResult {
  verified: boolean;
  status: "verified" | "pending_roster_check" | "not_found" | "invalid_format";
  message: string;
  matchedRole?: string | undefined;
}

/**
 * Server-side IEEE Membership Verifier.
 *
 * This function runs ONLY on the server side (Cloudflare / Nitro / Node runtime).
 * Authorised member databases or environment rosters are NEVER shipped to client JS bundles.
 *
 * Configuration:
 * - Define `IEEE_APPROVED_MEMBERS` in server environment as a JSON array:
 *   [{"membershipId":"98765432","email":"member@srmist.edu.in","role":"Technical Coordinator"}]
 * - If no external database/env list is populated, it returns `pending_roster_check`
 *   to initiate the official committee manual verification workflow.
 */
export const verifyIeeeMembership = createServerFn({ method: "POST" })
  .validator((data: { membershipId: string; email: string }) => data)
  .handler(async ({ data }): Promise<MembershipVerificationResult> => {
    const rawId = (data.membershipId ?? "").trim();
    const rawEmail = (data.email ?? "").trim().toLowerCase();

    // Basic format validation
    if (!rawId || rawId.length < 5 || !/^\d+$/.test(rawId)) {
      return {
        verified: false,
        status: "invalid_format",
        message:
          "IEEE Membership ID must be a valid numeric membership number (typically 7–9 digits).",
      };
    }

    if (!rawEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail)) {
      return {
        verified: false,
        status: "invalid_format",
        message: "Please provide a valid registered IEEE membership email address.",
      };
    }

    // Check server environment for authorised roster
    const serverRosterEnv = process.env["IEEE_APPROVED_MEMBERS"];

    if (!serverRosterEnv) {
      // Backend database / roster list is not yet loaded into the environment
      return {
        verified: false,
        status: "pending_roster_check",
        message:
          "Backend member database is awaiting configuration by the branch webmaster. Your proposal will proceed under the 'Pending IEEE Verification' workflow and will be cross-checked manually against IEEE vTools by the executive committee.",
      };
    }

    try {
      interface ApprovedMember {
        membershipId: string;
        email: string;
        role?: string;
      }
      const approvedList = JSON.parse(serverRosterEnv) as ApprovedMember[];

      const match = approvedList.find(
        (m) =>
          m.membershipId.trim() === rawId &&
          m.email.trim().toLowerCase() === rawEmail,
      );

      if (match) {
        return {
          verified: true,
          status: "verified",
          message: "IEEE Membership verified against the authorised branch roster.",
          matchedRole: match.role,
        };
      } else {
        return {
          verified: false,
          status: "not_found",
          message:
            "Membership ID or registered email does not match any entry in the authorised branch roster. Please verify your details or contact the branch secretary.",
        };
      }
    } catch (err) {
      console.error("Error parsing IEEE_APPROVED_MEMBERS:", err);
      return {
        verified: false,
        status: "pending_roster_check",
        message:
          "Unable to parse server roster. Proceeding with pending committee verification workflow.",
      };
    }
  });
