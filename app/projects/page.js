"use client";
import projectMenuItems from "@/assets/projectMenuItems";
import ActionButton from "@/components/action-button/action-button";

export default function Projects() {
  const renderItems = projectMenuItems.map(
    ({ title, icon, link, description }, key) => (
      <div className="flex flex-col md:flex-row items-center p-2" key={key}>
        <div className="flex-grow mt-6">
          <ActionButton
            title={title}
            icon={icon}
            link={link}
            description={description}
          />
        </div>
      </div>
    )
  );

  return (
    <main className="mx-auto max-w-screen-xl px-4 py-2">
      <h1 className="text-3xl font-bold p-4">Projects</h1>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-5 rounded-lg shadow-lg max-w-auto mx-auto my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderItems}
          </div>
        </div>
      </div>
    </main>
  );
}
