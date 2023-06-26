import { User } from '@/entities/interfaces/user.interface';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  currentUser: User | null;
}
const initialState: AuthState = {
  currentUser: null,
};

const slice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = slice.actions;
export default slice.reducer;
