import React, { Component } from 'react';
import { Blur, MorphErode }  from './filters/Filters';

const componentMapping = {
  "blur": Blur,
  "morphErode": MorphErode
};

const getComponent = (filterName, filterValue) => {
  const FilterComponent = componentMapping[filterName];
  return <FilterComponent key={Math.random()} value={filterValue} />
};

const filterComponents = (filterList) => {
  let filters = [];
  Object.keys(filterList).forEach(function (key) {
    filters.push(getComponent(key, filterList[key]));
  });

  return filters;
};

class Viewer extends Component {
  render() {
    if (this.props.cat) {
      return <div>
        <svg width="660" height="500" >
          <filter id="filtersPicture" >
            {filterComponents(this.props.filters)}
          </filter>
          <image
            width="100%" height="100%"
            xlinkHref={`https://octodex.github.com/images/${this.props.cat}.png`}
            filter={this.props.filters !== {} ?
              "url(#filtersPicture)" : ""}
          />
        </svg>
      </div>;
    }
    return <b>Select a cat!!!</b>;
  }
}

export  default  Viewer;