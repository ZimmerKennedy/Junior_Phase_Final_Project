import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchACampusAsync, selectACampus } from '../features/aCampusSlice';


export const ACampus = () => {
    const [campusName, setCampusName] = useState("");
    const [campusAddress, setCampusAddress] = useState("");
    const [campusDescription, setCampusDescription] = useState("");
    const campus = useSelector(selectACampus)
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() =>{
        dispatch(fetchACampusAsync(id)).then((res) =>{
        const {name, imageUrl, address, description} = res.payload;
        setCampusName(name);
        setCampusAddress(address);
        setCampusDescription(description)
        })
    }, [id])
  return (
    <>
    First of all Hi from aCampus.js
    <h1>{campusName}</h1>
    <h2>{campusAddress}</h2>
    <p>{campusDescription}</p>
    </>
  )
}

export default ACampus;
