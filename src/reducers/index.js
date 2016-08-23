import { combineReducers } from 'redux';

import AdminReducer from './admin-reducer';
import AnalyticsReducer from './analytics-reducer';
import BioReducer from './bio-reducer';
import ErrorReducer from './error-reducer';
import LocReducer from './loc-reducer';


const rootReducer = combineReducers({
  admin: AdminReducer,
  analytics: AnalyticsReducer,
  bios: BioReducer,
  err: ErrorReducer,
  locs: LocReducer,
});

export default rootReducer;
