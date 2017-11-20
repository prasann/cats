import React, { Component } from "react";
import Peer from "peerjs";
import Viewer from "./viewer/Component";
import { SnackbarContent } from 'material-ui/Snackbar';

const styles = {
  container: {
    display: "grid",
    justifyItems: "center",
  },
  viewerContainer: {
    marginTop: '50px',
  }
};


class ViewerApp extends Component {
  constructor() {
    super();
    this.state = {
      peer: new Peer("jeeboomba002", {
        host: "peercats.herokuapp.com",
        secure: true,
        port: 443,
        key: "peerjs",
        debug: 3
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
    this.state.conn.on("open", () => {
      this.setState({
        connected: true
      });
    });

    this.state.conn.on("data", this.onReceiveData);
  }

  initPeer() {
    this.state.peer.on("connection", connection => {
      this.setState(
        {
          conn: connection
        },
        this.openConnection
      );
    });
  }

  componentDidMount() {
    this.initPeer();
  }

  connectorDOM() {
    if (this.state.connected) {
      return <SnackbarContent
        message={`Connected to ${this.state.conn.peer}`} />
    } else {
      return <div >
        <h1 >Monitor Name</h1 >
      </div >
    }
  }

  render() {
    return (
      <div style={styles.container} >
        {this.connectorDOM()}
        {this.state.connected ?
          <div style={styles.viewerContainer} >
            <Viewer
              cat={this.state.data.cat}
              filters={this.state.data.filters || {}} />
          </div >
          : <div />}

      </div >
    );
  }
}

export default ViewerApp;
