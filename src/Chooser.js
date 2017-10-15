import React, { Component } from 'react';
import './Chooser.css';

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
      <div className="filter-control" >
        <label htmlFor="blur-filter" >Blur</label>
        <input type="range" min="0" max="10" />
      </div>
      <div className="filter-control" >
        <label htmlFor="morph-filter" >Morph</label>
        <input type="range" min="0" max="10" />
      </div>
      <div className="filter-control" >
        <label htmlFor="haze-filter" >Haze</label>
        <input type="range" min="0" max="10" />
      </div>
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