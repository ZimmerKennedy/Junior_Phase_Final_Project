import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react'
import { selectStudent } from "../features/studentSlice";
import { fetchStudentAsync } from "../features/studentSlice";
import { Link, useNavigate } from "react-router-dom";
import AStudent from "./AStudent";

const AllStudents = () => {
  const students = useSelector(selectStudent)
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchStudentAsync());
  }, [dispatch]);



  const renderedStudents = students.map(student => (
    <article key={student.id}>
      <h1>
        <Link to={`/AStudent/${student.id}`}> {student.firstName} {student.lastName}</Link>
      </h1>
    </article>
  ))
  return (
    <section>
      <h2> Students </h2>
      {renderedStudents}
    </section>
  )
}

export default AllStudents;
