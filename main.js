var HelloWorld = React.createClass({
  getInitialState: function() {
    // initializes state of component
    return {
      counter: 0,
      counter2: 100,
      time: 0,
      secondsElapsed: 0
    }

  },
  addToCounter: function() {
    this.setState({counter: this.state.counter + 1, counter2: this.state.counter2 + 1})
  },
  subFromCounter: function() {
    if (this.state.counter2 > 0) {
      this.setState({counter2: this.state.counter2 - 1})
    }
    if (this.state.counter > 0) {
      this.setState({counter: this.state.counter - 1})
    }
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElasped + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>
        <h1>Hello from React</h1>
        <p>Let's count stuff</p>
        <h3>Auto Time: {this.state.secondsElapsed}</h3>
        <hr/>
        <div>
          Counter: {this.state.counter === 10 ? 'WOO TEN!!!' : this.state.counter}
        </div>
        <div>
          Counter: {this.state.counter2 === 50 ? 'WOO FIFTY!!!' : this.state.counter2}
        </div>
        <button onClick={this.addToCounter}>+</button>
        <button onClick={this.subFromCounter}>-</button>
      </div>
    );
  }
});
//        <button onClick={this.startStopTimer}>GO</button>
  ReactDOM.render(
    <HelloWorld />,
    document.getElementById('example')
  );
