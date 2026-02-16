export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  relationship: string;
  linkedinUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "amit-kushvaha",
    name: "Amit Kushvaha",
    role: "Senior Software Engineer",
    company: "Tech Mahindra",
    content:
      "Nishant is technical sound and hard working Guy. He has worked with me for several years, i found him very sincere and very calm at the work. He is good guy to work with. I strongly recommend him as a good Team player.",
    relationship: "Worked together at Tech Mahindra",
    linkedinUrl: "https://www.linkedin.com/in/amitchauhan1985",
  },
  // Add more testimonials as received
];

export const testimonialStats = {
  yearsExperience: "15.6+",
  projectsDelivered: "50+",
  teamMembersLed: "12+",
  developersMonitored: "50+",
};
