//import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Navs from './Components/Navbars';
import Login from './Components/Login';
import Signup from './Components/signup';



function App() {
  return (
    <Router>
    <div className="App">
    <Navs />
    <div className="content">
       <Switch>
         <Route exact path="/">
         </Route>

         <Route path="/login">
          <Login />
         </Route>
         
         <Route path="/signup">
          <Signup />
         </Route>

         <Route path="*">
          {/*<NotFound/> */}
         </Route>
        </Switch>
    </div>

    </div>
    </Router>
  );
   
  
}

export default App;
