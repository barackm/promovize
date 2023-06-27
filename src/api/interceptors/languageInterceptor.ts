import axios from 'axios';
import { currentLanguage } from '@/config/i18n';

const formattedLang = currentLanguage.split('-')[0];

export default () => {
  axios.interceptors.request.use(
    request => {
      request.headers['x-custom-lang'] = formattedLang;
      return request;
    },
    error => Promise.reject(error),
  );
};
