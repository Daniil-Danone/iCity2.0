import React from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
  position: relative;
  min-width: 1280px;
  max-width: 1280px;
  margin: 0 auto;
`

const Container = ({ children }) => {
  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}

export default Container
