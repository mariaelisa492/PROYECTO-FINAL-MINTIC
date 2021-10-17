import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import { Login } from './pages/Login';
import { Products } from './pages/Products';
import { Seller } from './pages/Seller';
import { Sales } from './pages/Sales';
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/actions/index';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/sales" component={Sales} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/sellers" component={Seller} />
      </Switch>
    </div>
  );
}

export default App;
