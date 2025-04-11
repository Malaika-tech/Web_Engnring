import React, { Component } from "react";

export class Interval extends Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // Initial count value
  }

  // Lifecycle method: Runs once when the component mounts
  componentDidMount() {
    this.interval = setInterval(() => {
      // Updating state every 5 seconds
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 5000);
  }

  // Lifecycle method: Runs when the component is about to unmount
  componentWillUnmount() {
    clearInterval(this.interval); // Clearing interval to prevent memory leaks
  }

  // Render method to display UI
  render() {
    return <h2>Count: {this.state.count}</h2>; // Displaying count value
  }
}

export default Interval; // Exporting component for use in other files
