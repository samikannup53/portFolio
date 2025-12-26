import { useRef } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";
import { Experience } from "../sections/Experience";
import { Contact } from "../sections/Contact";

export const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <> 
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />

      <main>        
        <section ref={homeRef} className="scroll-mt-22"><Hero /></section>
        <section ref={aboutRef} className="scroll-mt-14"><About /></section>
        <section ref={skillsRef} className="scroll-mt-14"><Skills /></section>
        <section ref={projectsRef} className="scroll-mt-14"><Projects /></section>
        <section ref={experienceRef} className="scroll-mt-14"><Experience /></section>
        <section ref={contactRef} className="scroll-mt-14"><Contact /></section>
      </main>

      <Footer />
    </>
  );
};
