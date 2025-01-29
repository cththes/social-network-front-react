import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <div className={styles["my-posts"]}>
      <h2 className={styles["my-posts__title"]}>My Posts</h2>
      <textarea className={styles["my-posts__textarea"]}></textarea>
      <button className={styles["my-posts__button"]}>Добавить пост</button>
      <Post message="Tomorrow can take care of itself." />
      <Post message="Here we go again.." />
      <Post />
      <Post />
    </div>
  );
}
