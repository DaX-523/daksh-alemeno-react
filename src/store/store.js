import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import courseSlice from "./slices/courseSlice";
import studentSlice from "./slices/studentSlice";

const appStore = configureStore({
  reducer: {
    appSlice,
    courseSlice,
    studentSlice,
  },
});

export default appStore;
