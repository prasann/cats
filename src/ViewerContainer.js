import { connect } from 'react-redux';
import Viewer from './Viewer';

const mapDispatchers = dispatch => ({});

const mapStateToProps = (state) => ({
  cat: state.cats.cat
});

export default connect(mapStateToProps, mapDispatchers)(Viewer);
