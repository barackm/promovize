import http from '@/services/http';
import { AuthSigninWithGoogleRequest } from './interfaces/requests.interface';
import { AuthEndpoints } from './enums/endpoints.enum';

export default {
  signinWithGoogle: async (data: AuthSigninWithGoogleRequest) => {
    const response = await http.post(AuthEndpoints.signinWithGoogle, data);
    return response.data;
  }
};
