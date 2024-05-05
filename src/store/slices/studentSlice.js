import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    student: null,
    courses: null,
  },
  reducers: {
    setStudent: (state, action) => {
      state.student = action.payload;
    },
    removeStudent: (state, action) => {
      state.student = null;
    },
    setStudentCourses: (state, action) => {
      state.courses = action.payload;
      state.courses.status = "incomplete";
    },
    removeStudentCourses: (state, action) => {
      state.courses = null;
    },
  },
});

export const {
  removeStudent,
  setStudent,
  setStudentCourses,
  removeStudentCourses,
} = studentSlice.actions;

export default studentSlice.reducer;
