import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Headcontent from './components/Headpage/Headpage';
import Login from './components/Login/Login';
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Profile from './components/Profile/Profile';
import Information from './components/Info/Info';







const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <div class='app-wrapper-content'>
        <Route path='/Headpage' component={Headcontent}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Profile' component={Profile}/>
        <Route path='/Info' component={Information}/>
      </div>
    </div>
    
        <header>
          
        </header>


    </BrowserRouter>);
}

export default App;





