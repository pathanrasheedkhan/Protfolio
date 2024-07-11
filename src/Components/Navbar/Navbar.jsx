/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styles from './Navbar.module.css';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Protfolio</a>
        <div className={styles.menu}>
            <img 
            className={styles.menubtn} 
            src= { 
                menuOpen
                 ? "/images/closeIcon.png" 
                 : "/images/menuIcon.png" 
                  }

                  alt="menu-btn" 
                  onClick={() => setMenuOpen(!menuOpen)}
                   />


            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}` }
            onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
      
    </nav>

  );
};
