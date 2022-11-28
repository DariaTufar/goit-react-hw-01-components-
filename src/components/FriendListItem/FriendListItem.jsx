import { PropTypes } from 'prop-types';
import { Box } from '../Box/Box';
import { theme } from 'utils';
import { Status, Name, Avatar } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Box
      as="li"
      bg={theme.colors.bgLight}
      boxShadow="primary"
      borderRadius={theme.radii.md}
      width={theme.sizes.xxxl}
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={3}
    >
      <Status isOnline={isOnline}> </Status>
      <Avatar src={avatar} alt="User avatar" width={theme.sizes.xl} />
      <Name> {name} </Name>
    </Box>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
