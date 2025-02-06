import React from "react";
import axios from "axios";
import styles from "./Users.module.css";
import userAvatar from "../../assets/images/user-avatar.jpg";

class Users extends React.Component {
  componentDidMount() {
    this.fetchUsers(this.props.currentPage);
  }

  fetchUsers = (page) => {
    const { pageSize } = this.props;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  };

  handlePageChange = (page) => {
    this.props.setCurrentPage(page);
    this.fetchUsers(page);
  };

  render() {
    const { users, pageSize, totalUsersCount, currentPage, follow, unfollow } = this.props;

    const pagesCount = 15 || Math.ceil(totalUsersCount / pageSize);
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
      <div className={styles.users}>
        {/* Пагинация */}
        <div className={styles.users__pagination}>
          {pages.map((page) => (
            <span
              key={page}
              className={`${styles.users__page} ${
                currentPage === page ? styles["users__page--active"] : ""
              }`}
              onClick={() => this.handlePageChange(page)}
            >
              {page}
            </span>
          ))}
        </div>

        {/* Список пользователей */}
        {users.map((user) => (
          <div key={user.id} className={styles.users__item}>
            <div className={styles.users__avatarWrapper}>
              <img
                className={styles.users__avatar}
                src={user.photos?.small || userAvatar}
                alt={user.name}
              />
            </div>
            <div className={styles.users__info}>
              <div className={styles.users__name}>{user.name}</div>
              <div className={styles.users__status}>{user.status || "No status"}</div>
            </div>
            <button
              className={`${styles.users__button} ${
                user.followed ? styles["users__button--unfollow"] : styles["users__button--follow"]
              }`}
              onClick={() => (user.followed ? unfollow(user.id) : follow(user.id))}
            >
              {user.followed ? "Unfollow" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
