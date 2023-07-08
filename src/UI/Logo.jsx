import React from 'react'
import styled from 'styled-components'


const StyledLogo = styled.div`
    font-size: 40px;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
        color: #2185fb;
    }
`


const Logo = () => {
  return (
    <StyledLogo>
      iCity
    </StyledLogo>
  )
}

export default Logo
