import { ActionTypes } from '../actions';

const BioReducer = (state = { all: [], bio: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_BIOS:
      return { ...state, all: action.payload };
    case ActionTypes.FETCH_BIO:
      return { ...state, bio: action.payload };
    case ActionTypes.CREATE_BIO:
      return { ...state, all: state.all.concat(action.payload) };
    case ActionTypes.UPDATE_BIO:
      return state;
    case ActionTypes.DELETE_BIO:
      return state;
    default:
      return state;
  }
};

export default BioReducer;
