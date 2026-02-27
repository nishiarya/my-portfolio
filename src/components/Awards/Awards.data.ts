export interface AwardItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  type: "certification" | "award" | "program";
  certificate?: string;
  thumbnail?: string;
}

export interface AwardYearGroup {
  year: string;
  items: AwardItem[];
}

export const awardsData: AwardYearGroup[] = [
  {
    year: "2025-2026",
    items: [
      {
        title: "Leadership Learning - ASCEND Program 2026",
        issuer: "Tech Mahindra",
        date: "2026",
        description:
          "5 Months Leadership Learning - ASCEND Program to develop leadership skills and capabilities.",
        type: "program",
        certificate: "/awards/leadership-learning-program-2026.png",
        thumbnail:
          "/awards/thumbnails/leadership-learning-program-2026-thumb.png",
      },
      {
        title: "AI White Belt",
        issuer: "Tech Mahindra",
        date: "Sep 2025",
        description:
          "Demonstrated AI technology proficiency and commitment to Tech Mahindra's AI vision and Strategy.",
        type: "certification",
        certificate: "/awards/ai-white-belt-2025.png",
        thumbnail: "/awards/thumbnails/ai-white-belt-2025-thumb.png",
      },
      {
        title: "Team Star Award 2025",
        issuer: "Tech Mahindra",
        date: "Jul 2025",
        description:
          'First runner-up in "Technology Solution" category in Star Awards (OSCARS of Tech Mahindra) for security remediation project.',
        type: "award",
        certificate: "/awards/team-star-award-2025.png",
        thumbnail: "/awards/thumbnails/team-star-award-2025-thumb.png",
      },
      {
        title: "Standing Ovation Award 2025",
        issuer: "Tech Mahindra",
        date: "Mar 2025",
        description:
          "Awarded for remarkable technical skills, project leadership, team management and delivery skills.",
        type: "award",
        certificate: "/awards/standing-ovation-2025.png",
        thumbnail: "/awards/thumbnails/standing-ovation-2025-thumb.png",
      },
      {
        title: "Information Security and Data Privacy",
        issuer: "Tech Mahindra",
        date: "2025",
        description:
          "Certified in understanding the importance of Information Security and Data Privacy for IT professionals.",
        type: "certification",
        certificate: "/awards/info-security-data-privacy-2025.png",
        thumbnail:
          "/awards/thumbnails/info-security-data-privacy-2025-thumb.png",
      },
    ],
  },
  {
    year: "2020-2022",
    items: [
      {
        title: "AQT Ninja Award 2022",
        issuer: "Tech Mahindra",
        date: "Dec 2022",
        description:
          "Recognition for exceptional quality and technical excellence.",
        type: "award",
        certificate: "/awards/aqt-ninja-award-2022.png",
        thumbnail: "/awards/thumbnails/aqt-ninja-award-2022-thumb.png",
      },
      {
        title: "Express Delivery Leadership Program - First Winner",
        issuer: "Tech Mahindra",
        date: "Jan 2021",
        description:
          "First place winner in the Express Delivery Leadership Learning Program.",
        type: "award",
        certificate: "/awards/express-delivery-first-winner-2021.png",
        thumbnail:
          "/awards/thumbnails/express-delivery-first-winner-2021-thumb.png",
      },
      {
        title: "Pat on Back Award 2020",
        issuer: "Tech Mahindra",
        date: "Sep 2020",
        description:
          "Awarded for excellent work in MySunrise application - designed event tracking ecosystem and architecture.",
        type: "award",
        certificate: "/awards/pat-on-back-2020.png",
        thumbnail: "/awards/thumbnails/pat-on-back-2020-thumb.png",
      },
    ],
  },
  {
    year: "2017-2018",
    items: [
      {
        title: "Digital Warrior Team EMEA Location Excellence Awards",
        issuer: "Tech Mahindra",
        date: "2018",
        description:
          "As Lead Project Development - Built first of its kind digital onboarding solution for Sunrise customers.",
        type: "award",
        certificate: "/awards/digital-warrior-emea-2018.png",
        thumbnail: "/awards/thumbnails/digital-warrior-emea-2018-thumb.png",
      },
      {
        title: "Pat on Back Award 2018",
        issuer: "Tech Mahindra",
        date: "May 2018",
        description:
          "Excellent work, architecture, solution design and Salesforce integration.",
        type: "award",
        certificate: "/awards/pat-on-back-2018.png",
        thumbnail: "/awards/thumbnails/pat-on-back-2018-thumb.png",
      },
      {
        title: "TechM Excellence Awards 2017 - Noida",
        issuer: "Tech Mahindra",
        date: "Dec 2017",
        description: "Digital Warriors Location Excellence Awards recognition.",
        type: "award",
        certificate: "/awards/techm-excellence-2017.png",
        thumbnail: "/awards/thumbnails/techm-excellence-2017-thumb.png",
      },
      {
        title: "Client Recognition Certificate",
        issuer: "Sunrise Communications AG",
        date: "Nov 2017",
        description:
          "Awarded for long-term excellence work, dedication, and valuable contributions to the project.",
        type: "award",
        certificate: "/awards/client-recognition-sunrise-2017.png",
        thumbnail:
          "/awards/thumbnails/client-recognition-sunrise-2017-thumb.png",
      },
      {
        title: "Bravo Award 2017",
        issuer: "Tech Mahindra",
        date: "Aug 2017",
        description:
          "Awarded for outstanding work, documentation, on-time deliveries, and leadership.",
        type: "award",
        certificate: "/awards/bravo-award-2017.png",
        thumbnail: "/awards/thumbnails/bravo-award-2017-thumb.png",
      },
    ],
  },
  {
    year: "2011-2015",
    items: [
      {
        title: "Meritorious Mentor Award 2015",
        issuer: "Wildnet Technologies",
        date: "Dec 2015",
        description:
          "Awarded for excellent work on multiple assignments & team building and training.",
        type: "award",
        certificate: "/awards/meritorious-mentor-2015.png",
        thumbnail: "/awards/thumbnails/meritorious-mentor-2015-thumb.png",
      },
      {
        title: "Star of the Month 2014",
        issuer: "Wildnet Technologies",
        date: "Jul 2014",
        description:
          "Developed complex UI/UX with Couchbase framework integration for Commusoft app.",
        type: "award",
        certificate: "/awards/star-of-month-2014.png",
        thumbnail: "/awards/thumbnails/star-of-month-2014-thumb.png",
      },
      {
        title: "Face Off 2012",
        issuer: "HyTech Professionals",
        date: "Dec 2012",
        description:
          "Story of excellence - transformed from trainee to vibrant developer with BlueMe reaching 2M+ downloads.",
        type: "award",
        certificate: "/awards/face-off-2012.png",
        thumbnail: "/awards/thumbnails/face-off-2012-thumb.png",
      },
      {
        title: "iApp Innovation Award 2011",
        issuer: "HyTech Professionals",
        date: "2011",
        description:
          "Best iOS Application Award - BlueMe was top on Apple Store for 2 weeks with 2M+ downloads.",
        type: "award",
        certificate: "/awards/iapp-innovation-2011.png",
        thumbnail: "/awards/thumbnails/iapp-innovation-2011-thumb.png",
      },
    ],
  },
];
