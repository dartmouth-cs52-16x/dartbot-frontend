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

function uploadImage(file, id) {
  axios.post(`${ROOT_URL}/images`, { filename: file.name, filetype: file.type, id })
  .then(response => {
    const signedUrl = response.data.requestUrl;

    const options = {
      headers: {
        'Content-Type': file.type,
      },
    };
    axios.put(signedUrl, file, options);
  }).catch(error => {
    // catch error here
  });
}

export function createBio(bio, file) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/bios`, bio).then(response => {
      if (file) {
        uploadImage(file, response.data._id);
      }
      dispatch({
        type: ActionTypes.CREATE_BIO,
        payload: response.data,
      });
    }).catch(error => {
      // dispatch({
      //   type: ActionTypes.ERROR,
      // });
    });
  };
}

export function updateBio(bio, file, id) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/bios/${id}`, bio).then((response) => {
      if (file) {
        uploadImage(file, response.data._id);
      }
      dispatch({
        type: ActionTypes.UPDATE_BIO,
        payload: bio,
      });
    }).catch(error => {
      // catch the error
    });
  };
}

export function deleteBio(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/bios/${id}`).then((response) => {
      dispatch({
        type: ActionTypes.DELETE_BIO,
        payload: response.data,
      });
      browserHistory.push('/');
    }).catch(error => {
      // error
    });
  };
}

export function fetchLocs() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/locs`)
    .then(response => {
      dispatch({
        type: ActionTypes.FETCH_LOCS,
        payload: response.data,
      });
    }).catch(err => {
      dispatch(reportError(`Retreiving locations faild: ${err.response.data}`))
    });
  }
}

export function signinUser(loginInfo) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, loginInfo)
    .then(response => {
      dispatch({
        type: ActionTypes.AUTH_USER,
      });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/admin');
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
