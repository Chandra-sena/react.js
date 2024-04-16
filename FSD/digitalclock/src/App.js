import React, { Component } from 'react';
class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div>
        <h1>Digital Clock</h1>
        <p>Current Time: {this.state.time}</p>
      </div>
    );
  }
}

export default DigitalClock;
