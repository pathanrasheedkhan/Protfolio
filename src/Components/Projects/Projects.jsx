/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <>

    <section className={styles.box}>
    

       <div className={styles.container}>
           <img className={styles.primg} src="/images/project.png" alt="" />
             <h3 className={styles.title}>Gemini Clone</h3>
             <p className={styles.description}>This is the project of gemini clone using gemini api and react</p>
             <div className={styles.links}>
               <a href="https://66827a3c86e1130096ea2348--glone.netlify.app/" className={styles.link}>Demo</a>
               <a href="https://github.com/pathanrasheedkhan/geminiClone" className={styles.link}>Source</a>
            </div>
        </div>
        <div className={styles.container}>
           <img className={styles.primg} src="/images/project.png" alt="" />
             <h3 className={styles.title}>E-commerse website</h3>
             <p className={styles.description}>This is the project is basic HTML&CSS for frontend not responsive</p>
             <div className={styles.links}>
               <a href="https://roaring-malabi-356170.netlify.app" className={styles.link}>Demo</a>
               <a href="https://github.com/pathanrasheedkhan/e-commerse" className={styles.link}>Source</a>
            </div>
        </div>
        <div className={styles.container}>
           <img className={styles.primg} src="/images/project.png" alt="" />
             <h3 className={styles.title}>My protfolio</h3>
             <p className={styles.description}>This is the project of gemini clone using gemini api and react</p>
             <div className={styles.links}>
               <a href="#" className={styles.link}>Demo</a>
               <a href="#" className={styles.link}>Source</a>
            </div>
        </div>                




</section>

    </>







   
  );
}
