import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <Image
        src="/profile.jpg"
        width={150}
        height={150}
        alt="Profile Image"
        className="rounded-full shadow-lg"
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

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
