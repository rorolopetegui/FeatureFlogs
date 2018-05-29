import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';
import jQuery from 'jquery';
import App from './components/app';

const app = (
  <Router history={browserHistory}>
    <App />
  </Router>
)

jQuery(function () {
  ReactDOM.render(
    app,
    document.getElementById('app'),
    function () {
      console.timeEnd('react-app')
    }
  );
})