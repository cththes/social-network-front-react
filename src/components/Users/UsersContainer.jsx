import React from "react";
import { connect } from "react-redux";
import UsersFetcher from "./UsersFetcher";
import {
  followAction,
  unfollowAction,
  setUsersAction,
  setCurrentPageAction,
  setTotalUsersCountAction,
  setIsFetchingAction,
} from "../redux/users-reducer";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => dispatch(followAction(userId)),
  unfollow: (userId) => dispatch(unfollowAction(userId)),
  setUsers: (users) => dispatch(setUsersAction(users)),
  setCurrentPage: (page) => dispatch(setCurrentPageAction(page)),
  setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountAction(totalCount)),
  setIsFetching: (isFetching) => dispatch(setIsFetchingAction(isFetching)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersFetcher);
