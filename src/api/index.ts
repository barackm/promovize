import auth from './entities/auth';
import { setBaseUrlInterceptor } from './interceptors/baseUrl';

setBaseUrlInterceptor();

export default {
  auth,
};
