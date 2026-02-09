export interface ResumeVersion {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  filename: string;
  color: string;
}

export const resumeVersions: ResumeVersion[] = [
  {
    id: "v1",
    title: "Resume Version 1",
    subtitle: "Single Page - Compact Format",
    description:
      "A concise one-page resume highlighting key skills, experience, and achievements in a professional compact layout.",
    features: [
      "Single page format",
      "Key highlights focused",
      "Clean & professional",
      "Quick overview",
    ],
    filename: "Resume_v1.pdf",
    color: "#6366f1",
  },
  {
    id: "v2",
    title: "Resume Version 2",
    subtitle: "Detailed - Two Page Format",
    description:
      "Comprehensive two-page resume with detailed project descriptions, technical skills, and career achievements.",
    features: [
      "Two page detailed format",
      "Complete project history",
      "Extensive skills list",
      "Full career timeline",
    ],
    filename: "Resume_v2.pdf",
    color: "#8b5cf6",
  },
];
