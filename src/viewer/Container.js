import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Blur,
  MorphErode,
  MorphDilate,
  Hue,
  ColorSaturate
} from "./AppliedFilters";

const componentMapping = {
  blur: Blur,
  morphErode: MorphErode,
  morphDilate: MorphDilate,
  colorSaturate: ColorSaturate,
  hue: Hue
};

const getComponent = (filterName, filterValue) => {
  const FilterComponent = componentMapping[filterName];
  return <FilterComponent key={Math.random()} value={filterValue} />;
};

const filterComponents = filterList => {
  let filters = [];
  Object.keys(filterList).forEach(function(key) {
    filters.push(getComponent(key, filterList[key]));
  });

  return filters;
};

class Viewer extends Component {
  render() {
    if (this.props.cat) {
      return (
        <div>
          <svg width="660" height="500">
            <filter id="filtersPicture">
              {filterComponents(this.props.filters)}
            </filter>
            <image
              width="100%"
              height="100%"
              xlinkHref={`https://octodex.github.com/images/${
                this.props.cat
              }.png`}
              filter={
                Object.keys(this.props.filters).length !== 0
                  ? "url(#filtersPicture)"
                  : ""
              }
            />
          </svg>
        </div>
      );
    }
    return <b>Select a cat!!!</b>;
  }
}

const mapDispatchers = dispatch => ({});

const mapStateToProps = state => ({
  cat: state.app.cat,
  filters: state.app.filters
});

export default connect(mapStateToProps, mapDispatchers)(Viewer);
