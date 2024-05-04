import React, { useEffect, useState } from "react";
import Course from "../components/Course";
import coursesData from "../utils/MOCK_DATA.json";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(coursesData);
  }, []);
  return (
    <div className="flex">
      {courses.length &&
        courses.map((course) => <Course key={course.id} course={course} />)}
    </div>
  );
};

export default Courses;
