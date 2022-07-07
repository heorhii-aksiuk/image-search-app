import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  margin: 0 auto;
  padding: 8px 16px;
  min-width: 180px;
  border-radius: 2px;
  background-color: #3f51b5;
  text-align: center;
  color: #fff;
  border: none;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #303f9f;
  }

  :active {
    background-color: #1c2769;
  }
`

export default Button
