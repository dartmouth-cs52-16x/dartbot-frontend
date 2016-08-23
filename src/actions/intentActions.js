import axios from 'axios';
import { reportError } from './index';

const ROOT_URL = 'http://dartmouthbot.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';

// const API_KEY = '?key=..'

// keys for actiontypes
export const IntentActionTypes = {
  FETCH_INTENT: 'FETCH_INTENT',
  UPDATE_INTENT: 'UPDATE_INTENT',
};

export function fetchIntent() {
  return (dispatch => {
    axios.get(`${ROOT_URL}/intent/data`)
    .then(response => {
      dispatch({
        type: IntentActionTypes.FETCH_INTENT,
        payload: response.data,
      });
    }).catch(error => {
      reportError(`Fetching failed: ${error.response.data}`);
    });
  });
}


export function updateIntent(intent) {
  return (dispatch => {
    axios.put(`${ROOT_URL}/intent/edit`, intent)
    .then(response => {
      dispatch(fetchIntent());
    }).catch(error => {
      reportError(`Updating failed: ${error.response.data}`);
    });
  });
}
