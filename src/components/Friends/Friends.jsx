// import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={css.item}>
            {isOnline ? (
              <span className={`${css.status} ${css.online}`}></span>
            ) : (
              <span className={`${css.status} ${css.offline}`}></span>
            )}
            <img className={css.avatar} src={avatar} alt="User avatar" />
            <p className={css.name}>{name}</p>
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
