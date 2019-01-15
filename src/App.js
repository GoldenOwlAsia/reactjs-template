import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import { About, NoMatch } from './screen';
import { Menu, Loading } from './component';

const AppRouter = () => (
  <Router>
    <div>
      <Menu />
      <Switch>
        <Route path="/" exact component={Loadable({ loader: () => import('./screen/Home'), loading: Loading })} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
