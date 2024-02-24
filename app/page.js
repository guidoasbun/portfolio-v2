"use client";
import Image from "next/image";
import codingImage from "@/assets/images/coding1.jpeg";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-2">
      <h1 className="text-3xl font-bold p-4">Home Page</h1>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-5 rounded-lg shadow-lg max-w-auto mx-auto my-8">
          <div>
            <Image
              src={codingImage}
              alt="coding image"
              className="h-96 w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
