import React, { Component } from "react";
import Standalone from './Standalone';
import ChooserApp from './ChooserApp';
import ViewerApp from "./ViewerApp";
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
          <Route exact path="/chooser" component={ChooserApp} />
          <Route exact path="/viewer" component={ViewerApp} />
        </div >
      </Router >
    );
  }
}

export default App;
