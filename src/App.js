//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navs from './Components/nav';
import Login from './Components/login';



function App() {
  return (
  
    <div className="App">

       <Navs />

       <Login />
    </div>

  );
   
  
}

export default App;
