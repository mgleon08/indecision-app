let count = 0;

let addOne = () => {
  count++;
  console.log('addOne', count);
  renderCounterApp();
};

let minusOne = () => {
  console.log('minusOne', count);
  count--;
  renderCounterApp();
};

let reset = () => {
  console.log(count);
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const template3 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}> +1 </button>
      <button onClick={minusOne}> -1 </button>
      <button onClick={reset}> reset </button>
    </div>
  );
  ReactDOM.render(template3, appRoot);
};

renderCounterApp();
