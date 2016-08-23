import { combineReducers } from 'redux';

import AdminReducer from './admin-reducer';
import AnalyticsReducer from './analytics-reducer';
import BioReducer from './bio-reducer';
import ErrorReducer from './error-reducer';
import IntentReducer from './intent-reducer';
import LocReducer from './loc-reducer';


const rootReducer = combineReducers({
  admin: AdminReducer,
  analytics: AnalyticsReducer,
  bios: BioReducer,
  err: ErrorReducer,
  intents: IntentReducer,
  locs: LocReducer,
});

export default rootReducer;
