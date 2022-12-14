import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchACampusAsync, selectACampus } from '../features/aCampusSlice';


export const ACampus = () => {
    const campus = useSelector(selectACampus)
    console.log(`campus from ACampus.js`, campus)
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
