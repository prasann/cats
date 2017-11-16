import React from "react";
import Cats from "./Cats";
import Filters from "./Filters";

const Chooser = props => {
  return (
    <div>
      <Cats onSelect={props.selectCat} />
      <Filters onChange={props.applyFilter} />
    </div>
  );
};

export default Chooser;