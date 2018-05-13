import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <Route path='/' component={App}>
    </Route>
  </HashRouter>
  , 
  document.getElementById('root'));
registerServiceWorker();
