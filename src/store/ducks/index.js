import { combineReducers } from 'redux';

import { AuthReducer as auth } from './auth';

export default combineReducers({
  auth,
});
