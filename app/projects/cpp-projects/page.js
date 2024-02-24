import ProjectCard from "@/components/project-card/project-card";
import cppProjectList from "@/assets/project-lists/cppProjects.js";

export default function CppProjects() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-2">
      <h1 className="text-3xl font-bold p-4">C++ Projects</h1>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-5 rounded-lg shadow-lg max-w-auto mx-auto my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard projectItems={cppProjectList} />
          </div>
        </div>
      </div>
    </main>
  );
}
