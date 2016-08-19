import { ActionTypes } from '../actions';

const BioReducer = (state = { all: [], bio: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_BIOS:
      return { ...state, all: action.bios };
    case ActionTypes.FETCH_BIO:
      return { ...state, bio: action.payload };
    case ActionTypes.CREATE_BIO:
      // console.log(action.payload);
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
