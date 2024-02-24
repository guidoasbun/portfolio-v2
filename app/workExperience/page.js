import Image from "next/image";
import snapLogo from "@/assets/images/snap.png";
import axiosLogo from "@/assets/images/axios.png";

export default function WorkExperience() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-2">
      <h1 className="text-3xl font-bold p-4">Work Experience</h1>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-rows-1 md:grid-rows-2 gap-4">
          {/* First Item */}
          <div className="flex flex-col md:flex-row items-center p-10">
            <Image
              src={snapLogo} // Update with your image path
              alt="Description of Image"
              className="w-full md:w-1/2 object-cover h-auto"
            />
            <div className="text">
              <p className="mt-4 p-5 block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                My first exposure as a professional software developer was when
                I got accepted to the Snap Engineering Academy, a software
                development pre-internship provided by Snap Chat. As a Snap
                Engineering Academy Scholar, I worked closely with Snap Chat
                software engineers on various technologies like Snaps augmented
                reality and built a collaboratively produced full-stack mobile
                app that uses a maps API to geo-locate empty lots near you and
                overlays an augmented reality lens over to visualize a better
                re-purpose. I also worked with React Native, React, Firebase,
                JavaScript, Snap Lens Studio, Blender, Adobe Suite, Asana, and
                many more.
              </p>
            </div>
          </div>

          {/* Second Item */}
          <div className="flex flex-col md:flex-row items-center p-10">
            <Image
              src={axiosLogo} // Update with your second image path
              alt="Description of Second Image"
              className="w-full md:w-1/2 object-cover h-auto"
            />
            <div className="text">
              <p className="mt-4 p-5 block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                As a full-time software engineering intern at Axios Media, I
                contributed directly to their production application. As a
                front-end software engineer, I used technologies such as React,
                Next js, Typescript, Tailwind, Jira, Agile, and many others. I
                collaborated with team members on multiple projects, improving
                efficiency and code quality and developing new components for
                the Axios application. I planned, built, deployed, and tested
                various components for their production site using Github,
                Circle Ci, Docker, and Jira.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
