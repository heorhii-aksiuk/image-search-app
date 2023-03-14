import styled from 'styled-components';

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.mainBackgroundColor};
  transition: ${(props) => props.theme.transition};
`;
