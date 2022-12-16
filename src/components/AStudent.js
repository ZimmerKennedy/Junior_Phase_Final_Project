import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudentAsync, fetchAStudentAsync, selectAStudent, editStudentAsync } from '../features/aStudentSlice';


export const AStudent = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");


  const student = useSelector(selectAStudent)
  const dispatch = useDispatch()
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAStudentAsync(id))
  }, [id])


  const handleDelete = () => {
    dispatch(deleteStudentAsync(id)).then(() => {
      navigate('/')
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const updatedStudent = { id, firstName, lastName, email };
    dispatch(editStudentAsync(updatedStudent)).then(() => {
      navigate("/AllStudents");
    })
  };

  return (
    <>
      First of all Hi from AStudent.js
      <h1>{student.firstName} {student.lastName}</h1>

      <form id="studentEdit" onSubmit={handleSubmit}>
        <label htmlFor="studentFirstName">First Name</label>
        <input
          name="studentFirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="studentLastName">Last Name</label>
        <input
          name="studentLastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="studentEmail">Email</label>
        <input
          name="studentEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Edit</button>

      <button onClick={handleDelete}>Delete</button>
      </form>
    </>
  )
}

export default AStudent;
