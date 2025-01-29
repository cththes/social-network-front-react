import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";
import user_avatar from "../../../assets/images/user-avatar.jpg";

export default function DialogItem({ name, id }) {
  return (
    <div className={styles.dialog}>
      <img src={user_avatar} alt="User Avatar" className={styles.dialog__avatar} />
      <NavLink 
        to={`/dialogs/${id}`}
        className={({ isActive }) => 
          isActive ? `${styles.dialog__link} ${styles.active}` : styles.dialog__link
        }
      >
        {name}
      </NavLink>
    </div>
  );
}