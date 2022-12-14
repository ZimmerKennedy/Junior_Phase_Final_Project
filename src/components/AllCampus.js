import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react'
import { selectCampuses } from "../features/campusSlice";
import { fetchCampusAsync } from "../features/campusSlice";
import { Link, useNavigate } from "react-router-dom";
import ACampus from "./ACampus"


const AllCampus = () => {
  const campuses = useSelector(selectCampuses)
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCampusAsync());
  }, [dispatch]);



  const renderedCampuses = campuses.map(campus => (
    <article key={campus.id}>
      <h1>
        <Link to={`/ACampus/${campus.id}`}> {campus.name}</Link>
      </h1>
      <p>{campus.address}</p>
    </article>
  ))
  return (
    <section>
      <h2> Campuses </h2>
      {renderedCampuses}
    </section>
  )
}

export default AllCampus
