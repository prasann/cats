import React, { Component } from 'react';

class Viewer extends Component {
  render() {
    if (this.props.cat) {
      return <div>
        <svg width="660" height="500" >
          <image
            width="100%" height="100%"
            xlinkHref={`https://octodex.github.com/images/${this.props.cat}.png`} />
        </svg>
      </div>;
    }
    return <b>Select a cat!!!</b>;
  }
}

export  default  Viewer;