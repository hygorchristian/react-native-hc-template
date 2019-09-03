import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  loadAuthRequest: ['email', 'password'],
  loadAuthSuccess: ['data'],
  loadAuthFailure: ['error'],
  logout: null,
});

export const AuthTypes = Types;
export const AuthActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  isAuth: false,
  user: null,
  loading: false,
  error: null,
});

// Reducer Functions

const loadRequest = state => ({ ...state, loading: true, error: null });
const loadSuccess = (state, { data }) => ({
  ...state,
  isAuth: true,
  user: data,
  loading: false,
  error: null,
});
const loadFailure = (state, { error }) => ({ ...state, error, loading: false });
const logout = state => ({
  ...state,
  error: null,
  loading: false,
  user: null,
  isAuth: false,
});

// Reducer

export const AuthReducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_AUTH_REQUEST]: loadRequest,
  [Types.LOAD_AUTH_SUCCESS]: loadSuccess,
  [Types.LOAD_AUTH_FAILURE]: loadFailure,
  [Types.LOGOUT]: logout,
});
