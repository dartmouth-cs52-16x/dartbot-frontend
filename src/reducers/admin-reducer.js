import { ActionTypes } from '../actions';

const AdminReducer = (state = {
  authenticated: false,
  data: [],
}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA:
      return ({
        authenticated: state.admin.authenticated,
        data: action.data,
      });
    case ActionTypes.AUTH_USER:
      return ({
        authenticated: true,
        data: state.data,
      });
    case ActionTypes.DEAUTH_USER:
      return ({
        authenticated: false,
        data: state.admin.data,
      });
    default:
      return state;
  }
};

export default AdminReducer;
