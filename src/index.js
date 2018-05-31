import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import jQuery from 'jquery';
import App from './components/app';

class Index extends Component {
  render() {
    return (
      <Router >
        <App />
      </Router>
    )
  }
}

jQuery(function () {
  ReactDOM.render(
    <Index />,
    document.getElementById('app'),
    function () {
      console.timeEnd('react-app')
    }
  );
})