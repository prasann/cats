import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Filter.css';

class Filter extends Component {
  constructor(props) {
    super();
    this.state = { value: props.value };
    this.slideChanger = this.slideChanger.bind(this);
  }

  slideChanger(event) {
    this.setState({ value: event.target.value });
    this.props.changeSlider(this.props.name, event.target.value);
  };

  render() {
    return <div className="filter-control" >
      <label>{this.props.label}</label>
      <input type="range" min={this.props.min}
             max={this.props.max}
             step={this.props.step}
             value={this.state.value}
             onChange={this.slideChanger} />
    </div>
  }
}

const mapDispatchers = dispatch => ({
  changeSlider: (filterName, filterValue) => {
    dispatch({
      type: 'APPLY_FILTER',
      filter: filterName,
      filterValue: filterValue,
    });
  }
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchers)(Filter);
