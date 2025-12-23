import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-primary text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent blur-3xl" />

      <div className="relative max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative p-10 md:p-4">
            <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl" />
            <img
              src="/profile.jpeg"
              alt="Vaibhav Shrivastava"
              className="relative w-44 h-44 md:w-80 md:h-80 object-cover rounded-full border-4 border-accent"
            />
          </div>
        </motion.div>

        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Frontend Developer crafting
            <span className="text-accent"> beautiful & responsive </span>
            web experiences
          </motion.h1>

          <p className="mt-6 text-gray-300 text-lg">
            ReactJS • Tailwind CSS • UI/UX Focused • Performance Driven
          </p>

          <div className="mt-8 flex gap-6 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              className="px-6 py-3 bg-accent text-black rounded-lg shadow-glow hover:scale-105 transition"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-accent rounded-lg hover:bg-accent hover:text-black transition"
            >
              View Projects
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
