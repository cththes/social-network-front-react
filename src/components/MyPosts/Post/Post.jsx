import React from "react";
import styles from "./Post.module.css";

import user_avatar from "./../../../assets/images/user-avatar.jpg";

export default function Post({ message }) {
  return (
    <div className={styles.post}>
      <img src={user_avatar} alt="User Avatar" className={styles.post__avatar} />
      <div className={styles.post__content}>{message}</div>
    </div>
  );
}
