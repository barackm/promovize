import { configureStore } from '@reduxjs/toolkit';
import entities from './entities';

const store = configureStore({
  reducer: entities,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
