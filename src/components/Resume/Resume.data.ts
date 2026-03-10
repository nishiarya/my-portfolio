export interface ResumeVersion {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  filename: string;
  color: string;
  isVisible: boolean;
}

export const resumeVersions: ResumeVersion[] = [
  {
    id: "v1",
    title: "Resume Version 1",
    subtitle: "Two Page - Detailed Format",
    description:
      "Comprehensive two-page resume with detailed skills, experience, achievements, and technical expertise in a professional layout.",
    features: [
      "Two page detailed format",
      "Key highlights focused",
      "Clean & professional",
      "Technical expertise showcase",
    ],
    filename: "Resume_v1.pdf",
    color: "#6366f1",
    isVisible: true,
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
    isVisible: false,
  },
];
