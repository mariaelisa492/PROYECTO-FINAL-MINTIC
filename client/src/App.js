import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import {Login} from './pages/Login';
import {Home} from './pages/Home'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path = "/" component={Login}/>
      <Route exact path = "/home" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
