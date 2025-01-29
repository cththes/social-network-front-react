import React from "react";

import styles from './Navbar.module.css'

export default function Navbar() {
  return (
      <nav className={styles.navbar__nav}>
        <div className={styles['navbar__nav-item']}>
          <a href="#" className={styles.navbar__link}>
            Profile
          </a>
        </div>
        <div className={styles['navbar__nav-item']}>
          <a href="#" className={styles.navbar__link}>
            Messages
          </a>
        </div>
        <div className={styles['navbar__nav-item']}>
          <a href="#" className={styles.navbar__link}>
            News
          </a>
        </div>
        <div className={styles['navbar__nav-item']}>
          <a href="#" className={styles.navbar__link}>
            Music
          </a>
        </div>
        <div className={styles['navbar__nav-item']}>
          <a href="#" className={styles.navbar__link}>
            Settings
          </a>
        </div>
      </nav>
  );
}
