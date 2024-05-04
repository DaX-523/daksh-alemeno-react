import React from "react";
import "./Course.css";

const Course = ({ course }) => {
  return (
    <div className="course-card">
      <h2 className="course-title">{course.name}</h2>
      <p className="course-description">{course.description}</p>
      <p className="course-instructor">Instructor: {course.instructor}</p>
      <p className="course-location">Location: {course.location}</p>
      <button className="course-button">Details</button>
    </div>
  );
};

export default Course;
