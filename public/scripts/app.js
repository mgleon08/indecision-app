'use strict';

console.log('running');
// JSX - javascript XML

var template = React.createElement(
  'p',
  null,
  ' this is JSX'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
