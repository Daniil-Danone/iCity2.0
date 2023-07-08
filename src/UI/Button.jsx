import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
  display: block;
  height: 40px;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  border: 1px solid #2185fb;
  border-radius: 8px;
  background: none;
  outline: none;
  transition: 0.2s ease;

  &:hover {
    color: white;
    background: #2185fb;
  }
`


const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      { children }
    </StyledButton>
  )
}

export default Button
