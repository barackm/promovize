import axiosFetcher from 'axios';
import { PROMOVIZE_API_URL } from '@env';

export default () => {
  axiosFetcher.defaults.baseURL = 'http://192.168.1.65:5001';
};
