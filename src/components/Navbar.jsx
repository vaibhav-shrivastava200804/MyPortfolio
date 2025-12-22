import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-primary/80 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wide text-accent"
        >
          Vaibhav<span className="text-white">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition ${
                  active === link.id
                    ? "text-accent"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-secondary border-t border-white/10">
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`${
                  active === link.id
                    ? "text-accent"
                    : "text-gray-300"
                }`}
              >
                {link.name}
              </a>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
