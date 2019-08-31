console.log('running');
// JSX - javascript XML

// var template = <p> this is JSX</p>;
var template = React.createElement('h1', null, ' this is JSX');
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
