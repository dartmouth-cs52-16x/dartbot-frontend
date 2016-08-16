import { combineReducers } from 'redux';

import AdminReducer from './admin-reducer';
import ProfileReducer from './profile-reducer';

const rootReducer = combineReducers({
  admin: AdminReducer,
  profiles: ProfileReducer,
});

export default rootReducer;
