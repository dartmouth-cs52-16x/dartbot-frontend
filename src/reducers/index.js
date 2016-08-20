import { combineReducers } from 'redux';

import AdminReducer from './admin-reducer';
import ErrorReducer from './error-reducer';
import BioReducer from './bio-reducer';
import LocReducer from './loc-reducer';

const rootReducer = combineReducers({
  admin: AdminReducer,
  err: ErrorReducer,
  bios: BioReducer,
  locs: LocReducer,
});

export default rootReducer;
