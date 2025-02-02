import React from "react";
import styles from "./Users.module.css";

export default function Users({ users, follow, unfollow, setUsers }) {
  if (users.length === 0) setUsers(users);
  return (
    <div className={styles.users}>
      {users.map((user) => (
        <div key={user.id} className={styles.user}>
          <div className={styles.user__avatarWrapper}>
            <img className={styles.user__avatar} src={user.photoUrl} alt={user.fullName} />
          </div>
          <div className={styles.user__info}>
            <div className={styles.user__details}>{user.fullName}</div>
            <div className={styles.user__status}>{user.status}</div>
            {user.location.city ? (
              <div className={styles.user__location}>
                {user.location.city}, {user.location.country}
              </div>
            ) : (
              <div className={styles.user__location}>{user.location.country}</div>
            )}
          </div>
          {user.followed ? (
            <button className={styles.user__button} onClick={() => unfollow(user.id)}>
              Unfollow
            </button>
          ) : (
            <button className={styles.user__button} onClick={() => follow(user.id)}>
              Follow
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
