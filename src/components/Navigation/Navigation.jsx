import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return <nav className='nav'>
    <div className='item'>
      <a href="/Headpage">Главная</a>
    </div>
    <div className='item'>
      <a href="/Login">Авторизация</a>
    </div>
    <div className='item'>
      <a href="/Profile">Профиль</a>
    </div>
    <div className='item'>
      <a href="/Info">Информация</a>
    </div>
    <div className='item'>
      <a href="/Calendar">Календарь</a>
    </div>
  </nav>
}
export default Navigation;