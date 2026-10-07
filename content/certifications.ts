export type Certification = {
  id: string;
  name: string;
  status: "completed" | "planned";
  issued: string | null;
  examCode: string | null;
  credentialId: string | null;
  verificationUrl: string | null;
  note: string;
};

export const certifications: Certification[] = [
  {
    id: "aws-aif-c01",
    name: "AWS Certified AI Practitioner",
    status: "completed",
    issued: "September 2026",
    examCode: "AIF-C01",
    credentialId: null,
    verificationUrl: null,
    note: "TODO: credential ID and the verification link are not in the résumé.",
  },
  {
    id: "planned-slot",
    name: "Additional certification",
    status: "planned",
    issued: null,
    examCode: null,
    credentialId: null,
    verificationUrl: null,
    note: "Planned slot only. TODO: no further certification is named. This is not a completed credential.",
  },
];
