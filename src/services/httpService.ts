import axiosFetcher from 'axios';

export default {
  get: axiosFetcher.get,
  post: axiosFetcher.post,
  put: axiosFetcher.put,
  delete: axiosFetcher.delete,
  request: axiosFetcher.request,
  headers: axiosFetcher.defaults.headers,
  patch: axiosFetcher.patch,
};
