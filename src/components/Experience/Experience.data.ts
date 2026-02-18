export interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  duration: string;
  description: string;
  highlights: string[];
  teamSize: string;
}

export interface ExperienceSummary {
  yearsExperience: string;
  companies: number;
  projectsDelivered: string;
  teamMembersMentored: string;
}

export const experiences: Experience[] = [
  {
    title: "Tech Lead",
    company: "Tech Mahindra Ltd.",
    companyUrl: "https://www.techmahindra.com/",
    location: "Noida, India",
    period: "Dec 2016 - Present",
    duration: "9+ years",
    description:
      "Leading React Native and mobile development projects for global enterprise clients.",
    highlights: [
      "Led end-to-end system and solution design, defined mobile app architecture, deployment strategy and CI/CD",
      "Built multiple award-winning projects including Verizon Security Remediation, Sunrise ID Checker, MySunrise, MyLebara",
      "Defined coding standards and best practices, performed regular code reviews and systems testing",
      "Mentor and coach team members through pair programming and knowledge-sharing sessions",
      "Managed teams of up to 12 members with direct project dev team of 6",
      "Achieved 99% vulnerability remediation in web app brands across security tools for Verizon",
    ],
    teamSize: "6-12 members",
  },
  {
    title: "Team Lead iOS",
    company: "Wildnet Technologies Pvt. Ltd.",
    companyUrl: "https://www.wildnettechnologies.com/",
    location: "Noida, India",
    period: "Nov 2013 - Nov 2016",
    duration: "3 years",
    description:
      "Led iOS development team delivering multiple client projects across various domains.",
    highlights: [
      "Built Commusoft - Field job management app for UK companies (Plumbing, Heating, Electrical)",
      "Developed Buniyad Realtors - Field agent tracking app with Salesforce Force Integration",
      "Created MapIt Realtour - Map and navigation app for Real Estate Agents",
      "Delivered Dropwash (AUS) - Dry cleaning & laundry order management app",
      "Resource management and team mentoring on day-to-day basis",
      "Client communication and technical documentation creation",
    ],
    teamSize: "4-6 members",
  },
  {
    title: "Software Engineer",
    company: "HyTech Professionals India Pvt. Ltd.",
    companyUrl: "https://hytechpro.com/",
    location: "Noida, India",
    period: "Apr 2010 - Nov 2013",
    duration: "3.5 years",
    description:
      "Started career as mobile developer, building iOS applications from scratch.",
    highlights: [
      "Built BlueMe - Bluetooth utility app with 2M+ downloads, top on App Store for 2 weeks",
      "Developed Front Stream Payment (Fast Transact App) connecting hardware to iOS devices",
      "Full mobile app development using Objective-C",
      "Project release activity and Apple Developer account management",
      "Transformed from trainee to a senior developer, recognized with iApp Innovation Award",
    ],
    teamSize: "3-5 members",
  },
];

export const experienceSummary: ExperienceSummary = {
  yearsExperience: "15.6+",
  companies: 3,
  projectsDelivered: "20+",
  teamMembersMentored: "50+",
};
