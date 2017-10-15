import { createStore, combineReducers } from 'redux';

const actionTypes = {
  SELECT_CAT: 'SELECT_CAT',
  APPLY_FILTER: 'APPLY_FILTER',
  REMOVE_FILTER: 'REMOVE_FILTER'
};
const omit = (object, blacklisted_keys) => Object.keys(object)
  .filter((key) => blacklisted_keys.indexOf(key) < 0)
  .reduce((newObj, key) => Object.assign(newObj, { [key]: object[key] }), {});

const appReducer = (state = { cat: '', filters: { blur: 2 } }, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CAT :
      return { cat: action.cat, filters: state.filters };
    case actionTypes.APPLY_FILTER :
      return { cat: state.cat, filters: Object.assign(state.filters, { [action.filter]: [action.filterValue] }) };
    case actionTypes.REMOVE_FILTER :
      return { cat: state.cat, filters: omit(state.filters, [action.filter]) };
    default :
      return state;
  }
};


const reducer = combineReducers({
  app: appReducer,
});

export default createStore(reducer, {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
