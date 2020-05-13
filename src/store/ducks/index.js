import { combineReducers } from 'redux';

import { AuthReducer as auth } from '~/components/AuthProvider/redux/auth-duck';

export default combineReducers({
  auth,
});
