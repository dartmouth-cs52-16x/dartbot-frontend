import { combineReducers } from 'redux';

import AdminReducer from './admin-reducer';

const rootReducer = combineReducers({
  admin: AdminReducer,
});

export default rootReducer;
