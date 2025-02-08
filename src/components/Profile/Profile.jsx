// Profile.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import styles from "./Profile.module.css";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import { setUserProfileAction } from "../redux/profile-reducer";

function Profile({ profile, setUserProfile }) {
  const { userId } = useParams();
  const id = userId || 21740;

  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
      .then((response) => {
        setUserProfile(response.data);
      });
  }, [id, setUserProfile]);

  return (
    <div className={styles["profile-wrapper"]}>
      <div className={styles["profile-content"]}>
        <MyPostsContainer profile={profile} />
      </div>
      <div className={styles["profile-details"]}>
        <ProfileDetails profile={profile} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const mapDispatchToProps = {
  setUserProfile: setUserProfileAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);