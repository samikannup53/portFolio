import { skillsData } from "../data/skills";

export const Skills = () => {
  return (
    <div className="bg-slate-900/50">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-16">
        {/* Section label */}
        <span className="block mb-4 text-sm font-medium tracking-wide text-teal-400 sm:text-center">
          Skills
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight sm:text-center">
          Tools & Technologies
        </h2>

        <div className="flex justify-center">
          <span className="mt-8 h-px w-32 bg-gradient-to-r from-teal-400 to-transparent" />
        </div>

        {/* Cards */}
        <div className="mt-10 flex flex-wrap justify-center 2xl:justify-between  gap-6">
          {skillsData.map((group) => (
            <SkillCard
              key={group.category}
              title={group.category}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ title, skills }) => {
  return (
    <div
      className="
        flex flex-col
        w-full sm:w-[48%] xl:w-[32%]
        rounded-xl border border-slate-800
        bg-slate-950/50 p-6
        transition-colors hover:border-teal-500
      "
    >
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>

      <ul className="flex flex-col gap-4">
        {skills.map((skill) => (
          <li key={skill.name} className="space-y-2">
            {/* Row */}
            <div className="flex items-center gap-3 text-slate-300">
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-6 w-6 shrink-0"
                loading="lazy"
              />

              <span className="text-sm font-medium w-28">{skill.name}</span>
              <div className="h-1 w-full rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-teal-400 transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Percentage */}
              <span className="ml-auto text-xs text-slate-400">
                {skill.level}%
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
