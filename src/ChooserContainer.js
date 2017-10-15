import { connect } from 'react-redux';
import Chooser from './Chooser';

const mapDispatchers = dispatch => ({
  selectCat: (cat) => {
    dispatch({
      type: 'SELECT_CAT',
      cat
    });
  },

});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchers)(Chooser);
