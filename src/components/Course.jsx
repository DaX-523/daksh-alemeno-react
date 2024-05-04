import React from "react";
import "./Course.css";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <div className="course-card">
      <h2 className="course-title">{course.name}</h2>
      <p className="course-description">{course.description}</p>
      <p className="course-instructor">Instructor: {course.instructor}</p>
      <p className="course-location">Location: {course.location}</p>
      <Link to={"/courses/" + course.id}>
        <button className="course-button">Details </button>
      </Link>
    </div>
  );
};

export default Course;
