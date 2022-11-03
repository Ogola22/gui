//import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navs from './Components/nav';
//import Navbar from './Components/navbar'
import Login from './Components/login';
import SignUp from './Components/signup';

function App() {
  return (
  
    <div className="App">

       <Navs />

       <Login />

       <SignUp />
    </div>

  );
   
  
}

export default App;
