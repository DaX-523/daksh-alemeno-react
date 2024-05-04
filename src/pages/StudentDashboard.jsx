import React, { useEffect, useState } from "react";
import Course from "../components/Course";
import coursesData from "../utils/COURSES_DATA_MOCK";
import { useParams } from "react-router-dom";
import studentsData from "../utils/STUDENT_DATA_MOCK";

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [studentName, setStudentName] = useState("");
  const { studentId } = useParams();
  useEffect(() => {
    const currentStudentName = studentsData.find(
      (student) => student.id === +studentId
    );
    setStudentName(currentStudentName.name);
    const enrolledCourses = coursesData.filter((course) =>
      course.students.find((student) => student.id === +studentId)
    );
    setCourses(enrolledCourses);
  }, []);
  if (!courses.length)
    return (
      <div>
        <h1 className="heading">Student enrolled in no course.</h1>
      </div>
    );
  return (
    <div>
      <h1 className="heading">Hi {studentName}</h1>
      <h1 className="heading">Courses Enrolled In</h1>
      <div className="flex-row">
        {courses.length &&
          courses.map((course) => <Course key={course.id} course={course} />)}
      </div>
    </div>
  );
};

export default StudentDashboard;
