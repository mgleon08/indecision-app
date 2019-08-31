console.log('running');
// JSX - javascript XML

let template = (
  <div>
    <h1> this is JSX jj</h1>
    <p> info </p>
  </div>
);

let user = {
  userName: 'Leon Ji',
  location: 'Taiwan'
};

let template2 = (
  <div>
    <h1>Name: {user.userName.toUpperCase()}</h1>
    <p> Location: {user.location} </p>
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
