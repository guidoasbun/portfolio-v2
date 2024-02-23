import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold">Home Page</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
