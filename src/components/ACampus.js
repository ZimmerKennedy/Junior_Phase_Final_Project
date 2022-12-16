import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchACampusAsync, selectACampus } from '../features/aCampusSlice';
import { deleteCampusAsync, editCampusAsync } from '../features/aCampusSlice'

export const ACampus = () => {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");


  const campus = useSelector(selectACampus)
  const dispatch = useDispatch()
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchACampusAsync(id))
  }, [id])

  const handleDelete = () => {
    dispatch(deleteCampusAsync(id)).then(() => {
      navigate('/')
    })
  }



  const handleSubmit = (evt) => {
    evt.preventDefault();
    const updatedCampus = { id, name, address, description };

    dispatch(editCampusAsync(updatedCampus)).then(() => {
      navigate("/AllCampus");
    })
  };

  return (
    <>
      First of all Hi from aCampus.js
      <h1>{campus.name}</h1>
      <h2>{campus.address}</h2>
      <p>{campus.description}</p>

      <form id="campusEdit" onSubmit={handleSubmit}>
        <label htmlFor="aCampusName">Campus Name</label>
        <input
          name="campusName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="address">Campus Address</label>
        <input
          name="capus.address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="description">Campus Description</label>
        <input
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Edit</button>
        <button onClick={handleDelete}>Delete </button>
      </form>
    </>
  )
}

export default ACampus;
