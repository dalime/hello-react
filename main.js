var HelloWorld = React.createClass({
  getInitialState: function() {
    // initializes state of component
    return {
      counter1: 0,
      counter2: 0,
      elapsed: 0,
      intervalGoStop: "Stop"
    }

  },
  addToCounter1: function() {
    if (this.state.intervalGoStop === "Stop") {
      this.setState({counter1: this.state.counter1 + 1})
    }
  },
  subFromCounter1: function() {
    if (this.state.intervalGoStop === "Stop") {
      if (this.state.counter1 > 0) {
        this.setState({counter1: this.state.counter1 - 1})
      }
    }
  },
  addToCounter2: function() {
    if (this.state.intervalGoStop === "Stop") {
      this.setState({counter2: this.state.counter2 + 1})
    }
  },
  subFromCounter2: function() {
    if (this.state.intervalGoStop === "Stop") {
      if (this.state.counter2 > 0) {
        this.setState({counter2: this.state.counter2 - 1})
      }
    }
  },
  componentDidMount: function() {
    this.timer = window.setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    window.clearInterval(this.timer);
  },
  tick: function() {
    if (this.state.intervalGoStop === "Stop") {
      this.setState({elapsed: this.state.elapsed + 1});
    } else {
      this.setState({elapsed: this.state.elapsed});
    }
  },
  tock: function() {
    this.setState({elapsed: this.state.elapsed});
  },
  timeState: function() {
    if (this.state.intervalGoStop === "Stop") {
      this.setState({intervalGoStop: "Go"});
    } else {
      this.setState({intervalGoStop: "Stop"});
    }
  },
  render: function() {
    return (
      <div>
        <h1>Hello from React</h1>
        <p>Let's count stuff</p>
        <h3>Auto Time: {this.state.elapsed}</h3>
        <button onClick={this.timeState}>{this.state.intervalGoStop}</button>
        <hr/>
        <div>
          Counter 1: {this.state.counter1}
        </div>
        <div>
          <button onClick={this.addToCounter1}>+</button>
          <button onClick={this.subFromCounter1}>-</button>
        </div>
        <div>
          Counter 2: {this.state.counter2}
        </div>
        <button onClick={this.addToCounter2}>+</button>
        <button onClick={this.subFromCounter2}>-</button>
      </div>
    );
  }
});

  ReactDOM.render(
    <HelloWorld />,
    document.getElementById('example')
  );
