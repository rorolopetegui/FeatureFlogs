import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import App from './components/app';

const app = (
  <App />
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