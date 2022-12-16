import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudentAsync, fetchAStudentAsync, selectAStudent } from '../features/aStudentSlice';


export const AStudent = () => {
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

  return (
    <>
      First of all Hi from AStudent.js
      <h1>{student.firstName} {student.lastName}</h1>
      <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default AStudent;
