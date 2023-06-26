import auth from './entities/auth';
import accessTokenInterceptor from './interceptors/accessTokenInterceptor';
import baseUrlInterceptor from './interceptors/baseUrlInterceptor';
import errorInterceptor from './interceptors/errorInterceptor';
import languageInterceptor from './interceptors/languageInterceptor';

baseUrlInterceptor();
errorInterceptor();
languageInterceptor();
accessTokenInterceptor();

export default {
  auth,
};
