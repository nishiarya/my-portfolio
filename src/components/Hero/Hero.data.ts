export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  location: string;
  phone: string;
  email: string;
  linkedIn: string;
  availabilityText: string;
  bannerText: string;
  bannerHighlight: string;
}

export const heroData: HeroData = {
  name: "Nishant Kumar Singh",
  title: "Tech Lead | React-Native | Mobile App Solution Design & Architect",
  subtitle: "Mobile Solution Architect & Tech Lead",
  description:
    "An engineer driven by commitment, reliability, integrity, and kindness. With 15.6+ years of experience, I architect and deliver scalable, secure, and performance-optimized mobile applications for global enterprise clients across telecom, real estate, and digital transformation domains.",
  highlights: [
    "commitment, reliability, integrity, and kindness",
    "15.6+ years",
  ],
  location: "Noida, India",
  phone: "+91-9958101777",
  email: "nishant.bitindia@gmail.com",
  linkedIn: "https://www.linkedin.com/in/nishant-singh-ba161a22",
  availabilityText: "Available for opportunities",
  bannerText: "Mobile Solution Architect & Tech Lead",
  bannerHighlight: "Open to Work",
};

export const codePreview = `const MobileArchitect = () => {
  const skills = [
    "React Native",
    "TypeScript",
    "iOS & Android"
  ];
  
  return (
    <Innovation 
      experience="15.6+ years"
      passion={true}
    />
  );
};`;
