import { createServerFn } from "@tanstack/react-start";

export interface MembershipVerificationResult {
  verified: boolean;
  status: "verified" | "expired" | "not_found" | "invalid_format";
  message: string;
  membershipNumber?: string;
}

export interface StoredProposalRecord {
  id: string;
  referenceId: string;
  membershipNumber: string;
  fullName: string;
  membershipEmail: string;
  membershipGrade: string;
  branchPosition: string;
  registerNumber: string;
  eventTitle: string;
  category: string;
  proposedDate: string;
  startTime: string;
  endTime: string;
  venue: string;
  eventMode: string;
  expectedParticipants: string;
  targetAudience: string;
  description: string;
  objectives: string;
  agenda: string;
  technicalRequirements: string;
  resourcesRequired: string;
  estimatedBudget: string;
  expectedOutcomes: string;
  verificationStatus: "verified" | "expired" | "not_found" | "invalid_format";
  submittedAt: string;
}

/**
 * IEEE ACTIVE MEMBERS LIST
 * Extracted exclusively from the IEEE ACTIVE MEMBERS LIST section of IEEE MEMBERS.pdf.
 * Total extracted rows: 65 (63 unique membership numbers; 2 duplicates deduplicated).
 * Expired members are NOT included in this active list.
 */
export const ACTIVE_IEEE_MEMBERS: Set<string> = new Set([
  "100276857",
  "100996857",
  "101306741",
  "101630026",
  "101656151",
  "101759555",
  "101768416",
  "101769551",
  "101769843",
  "101771416",
  "101771697",
  "101787711",
  "101789245",
  "101791539",
  "101794493",
  "101802395",
  "101808325",
  "101808787",
  "101811029",
  "101812282",
  "101812731",
  "101813077",
  "101813365",
  "101813385",
  "101813532",
  "101813677",
  "102631508",
  "102631511",
  "102640167",
  "102640940",
  "102642668",
  "102644909",
  "102671541",
  "102671983",
  "102676531",
  "102679952",
  "102679957",
  "102681225",
  "102681361",
  "102681375",
  "102681413",
  "102681436",
  "102684387",
  "102689805",
  "102689858",
  "102693606",
  "102693940",
  "102693943",
  "102694149",
  "102694162",
  "102694212",
  "102694453",
  "102698005",
  "102698347",
  "102698450",
  "102698474",
  "102698558",
  "102698585",
  "102699045",
  "102771075",
  "102779121",
  "102781227",
  "102791536",
  "102827470", // Archana Sivakumar (Student Member, Valid through 31 Dec 2027)
]);

/**
 * IEEE MEMBERS (EXPIRED)
 * Extracted exclusively from the IEEE MEMBERS (EXPIRED) section of IEEE MEMBERS.pdf.
 * Total expired members: 12. Submissions using these membership numbers are strictly rejected.
 */
export const EXPIRED_IEEE_MEMBERS: Set<string> = new Set([
  "100640795",
  "100648888",
  "100821966",
  "101291165",
  "101291205",
  "101519567",
  "101558969",
  "101559180",
  "101565597",
  "101578538",
  "101578555",
  "101578843",
]);

/**
 * Server-side IEEE Membership Number Verification Core.
 * Validates active status against the verified branch roster.
 */
export function verifyMembershipNumber(membershipNumber: string): MembershipVerificationResult {
  const rawId = (membershipNumber ?? "").trim();

  // 1. Empty membership number validation
  if (!rawId) {
    return {
      verified: false,
      status: "invalid_format",
      message: "IEEE Membership Number is required.",
    };
  }

  // 2. Numeric format validation
  if (!/^\d+$/.test(rawId)) {
    return {
      verified: false,
      status: "invalid_format",
      message: "IEEE Membership Number must contain valid digits only.",
    };
  }

  // 3. Explicitly rejected: Expired membership numbers
  if (EXPIRED_IEEE_MEMBERS.has(rawId)) {
    return {
      verified: false,
      status: "expired",
      message:
        "This IEEE Membership Number has EXPIRED. Event proposals can only be submitted by active IEEE Student Branch members.",
      membershipNumber: rawId,
    };
  }

  // 4. Check active membership list (or server environment list if augmented)
  const envActiveList = process.env["IEEE_ACTIVE_MEMBERS"];
  let isEnvMatched = false;
  if (envActiveList) {
    try {
      const parsed = JSON.parse(envActiveList);
      if (Array.isArray(parsed) && parsed.includes(rawId)) {
        isEnvMatched = true;
      }
    } catch {
      if (envActiveList.split(",").map((s) => s.trim()).includes(rawId)) {
        isEnvMatched = true;
      }
    }
  }

  if (ACTIVE_IEEE_MEMBERS.has(rawId) || isEnvMatched) {
    return {
      verified: true,
      status: "verified",
      message: "Active IEEE Membership Number verified successfully against the Student Branch roster.",
      membershipNumber: rawId,
    };
  }

  // 5. Explicitly rejected: Unknown membership number
  return {
    verified: false,
    status: "not_found",
    message:
      "IEEE Membership Number not found. Only registered active IEEE Student Branch members can submit event proposals.",
    membershipNumber: rawId,
  };
}

