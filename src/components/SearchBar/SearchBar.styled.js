import styled from 'styled-components';
import { ReactComponent as Search } from '../../icons/search.svg';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  height: 72px;
  z-index: 1100;
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
  transition: ${(props) => props.theme.transition};
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: none;
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
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font-size: 18px;
  }
`;

export const SearchIcon = styled(Search)`
  width: 26px;
  height: 26px;
  color: ${(props) => props.theme.mainTextColor};
  transition: ${(props) => props.theme.transition};
`;
