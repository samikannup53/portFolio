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
        <section ref={homeRef}><Hero /></section>
        <section ref={aboutRef}><About /></section>
        <section ref={skillsRef}><Skills /></section>
        <section ref={projectsRef}><Projects /></section>
        <section ref={experienceRef}><Experience /></section>
        <section ref={contactRef}><Contact /></section>
      </main>

      <Footer />
    </>
  );
};
