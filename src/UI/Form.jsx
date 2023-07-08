import React from 'react'
import styled from 'styled-components'


const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Form = ({ onSubmit, children }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      { children }
    </StyledForm>
  )
}

export default Form
