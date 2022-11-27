import styled from 'styled-components';
import PropTypes from 'prop-types';
 
 

export const Status = styled.span`
  width: ${p => p.theme.sizes.l};
  height: ${p => p.theme.sizes.l};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p =>
    p.isOnline
      ? p.theme.colors.bgStatusOnline
      : p.theme.colors.bgStatusOffline};
`;

export const Avatar = styled.img`
width: ${ p => p.theme.sizes.xxl };
height: ${ p => p.theme.sizes.xxl };

`;

export const Name = styled.p`
font-size: ${ p => p.theme.fontSizes.l}
`;

Status.propTypes = {
    isOnline: PropTypes.bool.isRequired,
};

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
};

Name.propTypes = {
    isOnline: PropTypes.string.isRequired,
};