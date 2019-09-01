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

var template2 = React.createElement(
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

var count = 0;
var addOne = function addOne() {
  count++;
  console.log('addOne', count);
  renderCounterApp();
};

var minusOne = function minusOne() {
  console.log('minusOne', count);
  count--;
  renderCounterApp();
};

var reset = function reset() {
  console.log(count);
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var template3 = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      ' +1 '
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      ' -1 '
    ),
    React.createElement(
      'button',
      { onClick: reset },
      ' reset '
    )
  );
  ReactDOM.render(template3, appRoot);
};

renderCounterApp();
