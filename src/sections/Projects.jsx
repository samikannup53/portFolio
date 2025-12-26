import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Github,
  Layers,
} from "lucide-react";

import { projectsData } from "../data/projects";

export const Projects = () => {
  const swiperRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-14 ">
        {/* Section label */}
        <span className="block mb-4 text-sm font-medium tracking-wide text-teal-400 sm:text-center">
          Projects
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight sm:text-center">
          Things I’ve Built
        </h2>

        <div className="flex justify-center">
          <span className="mt-8 h-px w-32 bg-gradient-to-r from-teal-400 to-transparent" />
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop
            autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
            speed={900}
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  project={project}
                  onClick={() => setActiveProject(project)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-14 flex justify-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-3 rounded-full border border-slate-700 bg-slate-950/40 text-slate-300 transition-all hover:border-teal-400 hover:text-teal-400 hover:bg-teal-400/10 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-3 rounded-full border border-slate-700 bg-slate-950/40 text-slate-300 transition-all hover:border-teal-400 hover:text-teal-400 hover:bg-teal-400/10 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight />
            </button>
          </div>

          {activeProject && (
            <ProjectModal
              project={activeProject}
              onClose={() => setActiveProject(null)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, onClick }) => {
  const { title, type, banner, shortDescription } = project;

  return (
    <div onClick={onClick} className="group cursor-pointer flex flex-col">
      {/* Banner */}
      <div className="relative h-[360px] 2xl:h-[460px] overflow-hidden rounded">
        <img
          src={banner}
          alt={title}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-115"
        />

        {/* Dark theme overlay (always on) */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-100 transition-colors group-hover:text-teal-400">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-400 line-clamp-2">
          {shortDescription}
        </p>

        <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
          {type}
        </p>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  if (!project) return null;

  const { title, banner, description, tech, liveLink, githubLink } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-5xl 2xl:max-w-7xl  overflow-hidden rounded-2xl bg-slate-900 shadow-2xl border border-slate-800 max-h-[80vh] 2xl:max-h-[75vh] flex flex-col">
        {/* Banner */}
        <div className="relative h-55 2xl:h-65 shrink-0">
          <img
            src={banner}
            alt={title}
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {/* Title */}
          <h3 className="text-2xl  font-semibold text-slate-100">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-4 text-slate-400 leading-relaxed ">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="mt-8">
            <div className="mb-3 flex items-center gap-2 text-slate-300 text-sm font-medium">
              <Layers size={16} />
              Tech Stack
            </div>

            <div className="flex flex-wrap gap-3">
              {tech.map((item) => (
                <div
                  key={item.name || item}
                  className="flex items-center gap-2 rounded-lg bg-slate-800/70 px-3 py-2 text-xs text-slate-300 border border-slate-700"
                >
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-4 w-4 object-contain"
                    />
                  )}
                  <span>{item.name || item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-500/90 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-teal-400 transition"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-teal-400 hover:text-teal-400 transition"
              >
                <Github size={16} />
                View Code
              </a>
            )}
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white transition cursor-pointer"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};
