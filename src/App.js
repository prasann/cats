import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './Header';
import Viewer from './ViewerContainer';
import Chooser from './ChooserContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="container" >
          <div className="header" >
            <Header />
          </div >
          <div className="content" >
            <div className="chooser" >
              <Chooser />
            </div >
            <div className="viewer" >
              <Viewer />
            </div >
          </div >
        </div >
      </Provider >
    );
  }
}

export default App;
