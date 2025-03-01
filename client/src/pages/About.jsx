import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Hello, I'm{" "}
            <span className={styles.highlight}>Vamshidhar Kandi</span>
          </h2>
          <h3 className={styles.subtitle}>Welcome to my personal space!</h3>
          <p className={styles.description}>
            I am a Full-Stack Developer with expertise in building scalable,
            high-performance web applications. My skills span across front-end,
            back-end, and cloud technologies, ensuring seamless user experiences
            and robust server-side functionality.
          </p>
          <p className={styles.description}>
            With a deep understanding of MERN Stack, Java Spring Boot, and
            Python Flask/Django, I specialize in designing secure,
            high-performance applications that cater to both business and user
            needs.
          </p>
          <p className={styles.description}>
            I am always eager to explore new technologies, optimize system
            performance, and solve challenging problems. My passion for software
            development drives me to continuously learn, build, and innovate.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/images/taj_short.jpeg"
            alt="Vamshidhar Kandi"
            className={styles.profileImage}
          />
        </div>
      </div>

      {/* Technologies Section - Positioned lower on the page */}
      <div className={styles.techWrapper}>
        <section className={styles.technologies}>
          <h2 className={styles.techTitle}>Technologies I Work With</h2>
          <div className={styles.techIcons}>
            <img
              src="https://img.icons8.com/color/96/000000/html-5.png"
              alt="HTML"
              className={styles.techIcon}
            />
            <img
              src="https://img.icons8.com/color/96/000000/css3.png"
              alt="CSS"
              className={styles.techIcon}
            />
            <img
              src="https://img.icons8.com/color/96/000000/javascript.png"
              alt="JavaScript"
              className={styles.techIcon}
            />
            <img
              src="https://img.icons8.com/color/96/000000/bootstrap.png"
              alt="Bootstrap"
              className={styles.techIcon}
            />
            <img
              src="https://img.icons8.com/plasticine/96/000000/react.png"
              alt="React"
              className={styles.techIcon}
            />
            <img
              src="https://img.icons8.com/color/96/000000/nodejs.png"
              alt="Node.js"
              className={styles.techIcon}
            />
            <img
              src="https://img.icons8.com/color/96/000000/python.png"
              alt="Python"
              className={styles.techIcon}
            />
            <img
              src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png"
              alt="Java"
              className={styles.techIcon}
            />
            <img
              src="https://img.icons8.com/color/96/000000/mysql-logo.png"
              alt="MySQL"
              className={styles.techIcon}
            />
            <img
              src="https://img.icons8.com/color/96/000000/mongodb.png"
              alt="MongoDB"
              className={styles.techIcon}
            />
            <img
              src="https://img.icons8.com/color/96/000000/postgreesql.png"
              alt="PostgreSQL"
              className={styles.techIcon}
            />
            <img
              src="https://img.icons8.com/color/96/000000/docker.png"
              alt="Docker"
              className={styles.techIcon}
            />
            <img
              src="https://img.icons8.com/color/96/000000/amazon-web-services.png"
              alt="AWS"
              className={styles.techIcon}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
