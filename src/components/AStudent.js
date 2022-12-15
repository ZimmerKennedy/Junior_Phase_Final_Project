import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAStudentAsync, selectAStudent } from '../features/aStudentSlice';


export const AStudent = () => {
    const student = useSelector(selectAStudent)
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() =>{
      dispatch(fetchAStudentAsync(id))
    }, [id])
  
    
  return (
    <>
    First of all Hi from AStudent.js
    <h1>{student.firstName} {student.lastName}</h1>
    </>
  )
}

export default AStudent;
