import React from 'react';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import router from '../../../back-end/Mini-Project-3-main/Routes/myRoutes';
import axios from 'axios';


export default function SubmissionForm() {
  const [cards, setCards] = useState([]);
  const [competition, setCompetition] = useState("");
  const [players, setPlayers] = useState("");
  const [rounds, setRounds] = useState("");
  const [topCut, setTopCut] = useState("");
  const [organiser, setOrganiser] = useState("");
  const [organiserURL, setOrganiserURL] = useState("");
  const [update, setUpdate] = useState("");
  const params=useParams()
  let id=params.eventeditbyid

  useEffect(()=> {
    const database = `http://localhost:8080/dbscompdex/searchdetails/${id}`
      axios.get(database)
      .then(response=> {console.log(response); setCards(response.data)})
      .catch(error => {console.log(error)})
      },[id, update])
    
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

      // const updatePlant={'id':plantid,'PlantIMGURL':imgUrl, 'PlantCName':CName, 
      // 'PlantLName':LName, 'PlantVitamins': Vitamins, 'PlantMinerals': Minerals, 
      // 'PlantPharmaProps': PharmaProps, 'PlantDesc': desc}

      console.log(updateEvent)
      const database = `http://localhost:8080/dbscompdex/updatedetails/${id}`
      axios.put(database,updateEvent)
      .then(response=> {console.log(response); setUpdate(response.data)})
      .catch(error => {console.log(error)})
      }



  return (
    <div>
      <form>
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
    </div> //forms with states to save user inputted info. 
    //Const arrow function to call the CRUD operations (axios call via put,post, get etc.)
  )
}
