import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { About, NoMatch } from './screen';
import { Menu, Loading } from './component';
import reducer from './reducers';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

const AppRouter = () => (
  <Provider store={store}>
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
  </Provider>
);

export default AppRouter;
