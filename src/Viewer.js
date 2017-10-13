import React, { Component } from 'react';

class Viewer extends Component {
  render() {
    return <div>
      <svg width="660" height="500" >
        <image
          width="100%" height="100%"
          xlinkHref="https://octodex.github.com/images/jetpacktocat.png" />
      </svg>
    </div>;
  }
}

export  default  Viewer;