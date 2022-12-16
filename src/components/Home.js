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
            <ul key={campus.id}>
                <li> <Link to={`/ACampus/${campus.id}`}> {campus.name}</Link> </li>
                <li> {campus.address} </li>
            </ul>

        </>
    ))

    const renderedStudents = students.map(student => (
        <ul key={student.id}>
            <Link to={`/AStudent/${student.id}`}> {student.firstName} {student.lastName}</Link>
        </ul>
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
