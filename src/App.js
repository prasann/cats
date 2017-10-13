import React, { Component } from 'react';
import Header from './Header';
import Viewer from './Viewer';
import Chooser from './Chooser';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container" >
        <div className="header" >
          <Header />
        </div>
        <div className="content" >
          <div className="viewer" >
            <Viewer/>
          </div>
          <div className="chooser" >
            <Chooser/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
