import FlytixBanner from "../assets/FlytixBanner.png";
import KanbanBanner from "../assets/FlytixBanner.png";
import MovieScapeBanner from "../assets/MoviscapBanner.png";
import AuthFlowBanner from "../assets/FlytixBanner.png";
import KiTechnBanner from "../assets/KitechnpiBanner.png";

export const projectsData = [
  {
    id: "flytix",
    title: "FlyTix",
    type: "Full Stack Application",
    banner: FlytixBanner,

    shortDescription:
      "Flight ticket booking platform with real-time search and secure payments.",

    description:
      "FlyTix is a full-stack MERN flight booking system that allows users to search flights, choose trip types, complete secure payments using Razorpay, and receive booking confirmations via email.",

    highlights: [
      "Flight search with trip type selection",
      "Razorpay payment integration",
      "Email notifications using Nodemailer",
      "Responsive UI with Tailwind CSS",
    ],

    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Nodemailer",
    ],

    liveLink: "https://flytix.netlify.app",
    githubLink: "https://github.com/samikannup53/FlyTix-Frontend",
  },

  {
    id: "kanban",
    title: "Kanban Board",
    type: "Frontend Application",
    banner: KanbanBanner,

    shortDescription:
      "Task management app with a clean UI and workflow-based task organization.",

    description:
      "A Kanban-style task management application that helps users organize work across different stages using a clean and intuitive interface.",

    highlights: [
      "Column-based task organization",
      "Responsive layout",
      "Reusable React components",
    ],

    tech: ["React", "Tailwind CSS"],

    liveLink: "",
    githubLink: "https://github.com/samikannup53/kanbanBOARD",
  },

  {
    id: "moviescape",
    title: "movieSCAPE",
    type: "Frontend Application",
    banner: MovieScapeBanner,

    shortDescription: "Movie search application powered by an external API.",

    description:
      "movieSCAPE allows users to search for movies and view details using the OMDB API with a simple and responsive interface.",

    highlights: [
      "OMDB API integration",
      "Search & detail views",
      "Clean UI with React",
    ],

    tech: ["React", "OMDB API", "Tailwind CSS"],

    liveLink: "",
    githubLink: "https://github.com/samikannup53/movieSCAPE",
  },

  {
    id: "authflow",
    title: "AuthFlow",
    type: "Backend System",
    banner: AuthFlowBanner,

    shortDescription: "Reusable authentication system with JWT-based security.",

    description:
      "AuthFlow is a backend authentication template built with Node.js and Express, featuring JWT-based authentication and secure API access.",

    highlights: [
      "JWT authentication",
      "Protected routes",
      "Scalable backend structure",
    ],

    tech: ["Node.js", "Express", "MongoDB", "JWT"],

    liveLink: "",
    githubLink: "https://github.com/samikannup53/AuthFlow",
  },

  {
    id: "kitechn",
    title: "KiTechn API",
    type: "Backend API",
    banner: KiTechnBanner,

    shortDescription: "CRUD-based REST API for managing recipes.",

    description:
      "KiTechn API is a RESTful backend service that supports full CRUD operations for recipe management, designed with clean architecture principles.",

    highlights: [
      "RESTful CRUD APIs",
      "MongoDB integration",
      "Postman-tested endpoints",
    ],

    tech: ["Node.js", "Express", "MongoDB"],

    liveLink: "",
    githubLink: "https://github.com/samikannup53/KiTechnAPI",
  },
];
