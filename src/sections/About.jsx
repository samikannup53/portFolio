import { Code2, GraduationCap, BriefcaseBusiness } from "lucide-react";

export const About = () => {
  return (
    <section className="relative bg-slate-900/50 overflow-hidden">
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute -top-24 -right-24 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* LEFT – Heading */}
          <div className="w-full lg:w-5/12 lg:pr-12">
            <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
              About Me
            </span>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-tight text-slate-100 leading-tight">
              Building products with{" "}
              <span className="text-teal-400">Code & Clarity</span>
            </h2>

            <div className="mt-8 h-px w-32 bg-gradient-to-r from-teal-400 to-transparent" />
          </div>

          {/* RIGHT – Content */}
          <div className="w-full lg:w-7/12 space-y-8 text-slate-400 leading-relaxed">
            {/* Block 1 */}
            <div className="group flex gap-5 items-start">
              <span className="relative shrink-0">
                {/* halo */}
                <span className="absolute inset-0 -z-10 rounded-full scale-125 opacity-0 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150" />

                {/* icon */}
                <span className="flex items-center justify-center rounded-full p-3 bg-gradient-to-br from-teal-500/20 to-cyan-400/20 transition-colors duration-300 group-hover:from-teal-500/40 group-hover:to-cyan-400/40">
                  <Code2 className="h-5 w-5 text-teal-400" />
                </span>
              </span>

              <p>
                I’m a Full Stack MERN Developer with hands-on experience in
                building responsive and user-friendly web applications using
                React, Node.js, Express, and MongoDB. I enjoy working across the
                full stack, from creating clean UI components to developing
                RESTful APIs.
              </p>
            </div>

            {/* Block 2 */}
            <div className="group flex gap-5 items-start">
              <span className="relative shrink-0">
                <span className="absolute inset-0 -z-10 rounded-full scale-125 opacity-0 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 transition-all duration-300  group-hover:opacity-100 group-hover:scale-150" />

                <span className="flex items-center justify-center rounded-full p-3 bg-gradient-to-br from-indigo-500/20 to-purple-400/20 transition-colors duration-300 group-hover:from-indigo-500/40 group-hover:to-purple-400/40">
                  <BriefcaseBusiness className="h-5 w-5 text-indigo-400" />
                </span>
              </span>

              <p>
                Before moving into software development, I worked for over 2
                years as a Transaction Processing Officer in investment banking
                operations. This experience strengthened my attention to detail,
                problem-solving mindset, and comfort with process-driven
                systems.
              </p>
            </div>

            {/* Block 3 */}
            <div className="group flex gap-5 items-start">
              <span className="relative shrink-0">
                <span className="absolute inset-0 -z-10 rounded-full scale-125 opacity-0 bg-gradient-to-br from-amber-400/30 to-orange-400/30 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150" />

                <span className="flex items-center justify-center rounded-full p-3 bg-gradient-to-br from-amber-500/20 to-orange-400/20 transition-colors duration-300 group-hover:from-amber-500/40 group-hover:to-orange-400/40">
                  <GraduationCap className="h-5 w-5 text-amber-400" />
                </span>
              </span>

              <p>
                I recently completed Full Stack Development with AI Tools
                certification from GUVI (IIT-M Pravartak) and transitioned into
                IT with a strong interest in building real-world applications.
                I’m currently looking for an entry-level MERN / Full Stack
                Developer role where I can learn, grow, and contribute to
                impactful projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
