import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import StudentList from "./pages/StudentList";
import StudentDashboard from "./pages/StudentDashboard";

import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import coursesData from "./utils/COURSES_DATA_MOCK";
import studentData from "./utils/STUDENT_DATA_MOCK";
import { setAllCourses } from "./store/slices/courseSlice";
import { setCourses, setStudents } from "./store/slices/appSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCourses(coursesData));
    dispatch(setAllCourses(coursesData));
    dispatch(setStudents(studentData));
  });
  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList />} />
          <Route
            path="/student-dashboard/:studentId"
            element={<StudentDashboard />}
          />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
