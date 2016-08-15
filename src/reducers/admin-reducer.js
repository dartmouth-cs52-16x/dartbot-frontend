import { ActionTypes } from '../actions';

const AdminReducer = (state = {
  authenticated: false,
  data: [],
}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA:
      return ({
        authenticated: state.authenticated,
        data: action.data,
      });
    default:
      return state;
  }
};

export default AdminReducer;
