import React from "react";
import "./Course.css";
import { Link } from "react-router-dom";
import { markCourseAsComplete, setCourse } from "../store/slices/courseSlice";
import { useDispatch, useSelector } from "react-redux";

const Course = ({ course }) => {
  const dispatch = useDispatch();

  const handleDetailClick = () => {
    dispatch(setCourse(course));
  };
  return (
    <div className="course-card">
      <h2 className="course-title">{course.name}</h2>
      <p className="course-description">{course.description}</p>
      <p className="course-instructor">Instructor: {course.instructor}</p>
      <p className="course-location">Location: {course.location}</p>
      <Link to={"/courses/" + course.id}>
        <button className="course-button" onClick={handleDetailClick}>
          Details{" "}
        </button>
      </Link>
    </div>
  );
};

const withAdditionalFeatures = (Component) => {
  return ({ course, dueDate }) => {
    const dispatch = useDispatch();

    const isComplete = useSelector(
      (state) =>
        state?.courseSlice?.courses?.find((c) => c.id === course.id)
          ?.isComplete || false
    );
    const handleCompleteClick = () => {
      dispatch(markCourseAsComplete(course.id));
    };
    return (
      <div className="relative">
        <label className="course-due-date">Due Date : {dueDate}</label>
        <Component course={course} />
        <button
          className="course-button-complete"
          onClick={handleCompleteClick}
          disabled={isComplete}
        >
          {isComplete ? "Marked As Completed" : "Mark As Complete"}
        </button>
      </div>
    );
  };
};

const EnhancedCourse = withAdditionalFeatures(Course);

export { Course, EnhancedCourse };
