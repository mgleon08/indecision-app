'use strict';

console.log('running');
// JSX - javascript XML

var user = {
  userName: 'Leon Ji',
  location: 'Taiwan'
};

function getAge(age) {
  if (age) {
    return React.createElement(
      'p',
      null,
      'Age: ',
      age
    );
  }
}

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Name: ',
    user.userName ? user.userName.toUpperCase() : 'Leon Ji'
  ),
  getAge(user.age),
  React.createElement(
    'p',
    null,
    ' Location: ',
    user.location,
    ' '
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
