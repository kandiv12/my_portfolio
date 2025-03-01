import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <div className={styles.textContent}>
          <h2>
            Hello, I'm{" "}
            <span className={styles.highlight}>Vamshidhar Kandi</span>!
          </h2>
          <h3>Welcome to my personal space!</h3>
          <p>
            As a passionate MERN Full-Stack Developer, I specialize in creating
            dynamic and scalable web applications using MySQL, Express, ReactJS,
            and NodeJS.
          </p>
          <p>
            With a solid foundation in both front-end and back-end development,
            I excel at crafting intuitive user experiences while ensuring robust
            server-side functionality.
          </p>
          <p>
            My strong analytical and problem-solving skills enable me to swiftly
            identify and resolve issues. I am a self-motivated professional with
            excellent communication and interpersonal skills, always eager to
            learn new technologies and techniques to further enhance my
            development expertise.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/taj_short.jpeg" alt="Vamshidhar Kandi" />
        </div>
      </div>

      {/* Technologies Section (Moved to Bottom) */}
      <section className={styles.technologies}>
        <h2>Technologies I Know</h2>
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
        </div>
      </section>
    </main>
  );
};

export default About;
