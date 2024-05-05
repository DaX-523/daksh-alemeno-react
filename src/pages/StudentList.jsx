import { useDispatch, useSelector } from "react-redux";
import StudentInfo from "../components/Student";
import "./StudentList.css";
import { Link } from "react-router-dom";
import { setStudent, setStudentCourses } from "../store/slices/studentSlice";

const StudentList = () => {
  const courses = useSelector((store) => store?.appSlice?.courses);

  const dispatch = useDispatch();

  const students = useSelector((store) => store?.appSlice?.students);
  const handleClick = (student) => {
    dispatch(setStudent(student));
    const enrolledCourses = courses.filter((course) =>
      course.students.find((s) => s.id === +student.id)
    );
    dispatch(setStudentCourses(enrolledCourses));
  };

  if (!students) return null;
  return (
    <div>
      <h1 className="heading">All registered Students</h1>
      <div className="flex-col">
        {students?.length &&
          students?.map((student) => (
            <Link
              to={"/student-dashboard/" + student.id}
              key={student.id}
              onClick={() => handleClick(student)}
            >
              <StudentInfo name={student.name} email={student.email} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default StudentList;
