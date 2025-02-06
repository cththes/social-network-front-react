import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import user_avatar from "./../../assets/images/user-avatar.jpg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => this.props.setUsers(response.data.items));
  }
  render() {
    const { users, follow, unfollow } = this.props;
    return (
      <div className={styles.users}>
        {users.map((user) => (
          <div key={user.id} className={styles.user}>
            <div className={styles.user__avatarWrapper}>
              <img
                className={styles.user__avatar}
                src={user.photos?.small || user_avatar}
                alt={user.name}
              />
            </div>
            <div className={styles.user__info}>
              <div className={styles.user__details}>{user.name}</div>
              <div className={styles.user__status}>{user.status}</div>
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
}

export default Users;
