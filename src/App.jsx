import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Screeens/Home/Home';
import UserDetails from './Screeens/UserDetails/UserDetails.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/user-detail">
              <UserDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
