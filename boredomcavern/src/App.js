import React from 'react';
import './App.css';
import Header from "./Header";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Register from "./Register";
import Signin from './Signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header/>
          </Route>
          <Route path="/register">
            <Header/>
            <Register/>
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
