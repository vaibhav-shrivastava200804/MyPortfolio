const skills = {
  Frontend: ["ReactJS", "Redux", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  Backend: ["NodeJS", "MongoDB", "MySQL"],
  Languages: ["C", "C++", "Python"],
  Other: ["REST APIs", "Git & GitHub", "Data Structures", "Communication Skills"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-accent">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, list]) => (
            <div
              key={category}
              className="bg-secondary rounded-xl p-6 shadow-lg hover:shadow-glow transition"
            >
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-2 text-gray-300">
                {list.map(skill => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
