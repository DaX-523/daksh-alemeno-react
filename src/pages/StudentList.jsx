import React, { useState, useEffect } from "react";
import studentData from "../utils/STUDENT_DATA_MOCK";
import StudentInfo from "../components/Student";
import "./StudentList.css";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    setStudents(studentData);
  }, []);
  return (
    <div>
      <h1 className="heading">All registered Students</h1>
      <div className="flex-col">
        {students.length &&
          students.map((student) => (
            <Link to={"/student-dashboard/" + student.id} key={student.id}>
              <StudentInfo name={student.name} email={student.email} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default StudentList;
