class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  handleAddOne() {
    this.setState(preState => {
      return {
        count: preState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState(preState => {
      return {
        count: preState.count - 1
      };
    });
  }

  handleReset() {
    // async
    this.setState(() => {
      return {
        count: 0
      };
    });
    // this.setState(preState => {
    //   return {
    //     count: preState.count + 1
    //   };
    // });
    // sync 當執行 +1 時，count 還是原本的數字
    // 抓的是當前的 count 不是更改後的 count
    // this.setState({
    //   count: 0
    // });
    // this.setState({
    //   count: this.state.count + 1
    // });
  }

  render() {
    return (
      <div>
        <h1> Counter: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// let addOne = () => {
//   count++;
//   console.log('addOne', count);
//   renderCounterApp();
// };

// let minusOne = () => {
//   console.log('minusOne', count);
//   count--;
//   renderCounterApp();
// };

// let reset = () => {
//   console.log(count);
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const template3 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}> +1 </button>
//       <button onClick={minusOne}> -1 </button>
//       <button onClick={reset}> reset </button>
//     </div>
//   );
//   ReactDOM.render(template3, appRoot);
// };

// renderCounterApp();
