import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { useDispatch } from 'react-redux';

import { login } from './actions/auth';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

function App() {

  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);

    });

  }, [dispatch, setChecking, setIsLoggedIn])


  if (checking) {
    return (
      <h1>Espere...</h1>
    )
  }

  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <PublicRoute
            exact
            path="/"
            component={Login}
            isAuthenticated={isLoggedIn}
            />
            
          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path="/home"
            component={Home} />
          <PrivateRoute exact path="/products" component={Products} />

        </Switch>
      </div>
    </Provider>

  );
}

export default App;
