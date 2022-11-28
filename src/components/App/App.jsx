import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import user from '../../data/user.json';
import data from '../../data/data.json';
import listOfFriends from '../../data/friends.json';
import { FriendList } from 'components/Friends/Friends';
import transaction from '../../data/transactions.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

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
      <FriendList friends={listOfFriends}></FriendList>

      <TransactionHistory transactions={transaction} />
    </div>
  );
};
