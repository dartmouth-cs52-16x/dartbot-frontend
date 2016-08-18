import { ActionTypes } from '../actions';

const AdminReducer = (state = {
  authenticated: false,
  data: [],
}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA:
      return ({ ...state, data: action.data });
    case ActionTypes.AUTH_USER:
      return ({ ...state, authenticated: true });
    case ActionTypes.DEAUTH_USER:
      return ({ ...state, authenticated: false });
    default:
      return state;
  }
};

export default AdminReducer;
