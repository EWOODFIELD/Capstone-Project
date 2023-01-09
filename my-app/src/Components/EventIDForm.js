//[AppComp 1.02]

import React from 'react';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

//[APB 1.50] Define User Event ID CRUD Submission Form Structure 
export default function SubmissionForm() {

  //[APB 1.51] Use States for Fields to be Updated by User
  const [cards, setCards] = useState([]);
  const [id, setId] = useState(1);
  const [competition, setCompetition] = useState("");
  const [players, setPlayers] = useState("");
  const [rounds, setRounds] = useState("");
  const [topCut, setTopCut] = useState("");
  const [organiser, setOrganiser] = useState("");
  const [organiserURL, setOrganiserURL] = useState("");
  const [update, setUpdate] = useState("");
  const params=useParams()
  const ID=params.ID;

  //[APB 1.52] Database Axios Call by ID and Dynamic Card Rendering
  useEffect(()=> {
    const database = `http://localhost:8080/dbscompdex/searchdetails/${id}`
      axios.get(database)
      .then(response=> {console.log(response); setCards(response.data)})
      .catch(error => {console.log(error)})
      },[id, update])
    
       //[APB 1.53] Define Update Fields as Per Database Table
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

      
      //[APB 1.54] Put Request to Database to Update User Specified Data Record
      console.log(updateEvent)
      const database = `http://localhost:8080/dbscompdex/updatedetails/${id}`
      axios.put(database,updateEvent)
      .then(response=> {console.log(response); setUpdate(response.data); alert('Corrections Submitted')})
      .catch(error => {console.log(error)})
      }

  //[APB 1.55] Form and Form Fields to Display on Webpage 
  return (
    <div id="sub-form">
      <form>
      <TextField 
      type='number' onChange={e=>setId(e.target.value)} 
      defaultValue={cards.id} label="Event ID" id="my-field">
      </TextField>
      <br></br>
      <TextField 
      type='text' onChange={e=>setCompetition(e.target.value)} 
      defaultValue={cards.Competition} label="Competition Name" id="my-field">
      </TextField>
      <br></br>
      <TextField 
      type='number' onChange={e=>setPlayers(e.target.value)} 
      defaultValue={cards.Players} label="Players" id="my-field">
      </TextField>
      <br></br>
      <TextField 
      type='number' onChange={e=>setRounds(e.target.value)} 
      defaultValue={cards.Rounds} label="Rounds" id="my-field">
      </TextField>
      <br></br>
      <TextField 
      type='text' onChange={e=>setTopCut(e.target.value)} 
      defaultValue={cards.TopCut} label="Top Cut" id="my-field">
      </TextField>
      <br></br>
      <TextField 
      type='text' onChange={e=>setOrganiser(e.target.value)} 
      defaultValue={cards.Organiser} label="Organiser Name" id="my-field">
      </TextField>
      <br></br>
      <TextField 
      type='text' onChange={e=>setOrganiserURL(e.target.value)} 
      defaultValue={cards.OrganiserURL} label="Organiser Image" id="my-field">
      </TextField>
      <br></br>
      <br></br>
      <button onClick={eventUpdate}>Update</button>
      </form>
    </div> 
    
  )
}
