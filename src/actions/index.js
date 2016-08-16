import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://dartmouthbot.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';

// const API_KEY = '?key=..'

// keys for actiontypes
export const ActionTypes = {
  FETCH_LOC: 'FETCH_LOC',
  FETCH_LOCS: 'FETCH_LOCS',
  FETCH_BIO: 'FETCH_BIO',
  FETCH_BIOS: 'FETCH_BIOS',
  FETCH_DATA: 'FETCH_DATA',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  SET_ERROR: 'SET_ERROR',
  UNSET_ERROR: 'UNSET_ERROR',
};

function reportError(error) {
  return ({
    type: ActionTypes.SET_ERROR,
    message: error,
  });
}

export function removeError() {
  return ({
    type: ActionTypes.UNSET_ERROR,
  });
}

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

export function fetchBios() {
  return (dispatch => {
    axios.get(`${ROOT_URL}/bios`)
    .then(response => {
      dispatch({
        type: ActionTypes.FETCH_BIOS,
        bios: response.data,
      }).catch(error => {
        reportError(error);
      });
    });
  });
}

export function fetchBio(id) {
  return (dispatch => {
    axios.get(`${ROOT_URL}/bios/:${id}`)
    .then(response => {
      dispatch({
        type: ActionTypes.FETCH_BIO,
        bio: response.data,
      });
    });
  });
}

export function signinUser(loginInfo) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, loginInfo)
    .then(response => {
      dispatch({
        type: ActionTypes.AUTH_USER,
      });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(err => {
      console.log(err);
      dispatch(reportError(`Sign In Failed: ${err.response.data}`));
    });
  };
}

export function signupUser(loginInfo) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, loginInfo)
    .then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(err => {
      dispatch(reportError(`Sign Up Failed: ${err.response.data}`));
    });
  };
}

export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}
