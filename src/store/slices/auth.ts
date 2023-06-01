import { User } from '@/entities/interfaces/auth.interface';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  currentUser: null | User;
}

const initialState: AuthState = {
  currentUser: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUserData: (state: any, action) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
  },
});

export default slice.reducer;
export const { setCurrentUserData } = slice.actions;
