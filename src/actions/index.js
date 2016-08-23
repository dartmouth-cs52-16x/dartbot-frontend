import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://dartmouthbot.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';

// const API_KEY = '?key=..'

// keys for actiontypes
export const ActionTypes = {
  SET_ERROR: 'SET_ERROR',
  UNSET_ERROR: 'UNSET_ERROR',
  FETCH_BIO: 'FETCH_BIO',
  CREATE_BIO: 'CREATE_BIO',
  FETCH_BIOS: 'FETCH_BIOS',
  UPDATE_BIO: 'UPDATE_BIO',
  DELETE_BIO: 'DELETE_BIO',
  FETCH_LOC: 'FETCH_LOC',
  FETCH_LOCS: 'FETCH_LOCS',
  CREATE_LOC: 'CREATE_LOC',
  UPDATE_LOC: 'UPDATE_LOC',
  DELETE_LOC: 'DELETE_LOC',
  FETCH_INTENT_DATA: 'FETCH_INTENT_DATA',
  FETCH_LOC_DATA: 'FETCH_LOC_DATA',
  FETCH_SURVEY_DATA: 'FETCH_SURVEY_DATA',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
};

// Error actions

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

// Tour Guide Bios actions

export function fetchBios() {
  return (dispatch => {
    axios.get(`${ROOT_URL}/bios`)
    .then(response => {
      dispatch({
        type: ActionTypes.FETCH_BIOS,
        bios: response.data,
      });
    }).catch(error => {
      reportError(error);
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
    axios.put(signedUrl, file, options).then(() => {
      console.log('Success uploading image');
    }).catch(error => {
      console.log(error);
    });
  }).catch(error => {
    console.log(error);
  });
}

export function createBio(bio, file) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/bios`, bio, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      if (file) {
        uploadImage(file, response.data._id);
      }
      dispatch({
        type: ActionTypes.CREATE_BIO,
        payload: response.data,
      });
      browserHistory.push('/admin/bios');
    }).catch(error => {
      // console.log(error);
    });
  };
}

export function updateBio(bio, file, id) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/bios/${id}`, bio, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      if (file) {
        uploadImage(file, response.data._id);
      }
      dispatch({
        type: ActionTypes.UPDATE_BIO,
        payload: bio,
      });
      browserHistory.push('/admin/bios');
    }).catch(error => {
      // catch the error
    });
  };
}

export function deleteBio(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/bios/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({
        type: ActionTypes.DELETE_BIO,
        payload: response.data,
      });
      browserHistory.push('/admin/bios');
    }).catch(error => {
      // error
    });
  };
}

// Location Actions

export function fetchLocs() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/locs`)
    .then(response => {
      dispatch({
        type: ActionTypes.FETCH_LOCS,
        payload: response.data,
      });
    }).catch(err => {
      dispatch(reportError(`Retreiving locations failed: ${err.response.data}`));
    });
  };
}

export function fetchLoc(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/locs/${id}`)
    .then(response => {
      dispatch({
        type: ActionTypes.FETCH_LOC,
        payload: response.data,
      });
    }).catch(err => {
      dispatch(reportError(`Retreiving locations faild: ${err.response.data}`));
    });
  };
}

export function createLoc(loc) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/locs`, loc, { headers: { authorization: localStorage.getItem('token') } })
    .then(response => {
      dispatch(fetchLocs());
    }).catch(error => {
      dispatch(reportError(`Creating location failed: ${error.response.data}`));
    });
  };
}

export function updateLoc(loc, id) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/locs/${id}`, loc, { headers: { authorization: localStorage.getItem('token') } })
    .then(response => {
      dispatch(fetchLocs());
    }).catch(error => {
      dispatch(reportError(`Updating location failed: ${error.response.data}`));
    });
  };
}

export function deleteLoc(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/locs/${id}`, { headers: { authorization: localStorage.getItem('token') } })
    .then(response => {
      dispatch(fetchLocs());
    }).catch(error => {
      dispatch(reportError(`Deleting loction failed: ${error.response.data}`));
    });
  };
}

// Analytics actions

export function fetchIntentData() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/intent/data`)
    .then(response => {
      dispatch({
        type: ActionTypes.FETCH_INTENT_DATA,
        payload: response.data,
      });
    }).catch(error => {
      dispatch(reportError(`Fetching intent data failed: ${error.response.data}`));
    });
  };
}

export function fetchLocData() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/locs/data`)
    .then(response => {
      dispatch({
        type: ActionTypes.FETCH_LOC_DATA,
        payload: response.data,
      });
    }).catch(error => {
      dispatch(reportError(`Fetching loc data failed: ${error.response.data}`));
    });
  };
}

export function fetchSurveyData() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/survey/data`)
    .then(response => {
      dispatch({
        type: ActionTypes.FETCH_SURVEY_DATA,
        payload: response.data,
      });
    }).catch(error => {
      dispatch(reportError(`Fetching survey data failed: ${error.response.data}`));
    });
  };
}

// Signing In and Signing Out actions

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
