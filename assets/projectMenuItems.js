import { SiWebpack, SiAdobe } from "react-icons/si";
import { FaJava, FaLaptopCode, FaGithubSquare } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";

const projectMenuItems = [
  {
    title: "Web Apps",
    description: "Web application development projects",
    icon: SiWebpack,
    link: "/projects/web-projects",
  },
  {
    title: "Java",
    description: "Java development projects",
    icon: FaJava,
    link: "/projects/java-projects",
  },
  {
    title: "C++",
    description: "C++ development projects",
    icon: TbBrandCpp,
    link: "/projects/cpp-projects",
  },
  {
    title: "Art",
    description: "Art and design projects",
    icon: SiAdobe,
    link: "/projects/art-projects",
  },
  {
    title: "Mobile Applications",
    description: "Mobile projects",
    icon: IoPhonePortraitOutline,
    link: "/projects/mobile-projects",
  },
  {
    title: "GitHub",
    description: "All My Projects on GitHub",
    icon: FaGithubSquare,
    link: "https://github.com/guidoasbun",
  },
];

export default projectMenuItems;
