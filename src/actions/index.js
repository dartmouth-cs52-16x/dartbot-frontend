import axios from 'axios';

// const ROOT_URL = '';
const ROOT_URL = 'http://localhost:9090/api';

// const API_KEY = '?key=..'

// keys for actiontypes
export const ActionTypes = {
  FETCH_LOC: 'FETCH_LOC',
  FETCH_LOCS: 'FETCH_LOCS',
  FETCH_BIO: 'FETCH_BIO',
  FETCH_BIOS: 'FETCH_BIOS',
  FETCH_DATA: 'FETCH_DATA',
  ADD_DATA: 'ADD_DATA',
  UPDATE_DATA: 'UPDATE_DATA',
};

export function fetchData() {
  return (dispatch => {
    axios.get(`${ROOT_URL}/data`)
    .then(response => {
      dispatch({
        type: ActionTypes.FETCH_DATA,
        data: response.data,
      });
    }).catch(error => {
      console.log(error);
    });
  });
}
