import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 40px);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 16px;
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: 360px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
`;
