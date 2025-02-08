import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

import logo from "./../../assets/images/logo.jpg";

export default function Header({ isAuth, login }) {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles.header__logo} />

      <div className={styles.header__login}>
        {isAuth ? (
          login
        ) : (
          <NavLink to="/login" className={styles.header__loginLink}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
}
