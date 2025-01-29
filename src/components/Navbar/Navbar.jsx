import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar__nav}>
      <div className={styles["navbar__nav-item"]}>
        <NavLink to="/profile" className={styles.navbar__link}>
          Profile
        </NavLink>
      </div>
      <div className={styles["navbar__nav-item"]}>
        <NavLink to="/messages" className={styles.navbar__link}>
          Messages
        </NavLink>
      </div>
      <div className={styles["navbar__nav-item"]}>
        <NavLink to="/news" className={styles.navbar__link}>
          News
        </NavLink>
      </div>
      <div className={styles["navbar__nav-item"]}>
        <NavLink to="/music" className={styles.navbar__link}>
          Music
        </NavLink>
      </div>
      <div className={styles["navbar__nav-item"]}>
        <NavLink to="/settings" className={styles.navbar__link}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
}