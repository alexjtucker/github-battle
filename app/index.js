var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

// Render the DOM
ReactDOM.render(
  routes,
  document.getElementById('app')
);