import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useDispatch } from "react-redux";
import coursesData from "../utils/COURSES_DATA_MOCK";
import studentData from "../utils/STUDENT_DATA_MOCK";
import { setAllCourses } from "../store/slices/courseSlice";
import { setCourses, setStudents } from "../store/slices/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCourses(coursesData));
    dispatch(setAllCourses(coursesData));
    dispatch(setStudents(studentData));
  });
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <h1 className="header-title">Alemeno Courses</h1>
        </Link>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/students" className="nav-link">
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link">
                Courses
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
