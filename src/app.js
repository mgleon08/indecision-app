console.log('running');
// JSX - javascript XML

var template = (
  <div>
    <h1> this is JSX jj</h1>
    <p> info </p>
  </div>
);

var template2 = (
  <div>
    <h1>Name: Leon Ji</h1>
    <p> Location: Taiwan </p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
