/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
         <img src="/images/aboutImage.png" alt="me sitting with lap top"
          className={styles.aboutimg}
           />
       <ul className={styles.aboutItems}>
         <li className={styles.aboutItem}>
              <img src="/images/cursorIcon.png" alt="" 
               className={styles.aboutimg}/>
              <div className={styles.aboutItemText}>

                 <h3>Front-End developer</h3>
                 <p>Im a frontend developer iam usng a react to buit a protfolio</p>
                   
              </div>
         </li>
         <li className={styles.aboutItem}>
                <img src="/images/serverIcon.png" alt="" 
                 className={styles.aboutimg}/>
              <div className={styles.aboutItemText}>
                 <h3>Front-End developer</h3>
                 <p>Im a frontend developer iam usng a react to buit a protfolio</p>
                   
              </div>
          </li>
          <li className={styles.aboutItem}>
              <img src="/images/uiIcon.png" alt="" 
                 className={styles.aboutimg}/>
              <div className={styles.aboutItemText}>
                
                 <h3>Front-End developer</h3>
                 <p>Im a frontend developer iam usng a react to buit a protfolio</p>
                   
              </div>
           </li>
       
      </ul>        
    </div>

    </section>
  );
}
