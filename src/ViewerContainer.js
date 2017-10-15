import { connect } from 'react-redux';
import Viewer from './Viewer';

const mapDispatchers = dispatch => ({});

const mapStateToProps = (state) => ({
  cat: state.app.cat,
  filters: state.app.filters,
});

export default connect(mapStateToProps, mapDispatchers)(Viewer);
