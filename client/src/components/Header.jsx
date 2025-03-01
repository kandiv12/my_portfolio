import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.logo}>VK</span>
        <Link to="/" className={styles.siteName}>
          Vamshidhar
        </Link>
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink}>
              <i className="fas fa-user"></i> About Me
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.navLink}>
              <i className="fas fa-envelope"></i> Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
