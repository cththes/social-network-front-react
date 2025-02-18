import React from "react";
import styles from "./Users.module.css";
import userAvatar from "../../assets/images/user-avatar.jpg";
import Preloader from "../Common/Preloader";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api";

const Users = ({
  users,
  currentPage,
  follow,
  unfollow,
  pageSize,
  totalUsersCount,
  onPageChange,
  isFetching,
  setIsFollowingProgress,
  isFollowingInProgress,
}) => {
  const pagesCount = 15 || Math.ceil(totalUsersCount / pageSize);
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  const handleFollow = (userId) => {
    if (isFollowingInProgress.includes(userId)) return; // Предотвращаем повторный клик

    setIsFollowingProgress(userId, true);
    usersAPI.follow(userId).then((resultCode) => {
      if (resultCode === 0) {
        follow(userId);
      }
      setIsFollowingProgress(userId, false);
    });
  };

  const handleUnfollow = (userId) => {
    if (isFollowingInProgress.includes(userId)) return; // Предотвращаем повторный клик

    setIsFollowingProgress(userId, true);
    usersAPI.unfollow(userId).then((resultCode) => {
      if (resultCode === 0) {
        unfollow(userId);
      }
      setIsFollowingProgress(userId, false);
    });
  };

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
            onClick={() => onPageChange(page)}
          >
            {page}
          </span>
        ))}
      </div>

      {isFetching && <Preloader />}

      {/* Список пользователей */}
      {users.map((user) => (
        <div key={user.id} className={styles.users__item}>
          <div className={styles["users__avatar-wrapper"]}>
            <NavLink to={`/profile/${user.id}`}>
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
            disabled={isFollowingInProgress.includes(user.id)}
            onClick={() => (user.followed ? handleUnfollow(user.id) : handleFollow(user.id))}
          >
            {user.followed ? "Unfollow" : "Follow"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;
