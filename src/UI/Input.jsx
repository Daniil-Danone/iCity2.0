import React from 'react'
import styled from 'styled-components'


const StyledInput = styled.input`
  height: 40px;
  padding: 5px 10px 5px 20px;
  font-size: 20px;
  border: 1px solid #2185fb;
  border-radius: 10px;
  background-color: none;
  outline: none;
  transition: 0.4s ease;

  &:focus {
    background: rgba(255, 165, 0, 0.1);
}
`

const Input = (props) => {
  return (
    <StyledInput {...props}/>
  )
}

export default Input;
