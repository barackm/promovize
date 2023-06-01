import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export default store;
