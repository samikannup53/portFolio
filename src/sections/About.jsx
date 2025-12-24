export const About = () => {
  return (
    <section className="bg-slate-900/50">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-16 2xl:py-24">
        <div className="">
          {/* Section label */}
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
            About Me
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">
            Passionate MERN Stack Developer
          </h2>

          {/* Description */}
          <div className="mt-6 space-y-4 text-slate-400 leading-relaxed">
            <p>
              I’m a Full Stack MERN Developer with hands-on experience in building
              responsive and user-friendly web applications using React, Node.js,
              Express, and MongoDB. I enjoy working across the full stack, from
              creating clean UI components to developing RESTful APIs.
            </p>

            <p>
              Before moving into software development, I worked for over 2 years
              as a Transaction Processing Officer in investment banking
              operations. This experience helped me develop strong attention to
              detail, problem-solving skills, and the ability to work with
              process-driven systems.
            </p>

            <p>
              I recently completed Full Stack Development with AI Tools
              certification from GUVI (IIT-M Pravartak) and transitioned into IT
              with a strong interest in building real-world applications. I’m
              currently looking for an entry-level MERN / Full Stack Developer
              role where I can learn, grow, and contribute to impactful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
