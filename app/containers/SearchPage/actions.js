import {
  INIT_SEARCHPAGE
} from './constants'
import {CALL_API} from 'redux-api-middleware';
import types from './constants';

export function isInit() {
  return {
    type: types.INIT
  }
}

export function fetchSeries() {
  return (dispatch) => {
    dispatch(
      {
      [CALL_API]: {
        endpoint: 'http://localhost:4444/series',
        method: 'GET',
        credentials: 'same-origin',
        headers: {"Content-Type": "application/json"},
        types: [types.REQUEST_FILTERED_SERIES, types.RECEIVE_FILTERED_SERIES, types.FAILURE_FILTERED_SERIES]
      }
    }
  )
  }
}

export function querySeries(searchValue) {
  return {
    type: types.QUERY_SERIES,
    searchValue
  }
}

//TODO get id of the logged in user
export function seenSerie(id) {
  return (dispatch) => {
    dispatch(
      {
      [CALL_API]: {
        endpoint: 'http://localhost:4444/users/1',
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
  return (dispatch) => {

  }
}
