import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${(props) => props.theme.mainTextColor};
  background-color: ${(props) => props.theme.accentColor};
  box-shadow: ${(props) => props.theme.appBarBoxShadow};
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: ${(props) => props.theme.transition};
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
