import React, { Component } from "react";
import Chooser from "./chooser/Component";
import Peer from "peerjs";
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import { SnackbarContent } from 'material-ui/Snackbar';

const styles = {
  container: {
    display: "grid",
    justifyItems: "center",
  },
  peerIpInput: {
    marginRight: '20px',
  },
};

class ChooserApp extends Component {
  constructor() {
    super();
    this.state = {
      peer: new Peer("jeeboomba001", {
        host: "peercats.herokuapp.com",
        secure: true,
        port: 443,
        key: "peerjs",
        debug: 3
      }),
      peerIp: "",
      data: {},
      conn: undefined,
      connected: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.connectToPeer = this.connectToPeer.bind(this);
    this.openConnection = this.openConnection.bind(this);
    this.selectCat = this.selectCat.bind(this);
    this.connectorDom = this.connectorDom.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  handleChange(event) {
    this.setState({ peerIp: event.target.value });
  }

  openConnection() {
    this.state.conn.on("open", () => {
      this.setState({
        connected: true
      });
    });

    this.state.conn.on("data", this.onReceiveData);
  }

  connectToPeer(event) {
    const connection = this.state.peer.connect("jeeboomba002");
    if (connection) {
      this.setState(
        {
          conn: connection
        },
        this.openConnection
      );
    } else {
      console.error("Connection unsuccessful :(");
    }
    event.preventDefault();
  }

  selectCat(cat) {
    this.setState({ data: { cat: cat, filters: {} } }, () =>
      this.state.conn.send(this.state.data)
    );
  }

  applyFilter(filterName, filterValue) {
    this.setState(
      {
        data: {
          cat: this.state.data.cat,
          filters: Object.assign({}, this.state.data.filters, {
            [filterName]: filterValue
          })
        }
      },
      () => this.state.conn.send(this.state.data)
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.data === nextState.data;
  }

  connectorDom() {
    if (this.state.connected) {
      return <SnackbarContent
        message={`Connected to ${this.state.conn.peer}`} />
    } else {
      return (
        <div style={styles.connectedSuccess} >
          <h1 >Connect to a monitor</h1 >
          <Input
            type="text"
            placeholder="Monitor Name"
            style={styles.peerIpInput}
            value={this.state.peerIp}
            onChange={this.handleChange}
          />
          <Button raised color='primary' onClick={this.connectToPeer} >Connect</Button >
        </div >
      );
    }
  }

  render() {
    return (
      <div style={styles.container} >
        {this.connectorDom()}
        {this.state.connected ?
          <Chooser selectCat={this.selectCat} applyFilter={this.applyFilter} />
          : <div />}
      </div >
    );
  }
}

export default ChooserApp;
