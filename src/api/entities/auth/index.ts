import http from '@/services/http';
import {
  GoogleSignInRedirectRequestBody,
  RegisterRequestBody,
} from './requestInterfaces.interface';
import { AuthEndpoints } from './endpoints.enum';

export default {
  registerAsync: async (data: RegisterRequestBody) => {
    const response = await http.post(AuthEndpoints.register, data);
    return response.data;
  },
  googleSignInRedirectAsync: async (data: GoogleSignInRedirectRequestBody) => {
    const response = await http.post(AuthEndpoints.googleSignInRedirect, data);
    return response.data;
  },
  getUserDataAsync: async () => {
    const response = await http.get(AuthEndpoints.getUserData);
    return response.data;
  },
};
