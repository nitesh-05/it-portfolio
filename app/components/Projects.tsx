const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built using Next.js & Tailwind CSS.",
  },
  {
    title: "E-commerce UI",
    description: "Modern shopping UI built with React & Redux.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="border p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-bold">{proj.title}</h3>
            <p className="text-gray-600 mt-2">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
