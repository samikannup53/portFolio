export const Projects = () => {
  return (
    <section className="bg-slate-900">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-16 2xl:py-24">
        <div className="max-w-5xl">
          {/* Section label */}
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
            Projects
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">
            Things I’ve Built
          </h2>

          {/* Projects wrapper */}
          <div className="mt-10 flex flex-wrap gap-6">
            <ProjectCard
              title="FlyTix – Flight Ticket Booking System"
              description="A MERN stack web application that allows users to search flights, select trip type, make secure payments using Razorpay, and receive real-time booking confirmation emails."
              tech={["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Razorpay", "Nodemailer"]}
              liveLink="https://flytix.netlify.app"
              githubLink="https://github.com/samikannup53"
            />

            {/* You can add more ProjectCard components here later */}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- Project Card ---------------- */

const ProjectCard = ({ title, description, tech, liveLink, githubLink }) => {
  return (
    <div
      className="
        flex flex-col justify-between
        w-full sm:w-[48%] lg:w-[31%]
        rounded-xl border border-slate-800
        bg-slate-950/50 p-6
        hover:border-teal-500 transition-colors
      "
    >
      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-slate-100">
          {title}
        </h3>

        <p className="mt-4 text-slate-400 leading-relaxed">
          {description}
        </p>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center gap-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-teal-400 hover:underline"
        >
          Live Demo
        </a>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-slate-300 hover:text-teal-400"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
