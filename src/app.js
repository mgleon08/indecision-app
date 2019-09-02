class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hand of computer';
    const options = ['Thing1', 'Thing2', 'Thing3'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOptions />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.title} </h1>
        <h2> {this.subtitle} </h2>
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
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOptions extends React.Component {
  render() {
    return <div>AddOptions Component</div>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
