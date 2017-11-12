import React, { Component } from 'react';

export class Blur extends Component {
  render() {
    return <feGaussianBlur in="Blur" stdDeviation={this.props.value} />;
  }
}

export class MorphErode extends Component {
  render() {
    return <feMorphology operator="erode" radius={this.props.value} />;
  }
}

export class MorphDilate extends Component {
  render() {
    return <feMorphology operator="dilate" radius={this.props.value} />;
  }
}

export class ColorSaturate extends Component {
  render() {
    return <feColorMatrix type="saturate" values={this.props.value} />;
  }
}

export class Hue extends Component {
  render() {
    return <feColorMatrix type="hueRotate" values={this.props.value} />;
  }
}
