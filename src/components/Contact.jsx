export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-accent">Contact</h2>

        <p className="text-gray-300 mb-6 leading-relaxed">
          📧 Email:{" "}
          <a
            href="mailto:vaibhav2000804@gmail.com"
            className="text-accent hover:underline"
          >
            vaibhav2000804@gmail.com
          </a>
          <br />
          📞 Phone:{" "}
          <a
            href="tel:+918957773009"
            className="text-accent hover:underline"
          >
            +91 89577 73009
          </a>
          <br />
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/vaibhav-shrivastava-081424316/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline mr-3"
          >
            LinkedIn
          </a>
          |
          <a
            href="https://github.com/vaibhav-shrivastava200804"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-3"
          >
            GitHub
          </a>
        </p>

        <form className="grid gap-4 max-w-xl">
          <input
            className="p-3 rounded bg-secondary outline-none focus:ring-2 focus:ring-accent"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="p-3 rounded bg-secondary outline-none focus:ring-2 focus:ring-accent"
            placeholder="Email"
            required
          />
          <textarea
            className="p-3 rounded bg-secondary outline-none focus:ring-2 focus:ring-accent"
            placeholder="Message"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-accent text-black py-3 rounded shadow-glow hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
