import React from "react";
import Users from "./Users";
import { usersAPI } from "../../api";

class UsersFetcher extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    this.getUsers(this.props.currentPage);
  }

  getUsers = (page) => {
    const { pageSize } = this.props;
    usersAPI.getUsers(page, pageSize).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  };

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.setIsFetching(true);
    this.getUsers(page);
    this.props.setIsFetching(false);
  };

  render() {
    return <Users {...this.props} onPageChange={this.onPageChange} />;
  }
}

export default UsersFetcher;
