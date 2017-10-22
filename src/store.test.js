import deepFreeze from 'deep-freeze';
import { reducer } from './store';

describe('store', () => {
  it('should react to select_cat event', () => {
    const oldState = {};
    const action = {
      type: 'SELECT_CAT',
      cat: 'Cat',
    };
    deepFreeze(oldState);
    expect(reducer(oldState, action).app.cat).toBe('Cat');
  });

  it('should react to apply_filter event', () => {
    const oldState = { app: { cat: 'asds', filters: { blur: '2', morphErode: '3' } } };
    const action = {
      type: 'APPLY_FILTER',
      filter: 'blur',
      filterValue: '42',
    };

    deepFreeze(oldState);
    const intermediateState = reducer(oldState, action);

    expect(intermediateState.app.filters.blur).toBe('42');
    const newAction = {
      type: 'APPLY_FILTER',
      filter: 'blur',
      filterValue: '402',
    };
    deepFreeze(intermediateState);
    expect(reducer(intermediateState, newAction).app.filters.blur).toBe('402');
  });
});