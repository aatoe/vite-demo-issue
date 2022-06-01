import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

import 'lib-flexible';
// import './reset.less';

const render = () => {
  const rootElement = document.getElementById('root');
  console.log(1111);

  const App: React.FC = () => <Layout />;

  ReactDOM.render(<App />, rootElement);
};

render();

// if (process.env.VITE_NODE_ENV === "development" && module.hot) {
//   module.hot.accept(() => {
//     render();
//   });
// }
