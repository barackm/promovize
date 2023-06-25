import auth from './entities/auth';
import baseUrlInterceptor from './interceptors/baseUrlInterceptor';
import errorInterceptor from './interceptors/errorInterceptor';
import languageInterceptor from './interceptors/languageInterceptor';

baseUrlInterceptor();
errorInterceptor();
languageInterceptor();

export default {
  auth,
};
