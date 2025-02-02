import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { createFollowAction, createSetUsersAction, createUnfollowAction } from "../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(createFollowAction(userId));
    },
    unfollow: (userId) => {
      dispatch(createUnfollowAction(userId));
    },
    setUsers: (users) => {
      dispatch(createSetUsersAction(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
