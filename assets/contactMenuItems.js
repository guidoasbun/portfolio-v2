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
    link: "/",
  },
  {
    title: "LinkedIn",
    description: "My LinkedIn profile",
    icon: FaLinkedinIn,
    link: "/",
  },
  {
    title: "GitHub",
    description: "My GitHub profile",
    icon: FaGithubSquare,
    link: "/",
  },
  {
    title: "Resume",
    description: "My resume",
    icon: FaFileAlt,
    link: "/",
  },
  {
    title: "Message",
    description: "Send me a message",
    icon: FaComment,
    link: "/",
  },
  {
    title: "Instagram",
    description: "My instagram profile",
    icon: FaInstagram,
    link: "/",
  },
];

export default contactMenuItems;
