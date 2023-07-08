import React, { useState } from 'react';
import Form from '../UI/Form';
import Popup from '../UI/Popup';
import Input from '../UI/Input';
import Title from '../UI/Title';
import Button from '../UI/Button';
import UserService from '../API/UserAPI'

const AuthForm = ({ type, isActive, setIsActive, setIsLogin}) => {    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    function onSubmit(event) {
        event.preventDefault();
        
        const data = {
          email: email,
          password: password,
          name: name,
          surname: surname
        }

        if (type === 'Регистрация') {
            regUser(data)
        } else {
            authUser(data)
        }
        setIsActive(false);
    
    }

    async function authUser(data) {
        const authResponse = await UserService.authUser(data);
        if (authResponse) {
            const user = await UserService.getUserMe(localStorage.getItem('token'))
            localStorage.setItem("user", JSON.stringify(user))
            setIsLogin(true);
            localStorage.setItem("isLogin", true);
        } else {
            console.log('AUTH ERROR')
        }
    }

    async function regUser(data) {
        const regResponse = await UserService.regUser(data);
        if (regResponse) {
            const authResponse = await UserService.authUser(data);
            if (authResponse) {
                const user = await UserService.getUserMe(localStorage.getItem('token'))
                localStorage.setItem("user", JSON.stringify(user))
                setIsLogin(true);
                localStorage.setItem("isLogin", true);
            } else {
                console.log('TOKEN ERROR')
            }
        } else {
            console.log('REGISTRATION ERROR')
        }
    }

    return (
        <Popup isActive={isActive} setIsActive={setIsActive}>
            <Form onSubmit={event => onSubmit(event)} spellCheck="false">
                <Title>{type}</Title>
                <Input type='text' placeholder='Почта' value={email} onChange={event => setEmail(event.target.value)}/>
                <Input type='password' placeholder='Пароль' value={password} onChange={event => setPassword(event.target.value)}/>
                {type === 'Регистрация'
                && <Input type='text' placeholder='Имя' value={name} onChange={event => setName(event.target.value)}/>
                }
                {type === 'Регистрация'
                && <Input type='text' placeholder='Фамилия' value={surname} onChange={event => setSurname(event.target.value)}/>
                }
                <Button>{(type === 'Регистрация') ? 'ЗАРЕГИСТРИРОВАТЬСЯ' : 'ВОЙТИ'}</Button>
            </Form>
        </Popup>
    )
}

export default AuthForm;
