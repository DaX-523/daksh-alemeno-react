import React from "react";
import "./CourseDetails.css";
import coursesData from "../utils/COURSES_DATA_MOCK";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = coursesData.find((course) => course.id === +courseId);
  return (
    <div className="course-details">
      <h1 className="course-title">{course.name}</h1>
      <h2 className="course-instructor">Instructor: {course.instructor}</h2>
      <p className="course-description">{course.description}</p>
      <p className="course-status">Status: {course.enrollmentStatus}</p>
      <p className="course-duration">Duration: {course.duration}</p>
      <p className="course-location">Location: {course.location}</p>
      <h3>Prerequisites</h3>
      <ul>
        {course.prerequisites.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Syllabus</h3>
      <div>
        {course.syllabus.map((item, index) => (
          <div key={index} className="syllabus-item">
            <h4>
              Week {item.week}: {item.topic}
            </h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
