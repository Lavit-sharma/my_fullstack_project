

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  username: string | null;
  tokenExpiry: number | null;
}

const initialState: AuthState = {
  token: null,
  username: null,
  tokenExpiry: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ token: string; username: string; tokenExpiry: number }>) {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.tokenExpiry = action.payload.tokenExpiry;
    },
    logout(state) {
      state.token = null;
      state.username = null;
      state.tokenExpiry = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
