import FlytixBanner from "../assets/FlytixBanner.png";
import KanbanBanner from "../assets/KanbanBanner.png";
import NotesApkBanner from "../assets/NotesApkBanner.png";
import MovieScapeBanner from "../assets/MoviscapBanner.png";
import AuthFlowBanner from "../assets/AuthFlowBanner.png";
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
      "FlyTix is a modern flight booking system that enables users to search, compare, and reserve flights with real-time updates and secure payments. Designed with a clean UI, efficient backend, and Razorpay integration, it's perfect for learning and demonstrating full-stack web development using React, Node.js, Express, MongoDB, and Tailwind CSS.",

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
    githubLinkFrontend: "https://github.com/samikannup53/FlyTix-Frontend",
    githubLinkBackend: "https://github.com/samikannup53/FlyTix-Backend",
  },

  {
    id: "kanban",
    title: "Kanban Board",
    type: "Frontend Application",
    banner: KanbanBanner,

    shortDescription:
      "Task management app with a clean UI and workflow-based task organization.",

    description:
      "A Kanban-style task management app built with React JS and TailwindCSS. Easily create, organize, and move tasks across columns like To Do, In Progress, and Done, with drag-and-drop support and local persistence.",

    tech: ["React", "Tailwind CSS"],

    liveLink: "https://sami-kanbanboard.netlify.app/",
    githubLink: "https://github.com/samikannup53/kanbanBOARD",
  },

  {
    id: "notesapk",
    title: "notesAPK",
    type: "Frontend Application",
    banner: NotesApkBanner,

    shortDescription:
      "Lightweight notes app built with React, featuring local storage and a clean, minimal UI.",

    description:
      "notesAPK is a lightweight notes management application built using React and Tailwind CSS. It allows users to create, edit, pin, archive, search, and organize notes using tags, with all data stored locally in the browser using localStorage for a fast and offline-friendly experience.",

    tech: ["React", "Tailwind CSS"],

    liveLink: "https://sami-notesapk.netlify.app/",
    githubLink: "https://github.com/samikannup53/notesAPK.git",
  },

  {
    id: "moviescape",
    title: "movieSCAPE",
    type: "Frontend Application",
    banner: MovieScapeBanner,

    shortDescription: "Movie search application powered by an OMDB API.",

    description:
      "A Full Featured Movie Search Application using React that Integrates with OMDB API & Allow users to Search and View Details about Movie and Manage Favourite Lists.",

    tech: ["React", "OMDB API", "Tailwind CSS"],

    liveLink: "https://sami-moviescape.netlify.app/",
    githubLink: "https://github.com/samikannup53/movieSCAPE",
  },

  {
    id: "authflow",
    title: "AuthFlow",
    type: "Backend System",
    banner: AuthFlowBanner,

    shortDescription: "Reusable authentication system with JWT-based security.",

    description:
      "AuthFlow is a secure, server-rendered Node.js application that handles user authentication and authorization using Bearer tokens (JWT). Built with the MVC architecture and EJS templating, it supports user registration, login, logout, and protected pages with personalized content. Ideal for learning or demonstrating token-based authentication in server-side rendered apps using Express, Mongoose, and JWT.",

    tech: ["Node.js", "Express", "MongoDB", "JWT"],

    liveLink: "https://myauthflow.onrender.com/",
    githubLink: "https://github.com/samikannup53/AuthFlow",
  },

  {
    id: "kitechn",
    title: "KiTechn API",
    type: "Backend API",
    banner: KiTechnBanner,

    shortDescription: "CRUD-based REST API for managing recipes.",

    description:
      "KiTechnAPI is a simple and clean CRUD application designed to manage recipes efficiently. Built with Node.js, Express, and Mongoose (MongoDB) and It follows the MVC architecture and Uses Postman for API testing and documentation and Tailwind for UI.",

    tech: ["Node.js", "Express", "MongoDB"],

    liveLink: "https://kitechnapi.onrender.com/",
    githubLink: "https://github.com/samikannup53/KiTechnAPI",
  },
];
