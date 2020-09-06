/* eslint-disable no-param-reassign */
/**
 * =============================================================================
 * Lista de Recursos
 * =============================================================================
 *
 * 00. Auth
 *
 */

import axios from 'axios';

const BASE_URL = 'https://api.github.com';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
    });
  }

  setToken = (token) => {
    this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  removeToken = () => {
    delete this.api.defaults.headers.common.Authorization;
  };

  // ===========================================================================
  // 00. Auth
  // ===========================================================================

  login = (data) => this.api.post('/auth', data);

  logout = () => this.api.delete('/auth');

  checkAuth = () => this.api.get('/check-auth');
}

export default new Api();
