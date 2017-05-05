/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import types from './constants';
import {
  CALL_API
} from 'redux-api-middleware';

export function selectSerie(item) {
  return {
    type: types.SELECT_SERIE,
    item
  }
}

//TODO get id of the logged in user
export function saveUserInformation(user) {
  return (dispatch) => {
    dispatch(
      {
      [CALL_API]: {
        endpoint: 'http://localhost:4444/users/' + user.id,
        method: 'GET',
        credentials: 'same-origin',
        headers: {"Content-Type": "application/json"},
        types: [types.REQUEST_SAVE_SEEN, types.RECEIVE_SAVE_SEEN, types.FAILURE_SAVE_SEEN]
      }
    }
  )
  }
}

export function bookmarkSerie(id) {
  return (getState, dispatch) => {
    console.log("getState");
    console.log(getState());
    let userInformation = getState().get('global').get('user').toJS();
    userInformation.bookmarkedSeries.append(id);
    dispatch(saveUserInformation(userInformation));
    return {
      type: types.BOOKMARK_SERIE,
      id
    }
  }
}

export function seenSerie(id) {
  return (getState, dispatch) => {
    let userInformation = getState().get('global').get('user').toJS();
    userInformation.seenSeries.append(id);
    dispatch(saveUserInformation(userInformation));
    return {
      type: types.SEEN_SERIE,
      id
    }
  }
}
