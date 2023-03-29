import styled from 'styled-components';

export const Item = styled.li`
  border-radius: 2px;
  box-shadow: ${(props) => props.theme.itemBoxShadow};
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: ${(props) => props.theme.transition};

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
