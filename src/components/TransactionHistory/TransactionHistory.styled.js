import styled from 'styled-components';
 

export const Head = styled.thead`
  text-transform: uppercase;
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.accentTable};
`;

export const Column = styled.th`
  padding: 0.875em 5em;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  font-weight: normal;
  tbody &:first-child {
    text-transform: capitalize;
  }
  :not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
  }
`;

export const Raw = styled.tr`
  :nth-child(even) {
    background-color: ${p => p.theme.colors.bgMediumLight};
  }
  :nth-child(odd) {
    background-color: ${p => p.theme.colors.bgPrimary};
  }
`;
