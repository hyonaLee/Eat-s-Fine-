import React from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Navbar from './components/views/Navbar/Navbar';
import Footer from './components/views/Footer/Footer';

function App() {
  return (
      <div>
        {/* <Switch>
          <Route exact path="/">    
            <LandingPage />
          </Route>			  
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
        </Switch>   */}
        
         <Route exact path="/" component = {LandingPage} />
         <Route exact path="/login" component = {LoginPage} />
         <Route exact path="/register" component = {RegisterPage} />
      </div>
  );
}

export default App;
