import React from 'react'
import styled from 'styled-components'

const StyledMenuBlock = styled.div`
    display: flex;
    gap: 30px;
`

const StyledMenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    color: #2185fb;
    text-decoration: underline;
  }
`


const Menu = () => {
  return (
    <StyledMenuBlock>
      <StyledMenuItem>Карта</StyledMenuItem>
      <StyledMenuItem>Список мероприятий</StyledMenuItem>
    </StyledMenuBlock>
  )
}

export default Menu
