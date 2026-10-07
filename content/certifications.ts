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
    credentialId: "cd4be8c7c3ea48aca09bc7a181355061",
    verificationUrl:
      "https://www.credly.com/earner/earned/badge/496bc744-8636-4032-9eb0-975867c4f0d5",
    note: "Credential ID and verification link from the public LinkedIn profile.",
  },
];
