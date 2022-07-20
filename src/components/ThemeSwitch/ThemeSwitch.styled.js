import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.svg`
  color: currentColor;
  height: 24px;
  width: 24px;
  margin-right: 8px;
  margin-left: 8px;
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  width: 64px;
  height: 32px;
  border-radius: 50em;
  padding: 3px 0;
`;

export const Track = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  user-select: none;
  background-color: #333;
  border-radius: inherit;
  z-index: 1;
  cursor: pointer;
`;

export const Marker = styled.div`
  position: relative;
  background-color: #fff;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  z-index: 2;
  pointer-events: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  transform: translateX(3px);
  transition: ${(props) => props.theme.transition};
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

  :checked + ${Track} {
    background-color: #d3d3d4;
  }

  :checked ~ ${Marker} {
    transform: translateX(35px);
  }

  :focus + ${Track} {
    box-shadow: 0 0 0 3px #2196f3;
  }

  :active + ${Track} {
    box-shadow: 0 0 0 3px #2196f3;
  }
`;
