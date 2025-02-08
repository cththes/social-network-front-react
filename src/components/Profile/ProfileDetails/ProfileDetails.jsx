import React from "react";
import styles from "./ProfileDetails.module.css";
import userAvatar from "../../../assets/images/user-avatar.jpg";

export default function ProfileDetails({ profile }) {
  return (
    <div className={styles["profile-details"]}>
      <div className={styles["profile-details__avatar-wrapper"]}>
        {profile?.photos?.large ? (
          <img
            src={profile.photos.large}
            alt="Avatar"
            className={styles["profile-details__avatar"]}
          />
        ) : (
          <img src={userAvatar} alt="Avatar" className={styles["profile-details__avatar"]} />
        )}
      </div>
      <div className={styles["profile-details__info"]}>
        <h3 className={styles["profile-details__title"]}>Profile Information</h3>
        <span className={styles["profile-details__text"]}>
          <b>About Me:</b> {profile?.aboutMe || "No information provided."}
        </span>
        <span className={styles["profile-details__text"]}>
          <b>Looking for a job:</b> {profile?.lookingForJob ? "Yes" : "No"}
        </span>
        <span className={styles["profile-details__text"]}>
          <b>Job Description:</b> {profile?.lookingForJobDescription || "N/A"}
        </span>
        <span className={styles["profile-details__contacts-title"]}>
          <b>Contacts:</b>
        </span>
        <ul className={styles["profile-details__contacts-list"]}>
          {Object.entries(profile?.contacts || {}).map(([key, value]) => (
            <li key={key} className={styles["profile-details__contacts-item"]}>
              {key}: {value || "N/A"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
