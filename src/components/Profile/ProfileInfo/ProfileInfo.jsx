import React from "react";
import styles from "./ProfileInfo.module.css";
import userAvatar from "../../../assets/images/user-avatar.jpg";

export default function ProfileInfo({ profile }) {
  return (
    <div className={styles["profile-info"]}>
      <img 
        className={styles["profile-info__avatar"]} 
        src={profile?.photos?.large || userAvatar} 
        alt="User avatar" 
      />
    </div>
  );
}
