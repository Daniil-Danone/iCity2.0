import React from 'react'
import styled from 'styled-components'


const StyledPopupBackground = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 8, 8, 0.4);
    position: fixed;
    align-items: center;
    justify-content: center;
    z-index: 2;
`

const StyledPopup = styled.div`
    padding: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    width: 400px;
`


const Popup = ({ isActive, setIsActive, children}) => {
    if (isActive) {
        return (
            <StyledPopupBackground onClick={() => setIsActive(false)}>
              <StyledPopup onClick={(event) => event.stopPropagation()}>{ children }</StyledPopup>
            </StyledPopupBackground>
          )
    }
}

export default Popup;
