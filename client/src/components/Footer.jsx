import React from "react";
import styles from "./Footer.module.css"; // Import CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/kandivamshired"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
            alt="GitHub"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/vamshidharkandi61200/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://x.com/reddy_kandi12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
            alt="Twitter"
          />
        </a>
        <a
          href="https://www.instagram.com/vamshidhar5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
            alt="Instagram"
          />
        </a>
      </div>
      <p className={styles.copyright}>© 2024 VK. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
