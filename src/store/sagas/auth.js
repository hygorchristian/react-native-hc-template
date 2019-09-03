import { call, put } from 'redux-saga/effects';
// import { login } from '../../services/api';

import { AuthActions } from '../ducks/auth';

export function* loadAuth({ email, password }) {
  try {
    // const response = yield call(login, { email, password });
    // yield put(AuthActions.loadAuthSuccess(response.data));
  } catch (e) {
    yield put();
    // AuthActions.loadAuthFailure('Email ou senha incorretos, tente novamente.')
  }
}
