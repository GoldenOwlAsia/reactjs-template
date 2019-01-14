import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About, NoMatch } from './screen';
import { Menu } from './component';

const AppRouter = () => (
  <Router>
    <div>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
