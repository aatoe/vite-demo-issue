import React, { FC, useEffect, useRef, useState } from 'react';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import NoMatch from './components/NoMatch';
import routes from '../router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './index.module.less';

const Layout: FC = () => {
  console.log(routes, 'routes');

  return (
    <Router basename='/demo'>
      <div className={styles.container}>
        <Switch>
          {routes.map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
