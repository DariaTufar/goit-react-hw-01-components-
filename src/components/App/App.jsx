import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';

import user from '../../data/user';
import statData from '../../data/data';
import { FriendList } from 'components/FriendList';
 
import friends from '../../data/friends';
// import transactions from '../../data/transactions';

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

      <Statistics title="Upload stats" stats={statData} />
      <FriendList friends={friends} />
    </div>
  );
};
