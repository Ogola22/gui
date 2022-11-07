import Navbar from './Components/Navbars';
import Signup from './Components/signup';
import Login from './Components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route path="/Signup">
            <Signup/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
