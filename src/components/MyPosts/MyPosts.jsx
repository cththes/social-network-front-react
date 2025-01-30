import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts({ profile, addPost, updatePostInput }) {
  const handlePostSubmit = () => {
    addPost(profile.newPostText);
  };

  const handlePostInputChange = (e) => {
    updatePostInput(e.target.value);
  };

  return (
    <div className={styles["my-posts"]}>
      <h2 className={styles["my-posts__title"]}>My Posts</h2>
      <textarea
        className={styles["my-posts__textarea"]}
        value={profile.newPostText}
        onChange={handlePostInputChange}
      />
      <button className={styles["my-posts__button"]} onClick={handlePostSubmit}>
        Добавить пост
      </button>
      {profile.posts.map((post) => (
        <Post key={post.id} message={post.message} id={post.id} />
      ))}
    </div>
  );
}
