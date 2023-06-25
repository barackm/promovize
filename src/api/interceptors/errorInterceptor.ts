import axiosFetcher from 'axios';

export default () => {
  axiosFetcher.interceptors.response.use(
    response => response,
    error => {
      return Promise.reject({
        message: getErrorMessage(error),
        status: getErrorStatus(error),
      });
    },
  );
};

const getErrorMessage = (error: any) => {
  if (error.response) {
    if (error.response.data) {
      return error.response.data.message;
    }
  }
  return error.message;
};

const getErrorStatus = (error: any) => {
  if (error.response) {
    return error.response.status;
  }
  return error.status;
};
