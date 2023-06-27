import http from '@/services/http';
import {
  GoogleSignInRedirectRequestBody,
  RegisterRequestBody,
} from './requestInterfaces.interface';
import { AuthEndpoints } from './endpoints.enum';
import { AuthResponse, UserDataResponse } from './responseInterfaces.interface';

export default {
  registerAsync: async (data: RegisterRequestBody) => {
    const response = await http.post(AuthEndpoints.register, data);
    return response.data;
  },
  googleSignInRedirectAsync: async (
    data: GoogleSignInRedirectRequestBody,
  ): Promise<AuthResponse> => {
    const response = await http.post(AuthEndpoints.googleSignInRedirect, data);
    return response.data;
  },

  getUserDataAsync: async (): Promise<UserDataResponse> => {
    const response = await http.get(AuthEndpoints.getUserData);
    return response.data;
  },

  verifyEmailAsync: async (token: string): Promise<AuthResponse> => {
    const response = await http.get(AuthEndpoints.verifyEmail, {
      params: { token },
    });
    return response.data;
  },
};
