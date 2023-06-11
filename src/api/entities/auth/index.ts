import http from '@/services/http';
import {
  AuthSigninWithGoogleRequest,
  AuthSignupWithEmailRequest,
} from './interfaces/requests.interface';
import { AuthEndpoints } from './enums/endpoints.enum';

export default {
  signinWithGoogle: async (data: AuthSigninWithGoogleRequest) => {
    const response = await http.post(AuthEndpoints.signinWithGoogle, data);
    return response.data;
  },

  signUpWithEmail: async (data: AuthSignupWithEmailRequest) => {
    const response = await http.post(AuthEndpoints.signUpWithEmail, data);
    return response.data;
  },
};
