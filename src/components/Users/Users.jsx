import React from "react";
import styles from "./Users.module.css";
import userAvatar from "../../assets/images/user-avatar.jpg";
import Preloader from "../Common/Preloader";
import { NavLink } from "react-router-dom";

let Users = ({
  users,
  currentPage,
  follow,
  unfollow,
  pageSize,
  totalUsersCount,
  handlePageChange,
  isFetching,
}) => {
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
            onClick={() => handlePageChange(page)}
          >
            {page}
          </span>
        ))}
      </div>

      {isFetching && <Preloader />}

      {/* Список пользователей */}
      {users.map((user) => (
        <div key={user.id} className={styles.users__item}>
          <div className={styles.users__avatarWrapper}>
            <NavLink to={"/profile/" + user.id}>
              <img
                className={styles.users__avatar}
                src={user.photos?.small || userAvatar}
                alt={user.name}
              />
            </NavLink>
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
};

export default Users;
