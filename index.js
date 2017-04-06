import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './app/screens/Home';
import Sales from './app/screens/Sales';
import Connection from './app/screens/Connection';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

import Layouthome from './app/screens/Layouthome';

ReactDOM.render(
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Layouthome} >
          <IndexRoute component={Home}/>
          <Route path = "/sales" component = {Sales} />
          <Route path = "/connection" component = {Connection} />
      </Route>
    </Router>
  </div>,
  document.getElementById('container')
);
