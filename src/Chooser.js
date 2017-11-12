import React, { Component } from 'react';
import Filter from './Filter';
import definedFilters from './filters.json';

const availableCats = [
  "jetpacktocat",
  "filmtocat",
  "mountietocat",
  "saritocat",
  "steroidtocat",
  "dunetocat",
  "minertocat",
  "catstello",
  "saketocat",
  "yaktocat"
];

const Cat = (props) => {
  return <input type="image" alt={props.name}
                src={`https://octodex.github.com/images/${props.name}.png`}
                onClick={() => props.onClick(props.name)} />
};

const CatChooser = (props) => {
  return <div >
    {availableCats.map((catName) => {
      return <Cat key={Math.random()} name={catName} onClick={props.onSelect} />;
    })}
  </div >;
};

const filters = () => {
  const resultFilters = [];
  Object.keys(definedFilters).forEach(function (key) {
    const filterObj = definedFilters[key];
    resultFilters.push(
      <Filter
        name={key}
        key={Math.random()}
        label={filterObj.label}
        min={filterObj.min}
        max={filterObj.max}
        value={filterObj.default}
        step={filterObj.step} />);
  });
  return resultFilters;
};


const FilterChooser = () => {
  return <div >
    <h2 >Filter Controls</h2 >
    <div className="filter-controls" >
      {filters()}
    </div >
  </div >;
};

class Chooser extends Component {
  render() {
    return <div >
      <CatChooser onSelect={this.props.selectCat} />
      <FilterChooser />
    </div >;
  }
}

export default Chooser;