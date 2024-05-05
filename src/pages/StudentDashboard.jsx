import React, { useEffect } from "react";
import { EnhancedCourse } from "../components/Course";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import STUDENT_DATA_MOCK from "../utils/STUDENT_DATA_MOCK";
import { setStudent, setStudentCourses } from "../store/slices/studentSlice";
import coursesData from "../utils/COURSES_DATA_MOCK";

const StudentDashboard = () => {
  const courses = useSelector((store) => store?.studentSlice?.courses);

  const dispatch = useDispatch();

  const { studentId } = useParams();
  const student = STUDENT_DATA_MOCK.find((e) => {
    return e.id === +studentId;
  });
  useEffect(() => {
    dispatch(setStudent(student));
    const enrolledCourses = coursesData.filter((course) =>
      course.students.find((s) => s.id === +student.id)
    );
    dispatch(setStudentCourses(enrolledCourses));
  }, [dispatch, student]);

  if (!courses)
    return (
      <div>
        <h1 className="heading">Student enrolled in no course.</h1>
      </div>
    );
  return (
    <div>
      <h1 className="heading">Hi {student.name}</h1>
      <h1 className="heading">Courses Enrolled In</h1>
      <div className="flex-row">
        {courses.length &&
          courses.map((course) => {
            const duration = course.duration.split(" ")[0];
            const newDate = new Date();
            newDate.setDate(newDate.getDate() + +duration * 7);
            return (
              <EnhancedCourse
                key={course.id}
                course={course}
                dueDate={newDate.toDateString()}
              />
            );
          })}
      </div>
    </div>
  );
};

export default StudentDashboard;
