import React from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Workout Tracker Web Application",
    description:
      "A full-stack web application that allows users to log and track their workouts based on geographic location using the Google Maps API. It provides an intuitive UI to visualize workout routes on an interactive map.",
    features: [
      "Location-Based Workout Logging",
      "Workout History with details such as type, duration, and calories burned",
      "Interactive Google Maps Integration for tracking workout locations",
    ],
    tech: ["React", "Google Maps API", "Express.js", "PostgreSQL"],
    image: "/images/workout-tracker.png",
    link: "https://github.com/kandiv12/travel_tracker_google_maps_api",
  },
  {
    title: "Automated Food Delivery Website",
    description:
      "A responsive web application designed to streamline online food ordering. Users can browse restaurant menus, customize their orders, and track delivery status in real-time.",
    features: [
      "Real-time Order Tracking with live updates",
      "Customizable Orders allowing users to select ingredients and preferences",
      "Seamless Frontend-Backend Integration ensuring smooth user experience",
    ],
    tech: ["Node.js", "Express.js", "SQLite", "React", "CSS3", "JavaScript"],
    image: "/images/food-delivery.jpg",
    link: "https://github.com/yourusername/food-delivery",
  },
  {
    title: "Blog Site with User Authentication",
    description:
      "A fully functional blog platform built with Flask that allows users to register, login, and create blog posts. The site is secured using JWT OAuth authentication, ensuring only authorized users can publish and edit posts.",
    features: [
      "User Registration & Secure Login using JWT OAuth",
      "Post Creation, Editing, and Deletion with rich text support",
      "SQLite Database for storing user credentials and blog posts",
    ],
    tech: ["Flask", "JWT OAuth", "SQLite", "HTML5", "CSS", "JavaScript"],
    image: "/images/blog-site.jpg",
    link: "https://github.com/kandiv12/blog-with-users",
  },
  {
    title: "LinkedIn Job Scraper",
    description:
      "A Python-based web scraping tool that extracts job postings from LinkedIn based on user-defined keywords and locations. The extracted data includes job title, company name, location, and application link.",
    features: [
      "Scrapes job postings from LinkedIn based on search criteria",
      "Stores extracted data in a structured format for easy filtering",
      "Automates job searching and reduces manual effort",
    ],
    tech: ["Python", "BeautifulSoup", "Requests", "Pandas"],
    image: "/images/linkedin.png",
    link: "https://github.com/yourusername/linkedin-job-scraper",
  },
  {
    title: "Expense Tracker Application",
    description:
      "A modern expense tracker built with React and TypeScript that allows users to manage their income and expenses efficiently. Features include category-wise tracking, visualization of spending patterns, and budget management.",
    features: [
      "Add, Edit, and Delete Expenses with a simple UI",
      "Visual Analytics using charts for expense breakdown",
      "Local Storage and API support for persistence",
    ],
    tech: ["React", "TypeScript", "CSS"],
    image: "/images/expense.jpeg",
    link: "https://github.com/kandiv12/expenseTracker",
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className={styles.featureList}>
              {project.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <div className={styles.techList}>
              {project.tech.map((tech, i) => (
                <span key={i} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
