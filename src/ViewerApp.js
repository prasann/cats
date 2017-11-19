import React, { Component } from "react";
import Peer from 'peerjs';
import Viewer from './viewer/Component';

class ViewerApp extends Component {
  constructor() {
    super();
    this.state = {
      peer: new Peer('jeeboomba002', {
        key: '3lj66054uazl4n29'
      }),
      data: {}
    };
    this.initPeer = this.initPeer.bind(this);
    this.onReceiveData = this.onReceiveData.bind(this);
    this.openConnection = this.openConnection.bind(this);
  }

  onReceiveData(data) {
    this.setState({ data: data });
  }

  openConnection() {
    this.state.conn.on('open', () => {
      this.setState({
        connected: true
      });
    });

    this.state.conn.on('data', this.onReceiveData);
  };

  initPeer() {
    this.state.peer.on('connection', (connection) => {
      this.setState({
        conn: connection
      }, this.openConnection);
    });
  }

  componentDidMount() {
    this.initPeer();
  }

  connectorDOM() {
    if (this.state.connected) {
      return <div >{this.state.conn.peer} is connected</div >
    }
  }

  render() {
    return <div >
      {this.connectorDOM()}
      <Viewer cat={this.state.data.cat}
              filters={this.state.data.filters || {}} />
    </div >;
  }
}

export default ViewerApp;