import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersFetcher extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    this.fetchUsers(this.props.currentPage);
  }

  fetchUsers = (page) => {
    const { pageSize } = this.props;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  };

  handlePageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.setIsFetching(true);
    this.fetchUsers(page);
    this.props.setIsFetching(false);
  };

  render() {
    return <Users {...this.props} handlePageChange={this.handlePageChange} />;
  }
}

export default UsersFetcher;
