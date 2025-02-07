import React from "react";
import preloader from "../../assets/images/preloader.svg";
import styles from "./Preloader.module.css";

export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <img src={preloader} alt="Loading..." className={styles.preloader__image} />
    </div>
  );
}
