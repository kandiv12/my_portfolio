import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.logo}>VK</span>
        <NavLink to="/" className={styles.siteName}>
          Vamshidhar
        </NavLink>
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
            >
              <i className="fas fa-home"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
            >
              <i className="fas fa-briefcase"></i> Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
            >
              <i className="fas fa-user"></i> About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
            >
              <i className="fas fa-envelope"></i> Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