/**
 * Proposal Submission Storage Repository.
 * Stores verified proposal submissions in memory and syncs to filesystem where available.
 * Preserves all proposal submission records without requiring external database provisioning.
 */
const proposalStorage: StoredProposalRecord[] = [];

export async function saveProposalRecord(record: StoredProposalRecord): Promise<StoredProposalRecord> {
  const existingIdx = proposalStorage.findIndex((p) => p.referenceId === record.referenceId);
  if (existingIdx >= 0) {
    proposalStorage[existingIdx] = record;
  } else {
    proposalStorage.push(record);
  }

  // Non-blocking persistence to /tmp (Vercel serverless / Node compatible)
  try {
    const fsMod = "node:fs";
    const pathMod = "node:path";
    const osMod = "node:os";
    const fs = await import(/* @vite-ignore */ fsMod);
    const path = await import(/* @vite-ignore */ pathMod);
    const os = await import(/* @vite-ignore */ osMod);
    const storageFile = path.join(os.tmpdir(), "ieee_event_proposals.json");

    let existingFileRecords: StoredProposalRecord[] = [];
    if (fs.existsSync(storageFile)) {
      try {
        existingFileRecords = JSON.parse(fs.readFileSync(storageFile, "utf-8")) as StoredProposalRecord[];
      } catch {
        existingFileRecords = [];
      }
    }

    const fileIdx = existingFileRecords.findIndex((p) => p.referenceId === record.referenceId);
    if (fileIdx >= 0) {
      existingFileRecords[fileIdx] = record;
    } else {
      existingFileRecords.push(record);
    }

    fs.writeFileSync(storageFile, JSON.stringify(existingFileRecords, null, 2), "utf-8");
  } catch {
    // Non-fatal if filesystem is restricted
  }

  return record;
}

/**
 * Server Function: Verify IEEE Membership Number.
 * Runs strictly on the server in TanStack Start / Nitro / Vercel.
 */
export const verifyIeeeMembership = createServerFn({ method: "POST" })
  .validator((data: { membershipId: string; email?: string }) => data)
  .handler(async ({ data }): Promise<MembershipVerificationResult> => {
    return verifyMembershipNumber(data.membershipId);
  });

/**
 * Server Function: Submit & Store Event Proposal with Verified IEEE Membership Number.
 * Re-validates the membership number on the server side before storing.
 */
export const submitEventProposalServerFn = createServerFn({ method: "POST" })
  .validator(
    (data: {
      referenceId: string;
      membershipNumber: string;
      fullName: string;
      membershipEmail: string;
      membershipGrade: string;
      branchPosition: string;
      registerNumber: string;
      eventTitle: string;
      category: string;
      proposedDate: string;
      startTime: string;
      endTime: string;
      venue: string;
      eventMode: string;
      expectedParticipants: string;
      targetAudience: string;
      description: string;
      objectives: string;
      agenda: string;
      technicalRequirements: string;
      resourcesRequired: string;
      estimatedBudget: string;
      expectedOutcomes: string;
    }) => data,
  )
  .handler(
    async ({
      data,
    }): Promise<{
      success: boolean;
      message: string;
      record?: StoredProposalRecord;
    }> => {
      // 1. Independent Server-Side Membership Number Verification
      const verification = verifyMembershipNumber(data.membershipNumber);
      if (!verification.verified) {
        return {
          success: false,
          message: verification.message,
        };
      }

      const cleanNumber = (data.membershipNumber ?? "").trim();

      // 2. Persist proposal submission with verified membership number
      const record: StoredProposalRecord = {
        id: `prop_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        referenceId: data.referenceId,
        membershipNumber: cleanNumber,
        fullName: data.fullName,
        membershipEmail: data.membershipEmail,
        membershipGrade: data.membershipGrade,
        branchPosition: data.branchPosition,
        registerNumber: data.registerNumber,
        eventTitle: data.eventTitle,
        category: data.category,
        proposedDate: data.proposedDate,
        startTime: data.startTime,
        endTime: data.endTime,
        venue: data.venue,
        eventMode: data.eventMode,
        expectedParticipants: data.expectedParticipants,
        targetAudience: data.targetAudience,
        description: data.description,
        objectives: data.objectives,
        agenda: data.agenda,
        technicalRequirements: data.technicalRequirements,
        resourcesRequired: data.resourcesRequired,
        estimatedBudget: data.estimatedBudget,
        expectedOutcomes: data.expectedOutcomes,
        verificationStatus: "verified",
        submittedAt: new Date().toISOString(),
      };

      await saveProposalRecord(record);

      return {
        success: true,
        message: "Event proposal successfully submitted and verified.",
        record,
      };
    },
  );
