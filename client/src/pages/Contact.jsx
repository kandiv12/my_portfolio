import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <main>
      <div className={styles.contactContainer}>
        <div className={styles.contactText}>
          <h2 className={styles.highlight}>Let's Connect!</h2>
          <p>
            I would love to hear from you. Feel free to reach out through the
            contact information provided below. Whether you have a project in
            mind, a collaboration opportunity, or just want to say hello, I'm
            just a message away!
          </p>
          <p>
            Looking forward to connecting with you and discussing exciting
            possibilities!
          </p>
          <h3>Contact Information:</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:kandivamshi7@gmail.com"
              className={styles.emailLink}
            >
              kandivamshi7@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.contactImage}>
          <img
            src="https://getrafiki.ai/wp-content/uploads/2021/06/Cold-Calling.png"
            alt="Connection"
          />
        </div>
      </div>
    </main>
  );
};

export default Contact;
