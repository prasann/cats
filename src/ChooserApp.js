import React, { Component } from "react";
import Chooser from "./chooser/Component";
import Peer from "peerjs";

class ChooserApp extends Component {
  constructor() {
    super();
    this.state = {
      peer: new Peer("jeeboomba001",
        { host: 'peercats.herokuapp.com', secure: true, port: 443, key: 'peerjs', debug: 3 }),
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
      return <div >Connected to {this.state.conn.peer}</div >;
    } else {
      return (
        <div >
          <h1 >Connect to a monitor</h1 >
          <input
            type="text"
            value={this.state.peerIp}
            onChange={this.handleChange}
          />
          <input type="button" value="Connect" onClick={this.connectToPeer} />
        </div >
      );
    }
  }

  render() {
    return (
      <div >
        {this.connectorDom()}
        <Chooser selectCat={this.selectCat} applyFilter={this.applyFilter} />
      </div >
    );
  }
}

export default ChooserApp;
