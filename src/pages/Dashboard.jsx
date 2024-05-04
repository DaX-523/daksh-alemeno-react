import React, { useState, useEffect } from "react";
import studentData from "../utils/MOCK_DATA (1).json";
import StudentInfo from "../components/Student";
import "./Dashboard.css";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    setStudents(studentData);
  }, []);
  return (
    <div>
      <h1 className="heading">All registered Students</h1>
      <div className="flex">
        {students.length &&
          students.map((student) => (
            <StudentInfo
              key={student.id}
              name={student.name}
              email={student.email}
            />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
