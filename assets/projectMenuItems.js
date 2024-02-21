import { SiWebpack, SiAdobe } from "react-icons/si";
import { FaJava, FaLaptopCode, FaGithubSquare } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

const projectMenuItems = [
  {
    title: "Web Apps",
    description: "Web application development projects",
    icon: SiWebpack,
    link: "/",
  },
  {
    title: "Java",
    description: "Java development projects",
    icon: FaJava,
    link: "/",
  },
  {
    title: "C++",
    description: "C++ development projects",
    icon: TbBrandCpp,
    link: "/",
  },
  {
    title: "Art",
    description: "Art and design projects",
    icon: SiAdobe,
    link: "/",
  },
  {
    title: "Other",
    description: "Other projects",
    icon: FaLaptopCode,
    link: "/",
  },
  {
    title: "GitHub",
    description: "All My Projects on GitHub",
    icon: FaGithubSquare,
    link: "/",
  },
];

export default projectMenuItems;
