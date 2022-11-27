import styled from 'styled-components';
 

export const Title = styled.h2`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  text-align: center;
  text-transform: uppercase;
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.bgPrimary};
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Percentage = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
`;