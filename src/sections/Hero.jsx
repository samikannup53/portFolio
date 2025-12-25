import ProfileImage from "../assets/ProfileImage.png";

export const Hero = () => {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      {/* Subtle background glitters */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute top-20 left-20 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl" />

        <span className="hidden xl:absolute top-1/3 right-1/4 w-40 h-40 bg-white rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-16 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – Text content */}
          <div className="max-w-xl mx-auto lg:max-w-3xl text-center lg:text-left">
            <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
              Hi, I’m Sami 👋
            </span>

            <h1 className="text-4xl  xl:text-6xl font-semibold tracking-tight text-slate-100 leading-tight ">
              MERN Stack Developer building modern web apps
            </h1>

            <p className="mt-8 text-lg text-slate-400 leading-relaxed">
              I design and build scalable, performant web applications using
              React, Node.js, Express, MongoDB, and modern UI practices.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/"
                className="w-full sm:w-auto px-7 py-3 text-base font-medium rounded-md
                           bg-teal-500 text-white hover:bg-teal-400 transition-colors"
              >
                View Projects
              </a>

              <a
                href="/"
                className="w-full sm:w-auto px-7 py-3 text-base font-medium rounded-md
                           border border-slate-700 text-slate-200
                           hover:border-teal-400 hover:text-teal-400 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT – Profile image */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="
                relative
                w-72 h-72
                sm:w-80 sm:h-80
                md:w-[420px] md:h-[420px]
                xl:w-[520px] lg:h-[520px]
                2xl:w-[620px] xl:h-[620px]
              "
            >
              {/* subtle frame */}
              <div className="absolute inset-0 rounded-2xl border border-slate-800 bg-slate-900/30" />

              <img
                src={ProfileImage}
                alt="Sam – MERN Stack Developer"
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover object-top
                  rounded-2xl
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
