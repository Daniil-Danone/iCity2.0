import React from 'react'
import Logo from '../../UI/Logo'
import AuthBlock from './AuthBlock'
import Container from '../../UI/Container'
import styled from 'styled-components'
import Menu from './Menu'


const StyledNavbar = styled.nav`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;
  border-radius: 0 0 10px 10px;
  background-color: #ffffff;
  z-index: 1;
`


const Navbar = () => {
  return (
    <Container>
        <StyledNavbar>
            <Logo/>
            <Menu/>
            <AuthBlock/>
        </StyledNavbar>
    </Container>
    
  )
}

export default Navbar;