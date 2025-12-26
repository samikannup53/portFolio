import { Link } from "react-router-dom";
import { experienceData } from "../data/experience";

export const Experience = () => {
  return (
    <div className="bg-slate-900/50">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-16">
        {/* Section label */}
        <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
          Experience
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Professional Experience
        </h2>

        <div className="mt-8 h-px w-32 bg-gradient-to-r from-teal-400 to-transparent" />

        {/* Experience cards */}
        {experienceData.map((exp) => (
          <ExperienceCard key={exp.company} exp={exp} />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <span className="h-0.5 w-32 bg-gradient-to-r from-transparent to-teal-300 rounded-full" />
        <span className="mx-2 bg-teal-300 h-2.5 w-3 rounded-tr-md rounded-bl-md " />
        <span className="h-0.5 w-32 bg-gradient-to-r from-teal-300 to-transparent rounded-full" />
      </div>
    </div>
  );
};

const ExperienceCard = ({ exp }) => {
  return (
    <Link
      to={exp.website}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block mt-10 rounded-xl border border-slate-800 bg-slate-950/50 p-6 transition-colors hover:border-teal-500
      "
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="flex items-start sm:items-center gap-3">
          {/* Logo */}
          <span className="flex items-center justify-center">
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="w-10 object-contain"
              loading="lazy"
            />
          </span>

          <div>
            <h3 className="text-lg font-semibold">{exp.role}</h3>
            <p className="mt-1 text-sm text-slate-400">
              {exp.company} · {exp.location}
            </p>
          </div>
        </div>

        <span className="text-sm text-slate-400">{exp.duration}</span>
      </div>

      {/* Description */}
      {exp.description.map((text, idx) => (
        <p key={idx} className="mt-4 text-slate-400 leading-relaxed">
          {text}
        </p>
      ))}
    </Link>
  );
};
