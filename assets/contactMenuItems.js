import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithubSquare,
  FaFileAlt,
  FaComment,
  FaInstagram,
} from "react-icons/fa";

const contactMenuItems = [
  {
    title: "Email",
    description: "Email me",
    icon: FaEnvelope,
    link: "mailto:guido@asbun.io",
  },
  {
    title: "LinkedIn",
    description: "My LinkedIn profile",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/guidoasbun/",
  },
  {
    title: "GitHub",
    description: "My GitHub profile",
    icon: FaGithubSquare,
    link: "https://github.com/guidoasbun",
  },
  {
    title: "Resume",
    description: "My resume",
    icon: FaFileAlt,
    link: "https://asbun365-my.sharepoint.com/:b:/g/personal/guido_asbun_io/Ea8zP7lNl1BFkmbWTYcfjdcBh6wIy1eCa3bku3XIMZdJNw?e=aM0AP8",
  },
  {
    title: "Message",
    description: "Send me a message",
    icon: FaComment,
    link: "https://forms.office.com/r/KQTKPMi8mi?origin=lprLink",
  },
  {
    title: "Instagram",
    description: "My instagram profile",
    icon: FaInstagram,
    link: "https://www.instagram.com/gdrodrigo8/",
  },
];

export default contactMenuItems;
