import { createSlice } from '@reduxjs/toolkit';

// Initial state for user data
const initialState = {
  id: null,
  name: '',
  email: '',
  age: null,
  gender: '',
  profileImg: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logoutUser: (state) => {
      state.id = null;
      state.name = '';
      state.email = '';
    },
  },
});

export const {
    setUser,
    logoutUser,
} = userSlice.actions;

export default userSlice.reducer;
