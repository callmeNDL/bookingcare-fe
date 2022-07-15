import { createSlice } from "@reduxjs/toolkit";

const bookingSlide = createSlice({
  name: "booking",
  initialState: {
    doctor: "",
    time: "",
    date: "",
    loading: false,
    error: ''
  },
  reducers: {
    addBooking: (state, action) => {
      state.data = action.payload.booking;
      state.date = action.payload.date;
      state.time = action.payload.time;
      state.doctor = action.payload.doctor;
    }
  },

})
const { reducer: bookingReducer } = bookingSlide;
export const { addBooking, getCurrentBooking } = bookingSlide.actions;
export default bookingReducer;
