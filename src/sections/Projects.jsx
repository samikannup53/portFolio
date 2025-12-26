import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { projectsData } from "../data/projects";

export const Projects = () => {
  return (
    <section className="bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-16 2xl:py-24">
        <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
          Projects
        </span>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">
          Things I’ve Built
        </h2>

        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{
              delay: 3500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const { title, type, banner } = project;

  return (
    <div className="group cursor-pointer flex flex-col">
      <div className="relative h-[260px] overflow-hidden rounded-lg">
        <img
          src={banner}
          alt={title}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-100 group-hover:text-teal-400 transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-sm text-slate-400">{type}</p>
      </div>
    </div>
  );
};
