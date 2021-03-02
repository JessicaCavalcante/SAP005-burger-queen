import React from 'react';
import { Login } from '../src/pages/login/index.js';
import { Register } from '../src/pages/register/index.js';
import { Kitchen } from './pages/kitchen/index.js';
import { Service } from '../src/pages/service/index.js';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from '../src/privateRoute.js';

export const Routes = () => {
  return (
    

    <Switch>
      <Route component={Login} exact path="/"/>
      <Route component={Register} exact path="/register"/>
      <PrivateRoute component={Service} exact path="/service"/>
      <PrivateRoute component={Kitchen} exact path="/kitchen"/>
    </Switch>
  );

  /*function requireAuth(next, replace) {
    console.log(localStorage.getItem('token'));
    if (!localStorage.getItem('token')) {
      return true;
    }
  }*/
}