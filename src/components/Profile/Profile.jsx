import { Box } from 'components/Box';
import { PropTypes } from 'prop-types';

import { Avatar, UserName, Info, Label, Quantity } from './Profile.styled';
import { theme } from 'utils';
import { numberToLocale } from 'utils';

export const Profile = ({ avatar, location, stats, tag, username }) => {
  return (
    <Box
      bg={theme.colors.bgLight}
      boxShadow="primary"
      borderRadius={theme.radii.md}
    >
      <Box as="section" p={theme.sizes.m}>
        <Avatar src={avatar} alt="User avatar" width={theme.sizes.xl} />
        <UserName>{username}</UserName>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Box>

      <Box
        as="ul"
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr"
        bg={theme.colors.bgLight}
        boxShadow="primary"
        borderRadius={theme.radii.md}
      >
        <Box
          as="li"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gridGap={2}
          padding={2}
          borderTop="profile"
          borderRight="profile"
        >
          <Label>Followers </Label>
          <Quantity>{numberToLocale(stats.followers)}</Quantity>
        </Box>

        <Box
          as="li"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gridGap={2}
          padding={2}
          borderTop="profile"
          borderRight="profile"
        >
          <Label>Views </Label>
          <Quantity> {numberToLocale(stats.views)}</Quantity>
        </Box>

        <Box
          as="li"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gridGap={2}
          padding={2}
          borderTop="profile"
        >
          <Label>Likes </Label>
          <Quantity>{numberToLocale(stats.views)}</Quantity>
        </Box>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
