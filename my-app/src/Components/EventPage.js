import DirectionStack from './PageLinks'
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
//Dropdown Imports
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


// const cards = [response];

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A8E51'
    }
  },
});



export default function EventPage() {
  const [cards, setCards] = useState([]);
  const [currentOrg, setCurrentOrg] = React.useState('');

  const handleChangeDropdown = (event) => {
    setCurrentOrg(event.target.value);
  }



  useEffect(()=> {
    const database = 'http://localhost:8080/dbscompdex/'
      axios.get(database)
      .then(response=> {console.log(response); setCards(response.data);
      console.log(cards)})
      .catch(error => {console.log(error)})
      },[])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
      <DirectionStack />
      {cards.length > 0 ? <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Organiser</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentOrg}
          label="Organiser"
          onChange={handleChangeDropdown}
        >
          {/* {cards.map(card => {
            <MenuItem value={card.Organiser}>hi</MenuItem>
        })}  */}
        <MenuItem value="PPG">PPG </MenuItem>
        <MenuItem value="PRO">PPG </MenuItem>
        {/* {cards.map((card,index) => ( <MenuItem value={card.Organiser}>{card.Organiser}</MenuItem>))} */}
        </Select> 
      </FormControl>
    </Box> : null}
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card class="my-result"
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      // pt: '56.25%',
                    }}
                    image={card.OrganiserURL}
                    alt="random"
                    height="300"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" className='capitalise'>
                      {card.Organiser}
                    </Typography>
                    <Typography>
                      {card.Competition}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" href={"/plantinfo/"+(plant.id)}>View</Button>
                    {currentUser ? <Button size="small" href={"/plantinfoedit/"+(plant.id)}>Edit</Button> : null}
                    {currentUser ? <Button size="small" onClick={()=>{plantDelete(plant.id)}}>Delete</Button> : null}
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
     
      
      
      
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Choose a page to explore more!
        </Typography>


      </Box>

      {/* End footer */}
    </ThemeProvider>
  );
}