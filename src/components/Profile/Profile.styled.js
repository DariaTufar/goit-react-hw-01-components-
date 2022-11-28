import styled from 'styled-components';
import PropTypes from 'prop-types';


export const Avatar = styled.img`
  border: 1px solid ${p => p.theme.colors.primaryDark};
  border-radius: ${p => p.theme.radii.round};
  display: block;
  margin-left: auto;
  margin-right: auto;
  pt: ${p => p.theme.sizes.s};
`;

export const UserName = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: bold;
  text-align: center;
  color: ${p => p.theme.colors.accent};
  margin-left: auto;
  margin-right: auto;
`;
export const Info = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: bold;
  text-align: center;
  color: ${p => p.theme.colors.primaryDark};
`;

export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.xs};
  
  text-align: center;
  color: ${p => p.theme.colors.primaryDark};
`;

export const Quantity = styled.span`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: bold;
  text-align: center;
  color: ${p => p.theme.colors.accent};
`;

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};