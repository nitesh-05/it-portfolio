const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Git & GitHub",
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 border rounded-lg text-gray-700 bg-gray-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
