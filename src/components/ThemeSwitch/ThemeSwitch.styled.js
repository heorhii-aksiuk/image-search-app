import styled from 'styled-components';
import { ReactComponent as Sun } from '../../icons/sun.svg';
import { ReactComponent as Moon } from '../../icons/moon.svg';

export const SunIcon = styled(Sun)`
  color: ${(props) => props.theme.secondaryBackgroundColor};
  height: 100%;
  width: 100%;
`;

export const MoonIcon = styled(Moon)`
  color: ${(props) => props.theme.secondaryBackgroundColor};
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  margin-left: 10px;
`;

export const Label = styled.label`
  position: absolute;
  left: -10%;
  top: -10%;
  width: 120%;
  height: 120%;
  color: transparent;
  cursor: pointer;
`;

export const Toggle = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`;
