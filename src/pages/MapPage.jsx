import React from 'react'
import InteractiveMap from '../components/Map';
import Navbar from '../components/Navbar';
import styled from 'styled-components'

const StyledLoginPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 153, 51, 0.1);
`

const MapPage = () => {
  return (
    <StyledLoginPage>
      <Navbar/>
      <InteractiveMap/>
    </StyledLoginPage>
    
  )
}

export default MapPage;
