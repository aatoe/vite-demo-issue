import React from 'react';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import TabBar from '../TabBar';
import Navigator from '../Navigator';

import { useHistory } from 'react-router-dom';
import { Modal } from 'antd-mobile';

const RouteWithSubRoutes: React.FC<Props> = (route: Props) => {
  const history = useHistory();
  const [pathname, setPathname] = useState('');

  return (
    <>
      {route.navigatorShow && <Navigator {...route.navigatorConfig} />}
      <Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />
      {route.tabbarShow && <TabBar />}
    </>
  );
};

export default RouteWithSubRoutes;
