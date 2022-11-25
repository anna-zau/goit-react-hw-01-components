import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.item}>
            {friend.isOnline ? (
              <span className={css.status}>
                <FaRegCheckCircle />
              </span>
            ) : (
              <span className={css.status}>
                <FaRegTimesCircle />
              </span>
            )}
            <img className={css.avatar} src={friend.avatar} alt="User avatar" />
            <p className={css.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  listOfFriends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
