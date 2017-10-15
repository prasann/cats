import React, { Component } from 'react';

export class Blur extends Component {
  render() {
    return <feGaussianBlur in="Blur" stdDeviation={this.props.value} />
  }
}