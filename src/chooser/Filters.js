import React, { Component } from "react";
import definedFilters from "./filters.json";

const styles = {
  filterControl: {
    margin: "20px 0",
    padding: "20px 0",

    label: {
      fontWeight: "bold",
      display: "inline-block",
      width: "150px",
      marginBottom: "15px"
    },

    sliderContainer: {
      width: "50%"
    },

    input: {
      textAlign: "right"
    }
  },

  filterControls: {
    textAlign: "left",
    marginLeft: "20px"
  }
};

class Filter extends Component {
  constructor(props) {
    super();
    this.state = { value: props.value };
    this.slideChanger = this.slideChanger.bind(this);
  }

  slideChanger(event) {
    this.setState({ value: event.target.value });
    this.props.applyFilter(this.props.name, event.target.value);
  }

  render() {
    return (
      <div style={styles.filterControl}>
        <label htmlFor={this.props.name} style={styles.filterControl.label}>
          {this.props.label}
        </label>
        <input
          id={this.props.name}
          type="range"
          min={this.props.min}
          style={styles.filterControl.input}
          max={this.props.max}
          step={this.props.step}
          value={this.state.value}
          onChange={this.slideChanger}
        />
      </div>
    );
  }
}

const buildFilters = applyFilterFn => {
  const resultFilters = [];
  Object.keys(definedFilters).forEach(function(key) {
    const filterObj = definedFilters[key];
    resultFilters.push(
      <Filter
        name={key}
        key={Math.random()}
        label={filterObj.label}
        min={filterObj.min}
        max={filterObj.max}
        value={filterObj.default}
        step={filterObj.step}
        applyFilter={applyFilterFn}
      />
    );
  });
  return resultFilters;
};

const Filters = props => {
  return (
    <div>
      <h2>Filter Controls</h2>
      <div style={styles.filterControls}>{buildFilters(props.onChange)}</div>
    </div>
  );
};

export default Filters;
