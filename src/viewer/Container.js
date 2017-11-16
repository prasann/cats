import Viewer from './Component';
import { connect } from "react-redux";

const mapDispatchers = dispatch => ({});

const mapStateToProps = state => ({
  cat: state.app.cat,
  filters: state.app.filters
});

export default connect(mapStateToProps, mapDispatchers)(Viewer);
