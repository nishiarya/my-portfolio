export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companyUrl?: string;
  image?: string;
  content: string;
  relationship: string;
  relationshipUrl?: string;
  linkedinUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "amit-kushvaha",
    name: "Amit Kushvaha",
    role: "Experienced Technology Leader | Java Spring Boot | Python| Mobile Apps Dev | AWS | Database Migration | ML Enthusiast | AWS Certified Solution Architect",
    company: "Tata Consultancy Services",
    companyUrl: "https://www.tcs.com/",
    content:
      "Nishant is technical sound and hard working Guy. He has worked with me for several years, i found him very sincere and very calm at the work. He is good guy to work with. I strongly recommend him as a good Team player.",
    relationship: "Worked together at Hytech Professionals India Pvt. Ltd.",
    relationshipUrl: "https://hytechpro.com/",
    linkedinUrl: "https://www.linkedin.com/in/amitchauhan1985",
  },
  {
    id: "vibhas-chandra",
    name: "Vibhas Chandra",
    role: "Director - Tech, Freecharge ( Axis Bank )",
    company: "Freecharge",
    companyUrl: "https://www.freecharge.in/",
    content:
      "Nishant is proficient in Mobile programming and architecture. Played an instrumental role in taking care of the Mobile releases, was pivotal in designing algorithms for gaming application using device parameters. Nishant has a great attitude and an asset for any engineering team.",
    relationship: "Worked together at Hytech Professionals India Pvt. Ltd.",
    relationshipUrl: "https://hytechpro.com/",
    linkedinUrl: "https://www.linkedin.com/in/vibhas-chandra-2a76a720",
  },
  {
    id: "pradeep-bhardwaj",
    name: "Pradeep Bhardwaj",
    role: "Sr Tech Lead at Happiest Minds Technologies",
    company: "Happiest Minds Technologies",
    companyUrl: "https://www.happiestminds.com/",
    content:
      "I had the pleasure of working with Nishant at Hytech Professional, where we collaborated on a gaming application along with several other projects. Nishant is an exceptional iOS Developer and React Native expert with strong technical expertise and a deep understanding of mobile application architecture.\n\nDuring our time working together, he consistently demonstrated his ability to build high-performance, scalable, and user-friendly applications.\n\nWhat truly stands out about Nishant is his problem-solving approach and commitment to deadlines. He is proactive, detail-oriented, and always willing to go the extra mile to ensure project success. Whether it was optimizing performance, resolving complex bugs, or implementing new features, he handled every challenge with confidence and professionalism.\n\nI highly recommend Nishant to any organization looking for a skilled and reliable mobile app developer. He would be a valuable asset to any team.",
    relationship: "Worked together at Hytech Professionals India Pvt. Ltd.",
    relationshipUrl: "https://hytechpro.com/",
    linkedinUrl: "https://www.linkedin.com/in/pradeep-b-3b571622",
  },
  // Add more testimonials as received
];

export const testimonialStats = {
  yearsExperience: "15.6+",
  projectsDelivered: "50+",
  teamMembersLed: "12+",
  developersMonitored: "50+",
};
