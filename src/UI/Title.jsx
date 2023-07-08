import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div`
    text-align: center;
    font-size: 30px;
`

const Title = ({ children }) => {
  return (
    <StyledTitle>
      { children }
    </StyledTitle>
  )
}

export default Title;
