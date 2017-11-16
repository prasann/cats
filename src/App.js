import React, { Component } from "react";
import Standalone from './Standalone';
import Chooser from './chooser/Component';
import Viewer from './viewer/Component';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import "./App.css";


class App extends Component {
  render() {
    return (
      <Router >
        <div >
          <Route exact path="/" component={Standalone} />
          <Route exact path="/chooser" component={Chooser} />
          <Route exact path="/viewer" component={Viewer} />
        </div >
      </Router >
    );
  }
}

export default App;
