import { ActionTypes } from '../actions';

const AdminReducer = (state = {
  authenticated: false,
  data: [],
}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA:
      return ({
        authenticated: this.state.admin.authenticated,
        data: action.data,
      });
    case ActionTypes.AUTH_USER:
      return ({
        authenticated: true,
        data: this.state.data,
      });
    case ActionTypes.DEAUTH_USER:
      return ({
        authenticated: false,
        data: this.state.admin.data,
      });
    default:
      return state;
  }
};

export default AdminReducer;
