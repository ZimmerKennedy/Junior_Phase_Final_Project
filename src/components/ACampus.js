import React from 'react'
import { useEffect } from 'react';
import { useParams  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchACampusAsync, selectACampus } from '../features/aCampusSlice';


export const ACampus = () => {
    const campus = useSelector(selectACampus)
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() =>{
        dispatch(fetchACampusAsync(id))
    }, [id])
  return (
    <>
    First of all Hi from aCampus.js
    <h1>{campus.name}</h1>
    <h2>{campus.address}</h2>
    <p>{campus.description}</p>
    </>
  )
}

export default ACampus;
