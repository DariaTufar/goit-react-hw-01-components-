import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Box } from '../Box';

import user from '../../data/user';
import statData from '../../data/data';
import friends from '../../data/friends';
import transactions from '../../data/transactions';

export const App = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="flex-start"
      padding={5}
      gridGap={5}
      backgroundColor="bgPrimary"
      width={[
        1, // 100% below the smallest breakpoint
        1 / 2, // 50% from the next breakpoint and up
        1 / 4, // 25% from the next breakpoint and up
      ]}
    >
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />

          <Statistics title="Upload stats" stats={statData} />
       
        <FriendList friends={friends} />
     
      <TransactionHistory transactions={transactions} />
    </Box>
  );
};
