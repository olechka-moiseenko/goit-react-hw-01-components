import PropTypes from "prop-types";
import styles from "./friendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li className={styles.item} key={friend.id}>
          <span
            className={
              friend.isOnline ? styles.statusOnline : styles.statusOffline
            }
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt=""
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
