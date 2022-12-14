import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAStudentAsync, selectAStudent } from '../features/aStudentSlice';


export const AStudent = () => {
    const [studentFirstName, setstudentFirstName] = useState("");
    const [studentLastName, setstudentLastName] = useState("");
    const student = useSelector(selectAStudent)
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() =>{
        dispatch(fetchAStudentAsync(id)).then((res) =>{
        const {firstName, lastName, imageUrl, email} = res.payload;
        setstudentFirstName(firstName);
        setstudentLastName(lastName);
        })
    }, [id])
  return (
    <>
    First of all Hi from AStudent.js
    <h1>{studentFirstName} {studentLastName}</h1>
    </>
  )
}

export default AStudent;
