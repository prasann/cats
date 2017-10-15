import React, { Component } from 'react';
import Filter from './Filter';

const Cat = (props) => {
  return <input type="image" alt={props.name}
                src={`https://octodex.github.com/images/${props.name}.png`}
                onClick={() => props.onClick(props.name)} />
};

const CatChooser = (props) => {
  return <div>
    <Cat name="jetpacktocat" onClick={props.onSelect} />
    <Cat name="filmtocat" onClick={props.onSelect} />
    <Cat name="mountietocat" onClick={props.onSelect} />
    <Cat name="saritocat" onClick={props.onSelect} />
    <Cat name="steroidtocat" onClick={props.onSelect} />
    <Cat name="dunetocat" onClick={props.onSelect} />
    <Cat name="minertocat" onClick={props.onSelect} />
    <Cat name="catstello" onClick={props.onSelect} />
    <Cat name="saketocat" onClick={props.onSelect} />
    <Cat name="yaktocat" onClick={props.onSelect} />
  </div>;
};

const FilterChooser = () => {
  return <div>
    <h2>Filter Controls</h2>
    <div className="filter-controls" >
      <Filter label="Blur" min="0" max="50" step="1" />
      <Filter label="Morph-Erode" min="1" max="8" step="0.5" />
      <Filter label="Morph-Dilate" min="1" max="50" step="1" />
      <Filter label="Color-Saturate" min="0.1" max="4" step="0.1" />
      <Filter label="Hue" min="1" max="360" step="10" />
      <Filter label="Displacement" min="0" max="80" step="5" />
    </div>
  </div>;
};

class Chooser extends Component {
  render() {
    return <div>
      <CatChooser onSelect={this.props.selectCat} />
      <FilterChooser/>
    </div>;
  }
}

export  default  Chooser;