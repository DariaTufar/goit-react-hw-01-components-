import styled from 'styled-components';
 

export const Title = styled.h2`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  text-align: center;
  text-transform: uppercase;
  color: ${p => p.theme.colors.accentTable};
  background-color: ${p => p.theme.colors.bgLight};
  border-radius: ${p => p.theme.radii.sm};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
`;

export const Percentage = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
`;
