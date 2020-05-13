import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import jwtService from './jwtService';
import { AuthActions } from './redux/auth-duck';

function AuthProvider({ children }) {
  const dispatch = useDispatch();

  const jwtCheck = () => {
    jwtService.on('onAutoLogin', () => {
      jwtService.signInWithToken()
        .then((user) => {
          dispatch(AuthActions.authLoadSuccess(user));
        })
        .catch((error) => {
          dispatch(AuthActions.authLoadFailure(error));
          dispatch(AuthActions.logout());
        });
    });

    jwtService.on('onAutoLogout', (message) => {
      if (message) {
        dispatch(AuthActions.loadAuthFailure(message));
      }
      dispatch(AuthActions.logout());
    });

    jwtService.setAuth();

    jwtService.init();
  };

  jwtCheck();

  return children;
}

export default AuthProvider;
