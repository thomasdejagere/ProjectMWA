/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS, Map, List } from 'immutable';
import types from './constants';

import {
  INIT_SEARCHPAGE
} from './constants';

//TODO: immutable!
// The initial state of the App
const initialState = Map({
  isInit: false,
  series: Map({
    isFetching: false,
    items: List(),
    queriedSeries: List()
  })
});

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case types.INIT:
      return state.set("isInit", true);

    case types.REQUEST_FILTERED_SERIES:
      return state.setIn(['series', 'isFetching'], true);

    case types.RECEIVE_FILTERED_SERIES:
      return state.setIn(['series', 'isFetching'], false).setIn(['series', 'items'], action.payload).setIn(['series', 'queriedSeries'], action.payload);

    case types.QUERY_SERIES:
      return state.setIn(['series', 'queriedSeries'], state.get('series').get('items').filter((item) => {
        return item.title.includes(action.searchValue);
      }));

    default:
      return state;
  }
}

export default searchReducer;
