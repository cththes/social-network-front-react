import React from "react";
import styles from "./Profile.module.css";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

export default function Profile({ profile, dispatch }) {
  return (
    <div className={styles.profile__content}>
      <div className={styles["profile__main-content"]}>Main content</div>
      <MyPostsContainer profile={profile} dispatch={dispatch} />
    </div>
  );
}
