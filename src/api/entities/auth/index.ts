import http from '@/services/http';
import { RegisterRequestBody } from './requestInterfaces.interface';
import { AuthEndpoints } from './endpoints.enum';

export default {
  registerAsync: async (data: RegisterRequestBody) => {
    const response = await http.post(AuthEndpoints.register, data);
    return response.data;
  },
};
