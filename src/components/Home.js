import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampusAsync, selectCampuses } from '../features/campusSlice'
import { selectStudent, fetchStudentAsync } from '../features/studentSlice'
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
            <div key={campus.id} >
                <h2> <Link to={`/ACampus/${campus.id}`}> {campus.name}</Link> </h2>
                <h3> {campus.address} </h3>
            </div>


        </>
    ))

    const renderedStudents = students.map(student => (
        <div key={student.id}>
            <h2>
                <Link to={`/AStudent/${student.id}`}> {student.firstName} {student.lastName}</Link>
            </h2>
        </div>
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
