import React, { Component } from "react";
import Chooser from './chooser/Component';
import ChooserConnector from './ChooserConnector';

class ChooserApp extends Component {
  constructor() {
    super();
    this.state = { viewer: '' }
  }

  render() {
    if (this.state.viewer === '') {
      return <ChooserConnector />
    } else {
      return <Chooser />
    }
  }
}

export default ChooserApp;