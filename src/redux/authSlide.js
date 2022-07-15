import { createSlice } from "@reduxjs/toolkit";

const authSlide = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      loading: false,
      error: false,
    },
    register: {
      loading: false,
      error: false,
      success: false,
      errMessage: ""
    },
    logout: {
      loading: false,
      error: false,
      success: false,
    }
  },
  reducers: {
    //login
    loginStart: (state) => {
      state.login.loading = true;
    },
    loginSuccess: (state, action) => {
      state.login.loading = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.loading = false;
      state.login.error = true;
    },
    //register
    registerStart: (state) => {
      state.register.loading = true;
    },
    registerSuccess: (state) => {
      state.register.loading = false;
      state.register.error = false;
      state.register.success = true;
      state.register.errMessage = "";

    },
    registerFailed: (state, action) => {
      state.register.loading = false;
      state.register.error = true;
      state.register.success = false;
      state.register.errMessage = action.payload;
    },
    //logout
    logoutStart: (state) => {
      state.logout.loading = true;
    },
    logoutSuccess: (state) => {
      state.logout.loading = false;
      state.login.currentUser = null;
      state.logout.error = false;
    },
    logoutFailed: (state, action) => {
      state.register.loading = false;
      state.register.error = true;
      state.register.success = false;
    },
    //update 
    updateStart: (state) => {
      state.login.loading = true;
    },
    updateSuccess: (state, action) => {
      state.login.loading = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    updateFailed: (state) => {
      state.login.loading = false;
      state.login.error = true;
    },
  },

})
const { reducer: authReducer } = authSlide;
export const {
  updateStart,
  updateSuccess,
  updateFailed,
  loginStart,
  loginSuccess,
  loginFailed,
  logoutStart,
  logoutSuccess,
  logoutFailed,
  registerStart,
  registerSuccess,
  registerFailed
} = authSlide.actions;
export default authReducer;
