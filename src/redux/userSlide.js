import { createSlice } from "@reduxjs/toolkit";

const userSlide = createSlice({
  name: "user",
  initialState: {
    user: {},
    loading: false,
    error: false
  },
  reducers: {
    fetchUserStart: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = false;
    },
    fetchUserFailed: (state) => {
      state.loading = false;
      state.error = true;
    },

  },

})
const { reducer: userReducer } = userSlide;
export const { fetchUserStart, fetchUserSuccess, fetchUserFailed } = userSlide.actions;
export default userReducer;
