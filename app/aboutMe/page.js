"use client";

import Image from "next/image";
import portfolioImage from "@/assets/images/profile.jpg";
import { FaGithubSquare } from "react-icons/fa";
import ActionButton from "@/components/action-button/action-button";

export default function AboutMe() {
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold">About Me</h1>
            <p className="mt-4 p-5">
              Hello, I am Guido Asbun, and welcome to my portfolio page. I am a
              Junior at the California State University Fullerton's Computer
              Science Program. I have a passion for technologies and problem
              solving. Through my Computer Science journey I was able to intern
              at two companies, Snap Chat, and Axios media. And I built multiple
              projects that show my passion for technology and problem solving.
              In my website, you will be able to know all about me in a simple
              to navigate and visually appealing way.
            </p>
            <div className="mt-6">
              <ActionButton
                title={"GitHub"}
                description={"Check out my GitHub"}
                icon={FaGithubSquare}
                link={"https://github.com/guidoasbun"}
              />
            </div>
          </div>
          <div className="md:w-1/3 rounded-lg p-10">
            <Image
              src={portfolioImage} // Replace with your image path
              alt="Guido Asbun"
              className="h-full w-full rounded-lg object-cover object-center"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
