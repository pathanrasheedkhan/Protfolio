/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <footer className={styles.container}>
        <div  className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul  className={styles.links}>
            <li  className={styles.link}>
                <img src="/images/emailIcon.png" alt="" />
                <a href="pathanrasheedkhan184@gmail.com">my E-mail.com</a>
            </li>
            <li className={styles.link}>
                <img src="/images/linkedinIcon.png" alt="" />
                <a href="https://www.linkedin.com/in/pathan-rasheed-khan-03508128b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">my linked profile</a>
            </li>
            <li className={styles.link}>
                <img src="/images/githubIcon.png" alt="" />
                <a href="https://github.com/pathanrasheedkhan"> my github account</a>
            </li>                        
        </ul>
    </footer>
   
  );
}
