import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = ({
  homeRef,
  aboutRef,
  skillsRef,
  projectsRef,
  experienceRef,
  contactRef,
}) => {
  const [open, setOpen] = useState(false);

  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navItems = [
    ["Home", homeRef],
    ["About", aboutRef],
    ["Skills", skillsRef],
    ["Projects", projectsRef],
    ["Experience", experienceRef],
    ["Contact", contactRef],
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 py-5 2xl:py-6 flex items-center justify-between">

        {/* LEFT – Logo */}
        <h1
          onClick={() => scrollTo(homeRef)}
          className="text-3xl font-semibold tracking-tight cursor-pointer text-slate-100"
        >
          Sam
        </h1>

        {/* CENTER – Nav (Desktop) */}
        <ul className="hidden lg:flex items-center gap-12 text-base font-medium text-slate-300">
          {navItems.map(([label, ref]) => (
            <li
              key={label}
              onClick={() => scrollTo(ref)}
              className="relative cursor-pointer transition-colors hover:text-slate-100
                         after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0
                         after:bg-teal-400 after:transition-all after:duration-300
                         hover:after:w-full"
            >
              {label}
            </li>
          ))}
        </ul>

        {/* RIGHT – CTA (Desktop) */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollTo(contactRef)}
            className="px-6 py-2.5 text-base font-medium rounded-md
                       bg-teal-500 text-white hover:bg-teal-400 transition-colors"
          >
            Resume
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-slate-200"
          aria-label="Toggle navigation"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800">
          <ul className="flex flex-col px-6 py-6 gap-7 text-lg font-medium text-slate-300">
            {navItems.map(([label, ref]) => (
              <li
                key={label}
                onClick={() => scrollTo(ref)}
                className="cursor-pointer hover:text-teal-400 transition-colors"
              >
                {label}
              </li>
            ))}

            {/* Mobile CTA */}
            <button
              onClick={() => scrollTo(contactRef)}
              className="mt-5 px-5 py-2.5 rounded-md bg-teal-500 text-white hover:bg-teal-400 transition-colors"
            >
              Resume
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};
