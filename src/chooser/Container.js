import { connect } from "react-redux";
import Chooser from "./Component";

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

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchers)(Chooser);
