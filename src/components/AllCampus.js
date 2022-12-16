import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react'
import { addCampusAsync, selectCampuses } from "../features/campusSlice";
import { fetchCampusAsync } from "../features/campusSlice";
import { Link, useParams, useNavigate } from "react-router-dom";

const AllCampus = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("")
  const campuses = useSelector(selectCampuses)

  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCampusAsync());
  }, [dispatch]);


  const handleSubmit = (evt) => {
    if(evt.target.value === undefined){
      alert('Fill in Required')
    } else {
      evt.preventDefault();
      dispatch(addCampusAsync({ name, address, description }));
      navigate("/");
     }
  }


  const renderedCampuses = campuses.map(campus => (
    <article key={campus.id}>
      <h1>
        <Link to={`/ACampus/${campus.id}`}> {campus.name}</Link>
      </h1>
      <p>{campus.address}</p>
    </article>
  ))
  return (

    <>

      <form id='create-form' onSubmit={handleSubmit}>
        <label htmlFor='createName'>Campus Name</label>
        <input
          name='createCampusName'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='createAddress'>Campus Address</label>
        <input
          name='createCampusAddress'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor='createDescription'>Campus Description</label>
        <input
          name='createCampusDescription'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <section>
        <h2> Campuses </h2>
        {renderedCampuses}
      </section>


    </>

  )
}

export default AllCampus;
