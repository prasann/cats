import React, { Component } from 'react';

class Viewer extends Component {
  render() {
    return <div>
      <svg>
        <image
          width="100%" height="100%"
          xlinkHref="https://octodex.github.com/images/jetpacktocat.png" />
      </svg>
      <div>
        <span> Source for Octocats: https://octodex.github.com/</span>
      </div>
    </div>;
  }
}

export  default  Viewer;