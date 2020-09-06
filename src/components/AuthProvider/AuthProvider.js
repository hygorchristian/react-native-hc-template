/* eslint-disable no-console */

import { useDispatch } from 'react-redux';
import jwtService from './jwtService';
import { AuthActions } from './redux/auth-duck';

function AuthProvider({ children }) {
  const dispatch = useDispatch();

  const jwtCheck = async () => {
    jwtService.on('onAutoLogin', () => {
      jwtService
        .signInWithToken()
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

    try {
      jwtService.setAuth();
    } catch (e) {
      console.warn(e);
      jwtService.logout();
    }

    jwtService.init();
  };

  jwtCheck();

  return children;
}

export default AuthProvider;
