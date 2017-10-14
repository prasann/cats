import React, { Component } from 'react';
import './Chooser.css';

const CatChooser = () => {
  return <div>
    <input type="image" src="https://octodex.github.com/images/jetpacktocat.png" />
    <input type="image" src="https://octodex.github.com/images/filmtocat.png" />
    <input type="image" src="https://octodex.github.com/images/mountietocat.png" />
    <input type="image" src="https://octodex.github.com/images/saritocat.png" />
    <input type="image" src="https://octodex.github.com/images/steroidtocat.png" />
    <input type="image" src="https://octodex.github.com/images/dunetocat.png" />
    <input type="image" src="https://octodex.github.com/images/minertocat.png" />
    <input type="image" src="https://octodex.github.com/images/catstello.png" />
    <input type="image" src="https://octodex.github.com/images/saketocat.png" />
    <input type="image" src="https://octodex.github.com/images/yaktocat.png" />
  </div>;
};

const FilterChooser = () => {
  return <div>
    <h2>Filter Controls</h2>

    <div className="filter-controls">
    <div className="filter-control">
      <label htmlFor="blur-filter" >Blur</label>
      <input type="range" min="0" max="10"/>
    </div>
    <div className="filter-control">
      <label htmlFor="morph-filter" >Morph</label>
      <input type="range" min="0" max="10"/>
    </div>
    <div className="filter-control">
      <label htmlFor="haze-filter" >Haze</label>
      <input type="range" min="0" max="10"/>
    </div>
    </div>
  </div>;
};

class Chooser extends Component {
  render() {
   return <div>
      <CatChooser/>
      <FilterChooser/>
    </div>;
  }
}

export  default  Chooser;