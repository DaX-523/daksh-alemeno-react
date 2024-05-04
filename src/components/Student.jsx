import React from "react";
import "./Student.css"; // Importing the CSS for styling

const StudentInfo = ({ name, email }) => {
  return (
    <div className="student-info">
      <span className="student-name">{name}</span>
      <span className="student-email">{email}</span>
      <span className="details-icon">{">"}</span>
    </div>
  );
};

export default StudentInfo;
