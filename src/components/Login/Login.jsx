import React from 'react';
import classes from './Login.css';

const Login = (props) => {

    const handleClick = (e) => {
        e.preventDefault();
    }
    
    const handleLogin = () => {
        
    }
    const handleReg = () => {
        
    }
    return (
        <div className='Login'>
            <div>
                <h1>Авторизация</h1>

                <form onClick={handleClick} className='LoginForm'>
                    <input type="text" />
                    <input type="text" />
                    <button type="success" onClick={handleLogin}>Войти</button>
                    <button type="primary" onClick={handleReg}>Регистрация</button>
                </form>
            </div>
        </div>
    )
}

export default Login;