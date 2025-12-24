export const Contact = () => {
  return (
    <section className="bg-slate-900">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-16 2xl:py-24">
        <div className="max-w-3xl">
          {/* Section label */}
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
            Contact
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">
            Let’s Get in Touch
          </h2>

          {/* Description */}
          <p className="mt-6 text-slate-400 leading-relaxed">
            I’m currently looking for entry-level MERN / Full Stack Developer
            opportunities. If you’d like to discuss a role, project, or just
            connect, feel free to reach out.
          </p>

          {/* Contact details */}
          <div className="mt-8 flex flex-col gap-4">
            <a
              href="mailto:samikannup53@gmail.com"
              className="inline-flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors"
            >
              <span className="text-lg">📧</span>
              <span>samikannup53@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/samikannup53/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors"
            >
              <span className="text-lg">💼</span>
              <span>LinkedIn Profile</span>
            </a>

            <a
              href="https://github.com/samikannup53"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors"
            >
              <span className="text-lg">🐙</span>
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
