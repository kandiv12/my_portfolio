import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <div className={styles.textContent}>
          <h3>Hello!</h3>
          <h2 className={styles.name}>
            I'm <span className={styles.highlight}>Vamshidhar Kandi</span>
          </h2>
          <p>
            As a skilled MERN Full Stack Developer proficient in React, Node.js,
            Express, and MySQL, I am dedicated to creating efficient and
            user-friendly web applications.
          </p>
          <p>Feel free to browse through my posts and connect with me!</p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/portfolio.svg" alt="Web Development" />
        </div>
      </div>
    </main>
  );
};

export default Home;
