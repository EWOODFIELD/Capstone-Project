//[AppComp 1.03]

import React from 'react';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

//[APB 1.60] Define User Event Name CRUD Submission Form Structure 
export default function SubmissionForm() {

  //[APB 1.61] Define User Event Name CRUD Submission Form Structure 
  const [cards, setCards] = useState([]);
  const [id, setId] = useState("");
  const [competition, setCompetition] = useState("");
  const [players, setPlayers] = useState("");
  const [rounds, setRounds] = useState("");
  const [topCut, setTopCut] = useState("");
  const [organiser, setOrganiser] = useState("");
  const [organiserURL, setOrganiserURL] = useState("");
  const [update, setUpdate] = useState("");
  const params=useParams()
  
  //[APB 1.62] Database Axios Call by ID and Dynamic Card Rendering
  useEffect(()=> {
    const database = `http://localhost:8080/dbscompdex/searchdetails/${competition}`
      axios.get(database)
      .then(response=> {console.log(response); setCards(response.data)})
      .catch(error => {console.log(error)})
      },[competition, update])
    
      //[APB 1.63] Define Update Fields as Per Database Table
      const eventUpdate = (e) => {
        e.preventDefault()
        console.log(id)
        const updateEvent= {
          'ID':id,
          'Competition' :competition,
          'Players':players, 
          'Rounds':rounds, 
          'TopCut':topCut,
          'Organiser':organiser, 
          'OrganiserURL':organiserURL
      }

      //[APB 1.64] Put Request to Database to Update User Specified Data Record
      console.log(updateEvent)
      const database = `http://localhost:8080/dbscompdex/updatedetails/${competition}`
      axios.put(database,updateEvent)
      .then(response=> {console.log(response); setUpdate(response.data)})
      .catch(error => {console.log(error)})
      }


  //[APB 1.65] Form and Form Fields to Display on Webpage 
  return (
    <div>
      <form>
      <TextField 
      type='number' onChange={e=>setId(e.target.value)} 
      defaultValue={cards.id} label="Event ID">
      </TextField>
      
      <TextField 
      type='text' onChange={e=>setCompetition(e.target.value)} 
      defaultValue={cards.Competition} label="Competition Name">
      </TextField>

      <TextField 
      type='number' onChange={e=>setPlayers(e.target.value)} 
      defaultValue={cards.Players} label="Players">
      </TextField>

      <TextField 
      type='number' onChange={e=>setRounds(e.target.value)} 
      defaultValue={cards.Rounds} label="Rounds">
      </TextField>

      <TextField 
      type='text' onChange={e=>setTopCut(e.target.value)} 
      defaultValue={cards.TopCut} label="Top Cut">
      </TextField>

      <TextField 
      type='text' onChange={e=>setOrganiser(e.target.value)} 
      defaultValue={cards.Organiser} label="Organiser Name">
      </TextField>

      <TextField 
      type='text' onChange={e=>setOrganiserURL(e.target.value)} 
      defaultValue={cards.OrganiserURL} label="Organiser Image">
      </TextField>

      <button onClick={eventUpdate}>Update</button>
      </form>
    </div> 
   
  )
}
