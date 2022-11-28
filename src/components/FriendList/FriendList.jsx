import { PropTypes } from 'prop-types';
import { Box } from '../Box/Box';
import {FriendListItem} from 'components/FriendListItem/FriendListItem';
import { theme } from 'utils';

export const FriendList = ( {friends}) => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gridGap={5}
        as="ul"
     
         
        borderRadius={theme.radii.md}
        width={theme.sizes.xxxl}
      >
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </Box>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};