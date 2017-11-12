import React from "react";
import { connect } from "react-redux";
import Cats from "./Cats";
import Filters from "./Filters";

const mapDispatchers = dispatch => ({
  selectCat: cat => {
    dispatch({
      type: "SELECT_CAT",
      cat
    });
  },

  applyFilter: (filterName, filterValue) => {
    dispatch({
      type: "APPLY_FILTER",
      filter: filterName,
      filterValue: filterValue
    });
  }
});

const Chooser = props => {
  return (
    <div>
      <Cats onSelect={props.selectCat} />
      <Filters onChange={props.applyFilter} />
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchers)(Chooser);
