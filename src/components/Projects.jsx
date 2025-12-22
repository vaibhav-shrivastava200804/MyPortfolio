import { projects } from "../data/project";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-accent">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div
              key={project.title}
              className="bg-secondary p-6 rounded-xl shadow-lg hover:shadow-glow transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.tech}</p>
              <ul className="text-gray-300 space-y-2">
                {project.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-4 text-accent hover:underline"
                >
                  Live Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
