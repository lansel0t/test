import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
    <header className='header'>
    <img src="logo192.png"></img>
    <div className="loginBlock">
        { props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Выйти</button></div>
            : <NavLink to ={'/login'}>Login</NavLink> }
        </div> 
    </header>
    )
}

export default Header;