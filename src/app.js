console.log('running');
// JSX - javascript XML

let user = {
  userName: 'Leon Ji',
  location: 'Taiwan'
};

function getAge(age) {
  if (age) {
    return <p>Age: {age}</p>;
  }
}

let template = (
  <div>
    <h1>Name: {user.userName ? user.userName.toUpperCase() : 'Leon Ji'}</h1>
    {getAge(user.age)}
    <p> Location: {user.location} </p>
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
