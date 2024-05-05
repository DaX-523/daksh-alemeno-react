import { Course } from "../components/Course";
import "./Courses.css";
import { useSelector } from "react-redux";

const Courses = () => {
  const courses = useSelector((store) => store?.appSlice?.courses);

  if (!courses) return null;
  return (
    <div className="flex-row">
      {courses.length &&
        courses.map((course) => <Course key={course.id} course={course} />)}
    </div>
  );
};

export default Courses;
