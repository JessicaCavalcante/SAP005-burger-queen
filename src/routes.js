import React from 'react';
import { Login } from '../src/pages/login/index.js';
import { Register } from '../src/pages/register/index.js';
import { Kitchen } from './pages/kitchen/index.js';
import { Service } from '../src/pages/room-service/index.js';
import { Switch, Route } from 'react-router-dom';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/kitchen" component={Kitchen} exact />
      <Route path="/service" component={Service} exact />
    </Switch>
  );
}