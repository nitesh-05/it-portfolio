import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <Image
        src="/profile.jpg"
        width={150}
        height={150}
        alt="Profile"
        className="rounded-full shadow-lg"
      />
      <h1 className="text-4xl font-bold mt-6">Hi, I’m Nitesh Kumar 👋</h1>
      <p className="text-gray-500 mt-3 max-w-xl">
        A passionate Frontend Developer specializing in React, Next.js, and
        modern web technologies.
      </p>
      <div className="mt-6 space-x-4">
        <Link
          href="/projects"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
        >
          Contact Me
        </Link>
      </div>
    </main>
  );
}
