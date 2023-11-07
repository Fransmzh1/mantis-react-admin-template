// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  access: {}
};

// ==============================|| SLICE - MENU ||============================== //

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate(state, action) {
      console.log(action.payload);
      state.access = action.payload;
      console.log('done');
    }
  }
});

export default auth.reducer;

export const { authenticate, logout } = auth.actions;
