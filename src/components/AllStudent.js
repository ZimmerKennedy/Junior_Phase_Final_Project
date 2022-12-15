import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react'
import { selectStudent } from "../features/studentSlice";
import { fetchStudentAsync, addStudentAsync } from "../features/studentSlice";
import { Link, useNavigate } from "react-router-dom";

const AllStudents = () => {

  const students = useSelector(selectStudent)
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchStudentAsync());
  }, [dispatch]);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`handleSubmitAddStudent`, firstName, lastName)
    dispatch(addStudentAsync({ firstName, lastName }));
    navigate("/");
  }



  const renderedStudents = students.map(student => (
    <article key={student.id}>
      <h1>
        <Link to={`/AStudent/${student.id}`}> {student.firstName} {student.lastName}</Link>
      </h1>
    </article>
  ))
  return (
    <>
      <form id='create-form-student' onSubmit={handleSubmit}>
        <label htmlFor='createFirstName'>First Name</label>
        <input
          name='createFirstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor='createLastName'>Last Name</label>
        <input
          name='createLastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <section>
        <h2> Students </h2>
        {renderedStudents}
      </section>
    </>
  )
}

export default AllStudents;
