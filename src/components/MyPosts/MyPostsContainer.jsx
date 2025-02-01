import React from "react";
import { connect } from "react-redux";
import { createAddPostAction, createPostInputChangeAction } from "../redux/profile-reducer";
import MyPosts from "./MyPosts";

function MyPostsContainer({ profile, addPost, updatePostInput }) {
  return <MyPosts profile={profile} addPost={addPost} updatePostInput={updatePostInput} />;
}

const mapStateToProps = (state) => ({
  profile: state.profilePage,
});

const mapDispatchToProps = {
  addPost: createAddPostAction,
  updatePostInput: createPostInputChangeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);
