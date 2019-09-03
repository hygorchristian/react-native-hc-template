import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { loadAuth } from './auth';

export default function*() {
  return yield all([takeLatest(AuthTypes.LOAD_AUTH_REQUEST, loadAuth)]);
}
