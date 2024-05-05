import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    courses: null,
    students: null,
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setStudents: (state, action) => {
      state.students = action.payload;
    },
  },
});

export const { setCourses, setStudents } = appSlice.actions;

export default appSlice.reducer;
