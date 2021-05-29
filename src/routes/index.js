import React from 'react';
import App from '../components/App/app'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      {/* <Route path="/descriptions" component={App} /> */}
    </Switch>
  </BrowserRouter>

);

export default Routes