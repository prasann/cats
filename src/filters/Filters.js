import React, { Component } from 'react';

export class Blur extends Component {
  render() {
    return <feGaussianBlur in="Blur" stdDeviation={this.props.value} />
  }
}

export class MorphErode extends Component {
  render() {
    return <feMorphology operator="erode" radius={this.props.value} />
  }
}