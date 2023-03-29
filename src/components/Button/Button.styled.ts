import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  margin: 0 auto;
  padding: 8px 16px;
  min-width: 180px;

  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.secondaryTextColor};
  
  background-color: ${(props) => props.theme.accentColor};
  border: none;
  border-radius: 2px;
  box-shadow: ${(props) => props.theme.buttonBoxShadow};
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  :hover,
  :focus {
    background-color: ${(props) => props.theme.buttonHoverColor};
  }

  :active {
    background-color: ${(props) => props.theme.buttonActiveColor};
  }
`;

export default Button;
