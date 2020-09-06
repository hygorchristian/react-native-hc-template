import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '~/components/AuthProvider/redux/auth-duck';
import { loadAuth } from '~/components/AuthProvider/redux/auth-saga';

export default function* () {
  return yield all([
    takeLatest(AuthTypes.LOAD_AUTH_REQUEST, loadAuth),
    // takeLatest(AuthTypes.LOAD_AUTH_REQUEST, loadAuth),
  ]);
}
