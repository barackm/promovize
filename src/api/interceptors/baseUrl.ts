import { API_BASE_URL } from '@/constants';
import axios from 'axios';

export const setBaseUrlInterceptor = () => {
  axios.defaults.baseURL = API_BASE_URL;
};
