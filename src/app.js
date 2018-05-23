import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import { BrowserRouter as Router, Route, Redirect, Link, hashHistory} from 'react-router-dom';

import IndexPage from './pages/indexPage';

const app = (
  <Router history={hashHistory}>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/index">Index</Link></li>
    </ul>

    <hr/>
    <Redirect from="/" to="/index" />
    <Route exact path="/" component={IndexPage}/>
    <Route path="/index" component={IndexPage}/>
  </div>
</Router>
)

jQuery(function() {
  ReactDOM.render(
    app,
    document.getElementById('app'),
    function() {
      console.timeEnd('react-app')
    }
  );
})

