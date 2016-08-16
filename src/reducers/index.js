import { combineReducers } from 'redux';

import AdminReducer from './admin-reducer';
import ErrorReducer from './error-reducer';

const rootReducer = combineReducers({
  admin: AdminReducer,
  err: ErrorReducer,
});

export default rootReducer;
