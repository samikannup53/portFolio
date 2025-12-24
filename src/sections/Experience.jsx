export const Experience = () => {
  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-16 2xl:py-24">
        <div>
          {/* Section label */}
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
            Experience
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">
            Professional Experience
          </h2>

          {/* Experience card */}
          <div
            className="
              mt-10 rounded-xl border border-slate-800
              bg-slate-900/50 p-6
              hover:border-teal-500 transition-colors
            "
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-lg font-semibold text-slate-100">
                Transaction Processing Officer
              </h3>
              <span className="text-sm text-slate-400">
                Aug 2019 – Oct 2021
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-400">
              Mphasis Ltd · Investment Banking Operations
            </p>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Handled new account opening and supporting document updates.
              Supported the team by assigning daily work, training new joiners,
              answering emails, preparing daily reports, and performing basic
              quality checks when required. Awarded “Spirit of Winning” for
              achieving 100% quality and production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
