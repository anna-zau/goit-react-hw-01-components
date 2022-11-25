import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import user from '../../user.json';
import data from '../Statistics/data.json';
import listOfFriends from '../../friends.json';
import { FriendList } from 'components/Friends/Friends';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={listOfFriends} />
    </div>
  );
};
