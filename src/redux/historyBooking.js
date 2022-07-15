import { createSlice } from "@reduxjs/toolkit";

const historySlide = createSlice({
  name: "history",
  initialState: {
    history: {},
    loading: false,
    error: false
  },
  reducers: {
    addHistoryStart: (state) => {
      state.loading = true;
    },
    addHistorySuccess: (state, action) => {
      state.loading = false;
      state.history = action.payload;
      state.error = false;
    },
    addHistoryFailed: (state) => {
      state.loading = false;
      state.error = true;
    },

  },

})
const { reducer: historyReducer } = historySlide;
export const { addHistoryStart, addHistorySuccess, addHistoryFailed } = historySlide.actions;
export default historyReducer;
