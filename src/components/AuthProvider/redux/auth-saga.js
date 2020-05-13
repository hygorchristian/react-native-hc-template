import { call, put } from 'redux-saga/effects';
import Api from '~/services/Api';
import jwtService from '../jwtService';

import { AuthActions } from './auth-duck';

export function* loadAuth({ email, password }) {
  try {
    const response = yield call(jwtService.login, email, password);
    yield put(AuthActions.loadAuthSuccess(response));
  } catch (e) {
    yield put(AuthActions.loadAuthFailure('Invalid user, try again'));
  }
}

export function* logout({ username }) {
  yield call(jwtService.logout);
}

export function* updateUser() {
  const response = yield call(Api.fetchUser);
  yield put(AuthActions.setUser(response.data));
}
