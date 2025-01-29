import React from "react";

import styles from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";

export default function Profile() {
  return (
    <div className={styles.profile__content}>
      <div className={styles['profile__main-content']}>Main content</div>
      <MyPosts />
    </div>
  );
}
