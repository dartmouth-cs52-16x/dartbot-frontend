import { combineReducers } from 'redux';

import AdminReducer from './admin-reducer';
import ErrorReducer from './error-reducer';
import BioReducer from './bio-reducer';

const rootReducer = combineReducers({
  admin: AdminReducer,
  err: ErrorReducer,
  bios: BioReducer,
});

export default rootReducer;
