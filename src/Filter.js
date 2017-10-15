import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  render() {
    return <div className="filter-control" >
      <label>{this.props.label}</label>
      <input type="range" min={this.props.min}
             max={this.props.max}
             step={this.props.step} />
    </div>
  }
}

export default Filter;
