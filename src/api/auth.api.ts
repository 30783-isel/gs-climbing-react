import api from '../utils/http-interceptor';
import { API_CONFIG } from '../utils/constants';
import type { LoginCredentials } from '../types/auth.types';

export const authAPI = {
  login: async (credentials: LoginCredentials) => {
    const token = window.btoa(`${credentials.username}:${credentials.password}`);
    const response = await api.get(API_CONFIG.baseLogUrl + 'basicauth', {
      headers: {
        Authorization: `Basic ${token}`
      }
    });
    return response.data;
  },

  getRole: async () => {
    const response = await api.get(API_CONFIG.baseLogUrl + 'role');
    return response.data;
  },

  forgotPassword: async (email: string) => {
    const response = await api.get(`${API_CONFIG.baseLogUrl}forgetpassword/${email}`);
    return response.data;
  }
};