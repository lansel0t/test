import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Headcontent from './components/Headpage/Headpage';
import Login from './components/Login/Login';
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Profile from './components/Profile/Profile';
import Information from './components/Info/Info';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Calendar from './components/Calendar/Calendar';






const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navigation />
      <div class='app-wrapper-content'>
        <Route path='/Headpage' component={Headcontent}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Profile' component={Profile}/>
        <Route path='/Info' component={Information}/>
        <Route path='/Calendar' component={Calendar}/>
        <Route path='/Users' 
        render = { () => <UsersContainer />}/>

      </div>
    </div>
    
        <header>
          
        </header>


    </BrowserRouter>);
         
}

export default App;





