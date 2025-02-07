import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import styles from "./Profile.module.css";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { setUserProfileAction } from "../redux/profile-reducer";

function Profile({ profile, setUserProfile }) {
  const { userId } = useParams();
  const id = userId || 2;

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
      .then((response) => {
        setUserProfile(response.data);
      });
  }, [id, setUserProfile]);

  return (
    <div className={styles["profile-content"]}>
      <ProfileInfo profile={profile} />
      <MyPostsContainer profile={profile} />
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
