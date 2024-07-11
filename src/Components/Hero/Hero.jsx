/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>

      <div className={styles.content}>
      
        <h1 className={styles.title}>Hi I'm  Rk</h1>
        <p className={styles.description}>Iam an Intern Looking For INternShipn Thanks for Opening MY Protfolio</p>
        <a className={styles.contactBtn} href="mailto:pathanrasheedkhan184@gmail.com">Contact</a>
      </div>
      <img src="/images/heroImage.png" alt="" 
       className={styles.heroimg}/>
     
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
    
  );
}

export default Hero
