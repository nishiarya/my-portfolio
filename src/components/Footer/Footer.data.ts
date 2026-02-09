export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterContact {
  email: string;
  phone: string;
  linkedIn: string;
}

export const footerData = {
  brand: {
    name: "Nishant Kumar Singh",
    title: "Mobile Architect",
    description:
      "Tech Lead with 15.6+ years of experience in React Native & mobile app development. Driven by commitment, reliability, and integrity to deliver exceptional digital experiences.",
  },
  quickLinks: [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ] as FooterLink[],
  contact: {
    email: "nishant.bitindia@gmail.com",
    phone: "+91-9958101777",
    linkedIn: "https://www.linkedin.com/in/nishant-singh-ba161a22",
  } as FooterContact,
};
