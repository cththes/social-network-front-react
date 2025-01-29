import React from "react";

import styles from "./Header.module.css";

import logo from "./../../assets/images/logo.jpg";

export default function Header() {
  return (
    <header className={styles.header__container}>
      <img src={logo} alt="Logo" className={styles.header__logo} />
    </header>
  );
}
