import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    course: null,
    courses: null,
  },
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setAllCourses: (state, action) => {
      state.courses = action.payload;
    },
    removeCourse: (state, action) => {
      state.course = null;
    },
    markCourseAsComplete(state, action) {
      const id = action.payload;
      const index = state.courses.findIndex((course) => course.id === id);
      if (index !== -1) {
        state.courses[index].isComplete = true;
      }
    },
  },
});

export const { removeCourse, setAllCourses, setCourse, markCourseAsComplete } =
  courseSlice.actions;

export default courseSlice.reducer;
