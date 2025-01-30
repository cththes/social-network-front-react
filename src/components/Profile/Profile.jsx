import React from "react";

import styles from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";

export default function Profile({ profile, addPost, updatePostInput }) {
  return (
    <div className={styles.profile__content}>
      <div className={styles["profile__main-content"]}>Main content</div>
      <MyPosts profile={profile} addPost={addPost} updatePostInput={updatePostInput}/>
    </div>
  );
}
