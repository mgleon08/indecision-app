class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
      </div>
    );
  }
}

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
    return (
      <div>
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <div>Options Component</div>
        <div>Options Component</div>
        <div>Options Component</div>
      </div>
    );
  }
}

class AddOptions extends React.Component {
  render() {
    return <div>AddOptions Component</div>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
