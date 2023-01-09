import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CustomContext } from './Context';
import { useContext, useEffect } from 'react';


export default function Logout() {
    let {setCurrentUser, currentUser} = useContext(CustomContext);
    let navigate=useNavigate();
    useEffect(()=> {
    setCurrentUser(null)
    navigate('/')})

    return (
    <div>Logout</div>
  )
}