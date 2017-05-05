/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { Map, List } from 'immutable';
import types from './constants';

// The initial state of the App
//TODO: immutable
const initialState = Map({
  selectedSerie: Map(),
  user: Map(
    {
      "id": 1,
  "username": "thomas",
  "password": "test",
  "firstname": "Thomas",
  "lastname": "Dejagere",
  "seenSeries": [5],
  "bookmarkedSeries": [0]
}
  )
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_SERIE:
      return state.setIn(['selectedSerie'], Map(action.item));
    case types.BOOKMARK_SERIE:
      return state.setIn(['user', 'bookmarkedSeries'], state.get('user').get('bookmarkedSeries').push(action.id));
    case types.SEEN_SERIE:
      return state.setIn(['user', 'seenSeries'], state.get('user').get('seenSeries').push(action.id));
    default:
      return state;
  }
}

export default appReducer;
