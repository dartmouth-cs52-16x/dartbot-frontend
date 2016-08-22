import { ActionTypes } from '../actions';

const LocReducer = (state = { all: [], loc: '' }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_LOCS:
      return ({ ...state, all: action.payload });
    case ActionTypes.FETCH_LOC:
      return ({ ...state, loc: action.payload });
    case ActionTypes.CREATE_LOC:
      return ({ ...state, all: state.add.concat(action.payload) });
    default:
      return state;
  }
};

export default LocReducer;
