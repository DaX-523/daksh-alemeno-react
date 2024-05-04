import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import StudentList from "./pages/StudentList";
import StudentDashboard from "./pages/StudentDashboard";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
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
