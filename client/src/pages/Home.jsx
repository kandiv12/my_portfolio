import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <div className={styles.textContent}>
          <h3 className={styles.welcome}>👋 Welcome to My Portfolio!</h3>
          <h2 className={styles.name}>
            Hi, I'm <span className={styles.highlight}>Vamshidhar Kandi</span>
          </h2>
          <p className={styles.description}>
            A passionate{" "}
            <span className={styles.gradientText}>Full-Stack Developer</span>
            with a strong background in building scalable and efficient web
            applications. I specialize in crafting secure, high-performance
            solutions using{" "}
            <span className={styles.gradientText}>
              MERN Stack, Java Spring Boot,
            </span>
            and{" "}
            <span className={styles.gradientText}>Python Flask/Django.</span>
          </p>
          <p className={styles.description}>
            With expertise across front-end, back-end, and cloud technologies, I
            ensure seamless user experiences and robust server-side
            functionality.
          </p>

          <h3 className={styles.skillsHeader}>
            🚀 Technical Skills & Expertise
          </h3>
          <ul className={styles.skillsList}>
            <li>
              💻 <strong>Programming:</strong> Python, JavaScript (ES6+), Java
            </li>
            <li>
              🎨 <strong>Front-End:</strong> React.js, Redux, JavaScript,
              Bootstrap, HTML5, CSS
            </li>
            <li>
              🛠 <strong>Back-End:</strong> Node.js, Express.js, Flask, Django,
              Spring, Spring Boot
            </li>
            <li>
              🔗 <strong>API & Authentication:</strong> RESTful APIs, JWT,
              OAuth2, Postman
            </li>
            <li>
              📊 <strong>Databases:</strong> PostgreSQL, SQLite, MySQL, MongoDB,
              JPA, Hibernate
            </li>
            <li>
              ☁ <strong>Cloud & DevOps:</strong> AWS, Docker, Git, GitHub
              Actions, Jenkins
            </li>
          </ul>

          <p className={styles.ctaText}>
            I love tackling challenges and building innovative solutions. Check
            out my{" "}
            <a href="/projects" className={styles.ctaLink}>
              projects
            </a>
            , read my{" "}
            <a href="/blog" className={styles.ctaLink}>
              blogs
            </a>
            , or
            <a href="/contact" className={styles.ctaLink}>
              {" "}
              get in touch!
            </a>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/images/portfolio.svg"
            alt="Web Development"
            className={styles.heroImage}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
