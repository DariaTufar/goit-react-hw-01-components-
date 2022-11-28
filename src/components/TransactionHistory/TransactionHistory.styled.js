import styled from 'styled-components';

export const Head = styled.thead`
  text-transform: uppercase;
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.accent};
`;

export const Column = styled.th`
  padding: 0.875em 5em;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[5]}px;
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
    background-color: ${p => p.theme.colors.accent};
  }
  :nth-child(odd) {
    background-color: ${p => p.theme.colors.bgPrimary};
  }
`;
