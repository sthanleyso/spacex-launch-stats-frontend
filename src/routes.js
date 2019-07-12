import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import LaunchDetails from './pages/LaunchDetails';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/launch/:flight_number" exact component={LaunchDetails} />
    </Switch>
  );
}
