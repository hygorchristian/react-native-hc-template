import jwtDecode from 'jwt-decode';
import EventEmitter from './EventEmitter';
import { store } from '~/store';
import Api from '~/services/Api';
import { AuthActions } from './redux/auth-duck';

class JwtService extends EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    // Api.api.interceptors.response.use((response) => response, (err) => new Promise((resolve, reject) => {
    //   if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
    //     // se receber uma mensagem de Não Autorizado deve deslogar o usuário
    //
    //     this.emit('onAutoLogout', 'Token de acesso inválido');
    //     this.setSession(null);
    //   }
    //   throw err;
    //   }));
  };

  handleAuthentication = () => {
    const accessToken = this.getAccessToken();

    if (!accessToken) {
      return;
    }

    if (this.isAuthTokenValid(accessToken)) {
      this.setSession(accessToken);
      this.emit('onAutoLogin', true);
    } else {
      this.setSession(null);
      this.emit('onAutoLogout', 'Token de acesso expirado');
    }
  };

  // createUser = (data) => new Promise((resolve, reject) => {
  //   Api.register(data)
  //     .then((response) => {
  //       if (response.data.user) {
  //         this.setSession(response.data.access_token);
  //         resolve(response.data.user);
  //       } else {
  //         reject(response.data.error);
  //       }
  //     });
  // });

  login = (email, password) =>
    new Promise((resolve, reject) => {
      Api.login({ email, password })
        .then((response) => {
          if (response.data) {
            this.setSession(response.data.token);
            resolve(response.data);
          } else {
            reject(response.data.error);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });

  signInWithToken = () =>
    new Promise((resolve, reject) => {
      Api.checkAuth().then((response) => {
        if (response.data.user) {
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      });
    });

  setSession = (accessToken) => {
    if (accessToken) {
      store.dispatch(AuthActions.setJwtToken(accessToken));
      Api.setToken(accessToken);
    } else {
      store.dispatch(AuthActions.setJwtToken(null));
      Api.removeToken();
    }
  };

  logout = () => {
    this.setSession(null);
  };

  isAuthTokenValid = (accessToken) =>
    new Promise((resolve, reject) => {
      if (!accessToken) {
        reject(new Error('There is no access token'));
      }
      const decoded = jwtDecode(accessToken);
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        reject(new Error('The access token is expired'));
      }
      resolve();
    });

  setAuth = async () => {
    const token = this.getAccessToken();
    await this.isAuthTokenValid(token);
    Api.setToken(token);
  };

  getAccessToken = () => {
    const state = store.getState();
    const { token } = state.auth;
    return token;
  };
}

const instance = new JwtService();

export default instance;
