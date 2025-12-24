export const Hero = () => {
  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-10 2xl:py-30">

        <div className="max-w-3xl">
          {/* Small intro */}
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
            Hi, I’m Sam 👋
          </span>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-100 leading-tight">
            MERN Stack Developer
            <br />
            building modern web apps
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            I design and build scalable, performant web applications using
            React, Node.js, Express, MongoDB, and modern UI practices.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-7 py-3 text-base font-medium rounded-md
                         bg-teal-500 text-white hover:bg-teal-400 transition-colors"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 text-base font-medium rounded-md
                         border border-slate-700 text-slate-200
                         hover:border-teal-400 hover:text-teal-400 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
