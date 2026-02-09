import { FiMail, FiPhone, FiMapPin, FiLinkedin } from "react-icons/fi";
import type { IconType } from "react-icons";

export interface ContactInfo {
  icon: IconType;
  label: string;
  value: string;
  href: string | null;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: FiMail,
    label: "Email",
    value: "nishant.bitindia@gmail.com",
    href: "mailto:nishant.bitindia@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91-9958101777",
    href: "tel:+919958101777",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Noida, India",
    href: null,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/nishant-singh-ba161a22",
  },
];

export const contactIntro = {
  title: "Get In Touch",
  description:
    "Whether you're looking for a Tech Lead to drive your mobile initiatives, need consultation on React Native architecture, or want to discuss exciting opportunities - I'm always happy to connect. I believe in building lasting professional relationships based on trust and mutual respect.",
  quote:
    "Great things in business are never done by one person. They're done by a team of people.",
};
