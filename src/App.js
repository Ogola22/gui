//import React, { useState } from 'react';
//import { BrowserRouter as Router, Rout, Switch } from 'react-router-dom';

import './App.css';
import Navs from './Components/nav';
import Navbar from './Components/navbar'
import Login from './Components/login';

function App() {
  return (
    <Router>
    <div className="App">

    <Navs />
    <div classname ="content">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path ="/Signup">
        
        </Route>
      </Switch>
    </div>
    
    </div>
  </Router>

);
   
  
}

export default App;
