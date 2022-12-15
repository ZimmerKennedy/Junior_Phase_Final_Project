import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampusAsync, selectCampuses } from '../features/campusSlice'
import { selectStudent } from '../features/studentSlice'
import { fetchStudentAsync } from '../features/studentSlice'
import { Link } from "react-router-dom";




export const Home = () => {
    const campuses = useSelector(selectCampuses)
    const students = useSelector(selectStudent)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchStudentAsync());
        dispatch(fetchCampusAsync());
    }, [dispatch]);



    const renderedCampuses = campuses.map(campus => (
        <>
            <li key={campus.id}> {campus.id}
                <ul> <Link to={`/ACampus/${campus.id}`}> {campus.name}</Link> </ul>
                <ul> {campus.address} </ul>
            </li>
            
        </>
    ))

    const renderedStudents = students.map(student => (
        <li key={student.id}> {student.id}
            <Link to={`/AStudent/${student.id}`}> {student.firstName} {student.lastName}</Link>
        </li>
    ))
    return (
        <>
            <h1> Campuses </h1>
            <div> {renderedCampuses} </div>

            <h1> Students </h1>
            <div> {renderedStudents} </div>
        </>
    )
}

export default Home;
