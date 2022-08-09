import { createSlice } from "@reduxjs/toolkit";

const departmentSlide = createSlice({
  name: "department",
  initialState: {
    department: {},
    loading: false,
    error: ''
  },
  reducers: {
    addDepartment: (state, action) => {
      state.department = action.payload;
    }
  },

})
const { reducer: departmentReducer } = departmentSlide;
export const { addDepartment, getCurrentDepartment } = departmentSlide.actions;
export default departmentReducer;
