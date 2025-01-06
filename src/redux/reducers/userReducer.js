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
    setUserReducer: (state, action) => {
      const { id, name, email, age, gender, image_data } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.age = age;
      state.gender = gender;
      state.profileImg = image_data;
    },
    logoutUserReducer: (state) => {
      state.id = null;
      state.name = '';
      state.email = '';
      state.age = null;
      state.gender = '';
      state.profileImg = '';
    },
  },
});

export const {
    setUserReducer,
    logoutUserReducer,
} = userSlice.actions;

export default userSlice.reducer;
