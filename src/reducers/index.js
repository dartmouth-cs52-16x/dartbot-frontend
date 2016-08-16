import { combineReducers } from 'redux';

import AdminReducer from './admin-reducer';
import ErrorReducer from './error-reducer';
import BioReducer from './bio-reducer';

const rootReducer = combineReducers({
  admin: AdminReducer,
  err: ErrorReducer,
  profiles: BioReducer,
});

export default rootReducer;
