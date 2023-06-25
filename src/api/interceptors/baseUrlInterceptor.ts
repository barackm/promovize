import axiosFetcher from 'axios';
const baseUrl = 'http://localhost:5001';

export default () => {
  axiosFetcher.defaults.baseURL = baseUrl;
};
