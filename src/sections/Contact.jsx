import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, ArrowUpRight, FileText } from "lucide-react";

export const Contact = () => {
  return (
    <section className="bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-8 xl:py-28 2xl:py-32">

      
        {/* Wrapper */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT – Content */}
          <div className="w-full lg:w-1/2 max-w-xl">
            <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
              Get in Touch
            </span>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">
              Let’s build something together
            </h2>

            <div className="mt-8 h-px w-32 bg-gradient-to-r from-teal-400 to-transparent" />

            <p className="mt-6 text-slate-400 leading-relaxed">
              I’m currently looking for entry-level MERN / Full Stack Developer
              opportunities. If you’d like to discuss a role, a project, or just
              connect, feel free to reach out.
            </p>
          </div>

          {/* RIGHT – Contact cards */}
          <div className="w-full lg:w-1/2 flex flex-wrap gap-6">
            <ContactCard
              href="mailto:samikannup53@gmail.com"
              icon={Mail}
              title="Email"
              value="samikannu.dev@gmail.com"
            />

            <ContactCard
              href="https://www.linkedin.com/in/samikannup53/"
              icon={Linkedin}
              title="LinkedIn"
              value="Connect with me"
              external
            />

            <ContactCard
              href="https://github.com/samikannup53"
              icon={Github}
              title="GitHub"
              value="View my work"
              external
            />

            <ContactCard
              href="/resume.pdf"
              icon={FileText}
              title="Resume"
              value="Download PDF"
              external
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* Contact Card                                                               */
/* -------------------------------------------------------------------------- */

const ContactCard = ({ icon: Icon, title, value, href, external }) => {
  return (
    <Link
      to={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
        group flex w-full sm:w-[48%]
        rounded-xl border border-slate-800
        bg-slate-950/40 p-6
        transition-all duration-300
        hover:border-teal-500 hover:-translate-y-1
      "
    >
      <div className="flex items-center gap-4">
        {/* Icon */}
        <span
          className="
            flex p-2 items-center justify-center rounded-full
            bg-gradient-to-br from-teal-500/20 to-cyan-400/20
            transition-colors duration-300
            group-hover:from-teal-500/40 group-hover:to-cyan-400/40
          "
        >
          <Icon className="h-5 w-5 text-teal-400" />
        </span>

        {/* Text */}
        <div>
          <p className="text-sm font-medium text-slate-200">
            {title}
          </p>
          <p className="text-sm text-slate-400 flex items-center gap-1">
            {value}
            {external && (
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};
