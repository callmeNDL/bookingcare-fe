import { createSlice } from "@reduxjs/toolkit";


const doctorSlide = createSlice({
  name: "doctor",
  initialState: {
    doctor: {},
    loading: false,
    error: ''
  },
  reducers: {
    addDoctor: (state, action) => {
      state.doctor = action.payload;
    }
  },

})
const { reducer: doctorReducer } = doctorSlide;
export const { addDoctor, getCurrentDoctor } = doctorSlide.actions;
export default doctorReducer;
