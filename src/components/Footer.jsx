export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Vaibhav Shrivastava
          </h3>
          <p className="mt-2 text-sm">
            Frontend Developer crafting modern, responsive and scalable web
            experiences.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-accent">About</a></li>
            <li><a href="#projects" className="hover:text-accent">Projects</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/vaibhav-shrivastava200804"
                target="_blank"
                className="hover:text-accent"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vaibhav-shrivastava-081424316/"
                target="_blank"
                className="hover:text-accent"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:vaibhavshrivastava.dev@gmail.com"
                className="hover:text-accent"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs border-t border-white/10 py-4">
        © {new Date().getFullYear()} Vaibhav Shrivastava. All rights reserved.
      </div>
    </footer>
  );
}
