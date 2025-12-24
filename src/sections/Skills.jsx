export const Skills = () => {
  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-16 2xl:py-24">
        <div className="">
          {/* Section label */}
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
            Skills
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">
            Tools & Technologies
          </h2>

          {/* Flex wrapper */}
          <div className="mt-10 flex flex-wrap justify-between gap-6">
            <SkillCard
              title="Frontend"
              skills={[
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
              ]}
            />

            <SkillCard
              title="Backend"
              skills={[
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                { name: "REST APIs", icon: "https://img.icons8.com/ios-filled/50/api.png" },
              ]}
            />

            <SkillCard
              title="Database & Tools"
              skills={[
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "SQL (Basics)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- Skill Card (Flex-based) ---------------- */

const SkillCard = ({ title, skills }) => {
  return (
    <div
      className="
        flex flex-col
        w-full sm:w-[48%] lg:w-[31%]
        rounded-xl border border-slate-800
        bg-slate-900/50 p-6
        hover:border-teal-500 transition-colors
      "
    >
      <h3 className="mb-4 text-lg font-semibold text-slate-100">
        {title}
      </h3>

      <ul className="flex flex-col gap-3">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-3 text-slate-300"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="h-6 w-6"
              loading="lazy"
            />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
