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

function getAge(age) {
  if (age) {
    return <p>Age: {age}</p>;
  }
}

let template2 = (
  <div>
    <h1>Name: {user.userName ? user.userName.toUpperCase() : 'Leon Ji'}</h1>
    {getAge(user.age)}
    <p> Location: {user.location} </p>
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
