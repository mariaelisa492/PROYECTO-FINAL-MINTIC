import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import {Login} from './pages/Login';
import {Home} from './pages/Home';
import {Products} from './pages/Products';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path = "/" component={Login}/>
      <Route exact path = "/home" component={Home}/>
      <Route exact path = "/products" component={Products}/>

      </Switch>
    </div>
  );
}

export default App;
