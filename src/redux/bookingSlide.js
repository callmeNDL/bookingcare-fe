import { createSlice } from "@reduxjs/toolkit";

const bookingSlide = createSlice({
  name: "booking",
  initialState: {
    doctor: "",
    CaKham: "",
    date: "",
    timeSelect: "",
    loading: false,
    error: ''
  },
  reducers: {
    addBooking: (state, action) => {
      state.data = action.payload.booking;
      state.date = action.payload.date;
      state.CaKham = action.payload.CaKham;
      state.timeSelect = action.payload.timeSelect;
      state.doctor = action.payload.doctor;
    }
  },

})
const { reducer: bookingReducer } = bookingSlide;
export const { addBooking, getCurrentBooking } = bookingSlide.actions;
export default bookingReducer;
