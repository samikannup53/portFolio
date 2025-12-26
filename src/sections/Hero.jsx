import ProfileImage from "../assets/ProfileImage.png";

export const Hero = ({ projectsRef, contactRef }) => {
  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Subtle background glitters */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute top-20 left-20 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl" />
        <span className="absolute top-1/6 right-1/5 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-14 sm:py-16 xl:py-10 2xl:py-26">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* LEFT – Text */}
          <div className="max-w-xl lg:max-w-3xl xl:max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
              Hi, I’m Sami 👋
            </span>

            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight text-slate-100 leading-tight">
              MERN Stack Developer building modern web apps
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
              I design and build scalable, performant web applications using
              React, Node.js, Express, MongoDB, and modern UI practices.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo(projectsRef)}
                className="w-full sm:w-auto px-7 py-3 text-base font-medium rounded-md
                           bg-teal-500 text-white hover:bg-teal-400 transition-colors cursor-pointer"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollTo(contactRef)}
                className="w-full sm:w-auto px-7 py-3 text-base font-medium rounded-md
                           border border-slate-700 text-slate-200
                           hover:border-teal-400 hover:text-teal-400 transition-colors cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* RIGHT – Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="
                relative
                w-64 h-64
                sm:w-72 sm:h-72
                md:w-80 md:h-80
                lg:w-[420px] lg:h-[400px]
                xl:w-[480px] xl:h-[480px]
                2xl:w-[600px] 2xl:h-[600px]
              "
            >
              {/* subtle frame */}
              <div className="absolute inset-0 rounded-2xl border border-slate-800" />

              <img
                src={ProfileImage}
                alt="Sam – MERN Stack Developer"
                className="absolute inset-0 w-full h-full object-cover object-top rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
