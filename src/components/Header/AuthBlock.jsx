import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context'
import AuthForm from './AuthForm';
import Button from '../../UI/Button';

import styled from 'styled-components'

const StyledAuthBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Username = styled.div`
  font-size: 20px;
`

const AuthBlock = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const {isLogin, setIsLogin} = useContext(AuthContext); // глобальное состояние isLogin
  const [isActive, setIsActive] = useState(false); // состояние popup
  const [type, setType] = useState(''); // тип popup

  function logout() {
    setIsLogin(false);
    setIsActive(false);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('isLogin');
  }
  
  return (
    <StyledAuthBlock>
        <AuthForm type={type} isActive={isActive} setIsActive={setIsActive} setIsLogin={setIsLogin}/>
        {isLogin
        ? <Username>{user.name}</Username>
        : <Button onClick={() => {setIsActive(true); setType('Авторизация')}}>Войти</Button>
        }
        {isLogin
        ? <Button onClick={() => logout()}>Выйти</Button>
        : <Button onClick={() => {setIsActive(true); setType('Регистрация')}}>Зарегистрироваться</Button>
        }
    </StyledAuthBlock>
  )
}

export default AuthBlock;