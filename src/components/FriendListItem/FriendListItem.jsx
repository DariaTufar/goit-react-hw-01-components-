import { PropTypes } from 'prop-types';
import { Box } from '../Box/Box';
import { Status, Name, Avatar } from './FriendListItem.styled';
import { theme } from 'utils';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Box as="li" display="flex" justifyContent="center" alignItems="center">
      <Status isOnline={isOnline}> </Status>
      <Avatar src={avatar} alt="User avatar" width={theme.sizes.xxl} />
      <Name> {name} </Name>
    </Box>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
