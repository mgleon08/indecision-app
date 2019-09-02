class Header extends React.Component {
  render() {
    return (
      <div>
        <h1> Indecision </h1>
        <h2> Put your life in the hand of computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button> what should i do ? </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return <div>Options Component</div>;
  }
}

class AddOptions extends React.Component {
  render() {
    return <div>AddOptions Component</div>;
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOptions />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
