import Image from "next/image";
import React from "react";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function ProjectCard({ projectItems }) {
  const renderItems = projectItems.map(
    ({ title, image, description, github, live, tech }, key) => (
      <div
        className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
        key={key}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h5 className="block font-sans text-2xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              {title}
            </h5>
          </div>

          <div className="flex items-center justify-between mb-3 pt-5">
            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              Description
            </h5>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            {description}
          </p>

          <div className="flex items-center justify-between mb-3 pt-5">
            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              Technology Used
            </h5>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            {tech}
          </p>

          <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
            {github ? (
              <Link href={github}>
                <span className=" p-3 ">
                  <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                    <p className="pr-4 block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                      GitHub
                    </p>
                    {React.createElement(FaGithubSquare, {
                      className: "h-6 text-gray-900 w-6",
                    })}
                  </div>
                </span>
              </Link>
            ) : null}

            {live ? (
              <Link href={live}>
                <span className="p-3">
                  <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                    <p className="pr-4 block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                      Deployed Link
                    </p>
                    {React.createElement(FaExternalLinkAlt, {
                      className: "h-6 text-gray-900 w-6",
                    })}
                  </div>
                </span>
              </Link>
            ) : null}

            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <Image
                src={image}
                alt="ui/ux review check"
                height={300}
                width={400}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );

  return <>{renderItems}</>;
}
