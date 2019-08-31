'use strict';

console.log('running');
// JSX - javascript XML

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' this is JSX jj'
  ),
  React.createElement(
    'p',
    null,
    ' info '
  )
);

var user = {
  userName: 'Leon Ji',
  location: 'Taiwan'
};

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Name: ',
    user.userName.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    ' Location: ',
    user.location,
    ' '
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
