import React, { Component } from "react";

class ChooserConnector extends Component {
  constructor() {
    super();
    this.state = { peerIp: '' };
    this.handleChange = this.handleChange.bind(this);
    this.connectToPeer = this.connectToPeer.bind(this);
  }

  handleChange(event) {
    this.setState({ peerIp: event.target.value });
  }

  connectToPeer(event) {
    console.log(this.state.peerIp);
    event.preventDefault();
  }

  render() {
    return <div >
      <h1 >Connect to a monitor</h1 >
      <input type="text" value={this.state.peerIp} onChange={this.handleChange} />
      <input type="button" value="Connect" onClick={this.connectToPeer} />
    </div >
  }
}

export default ChooserConnector;