//[AppComp 1.06]

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BasicModal from './Modal';
import { Button } from '@mui/material';
import PaginationRounded from './Pagination';
import TextField from '@mui/material/TextField';

//[APB 2.00] Define Theme for Page Content
const theme = createTheme({
  palette: {
    primary: {
      main: '#4A8E51'
    }
  },
});

//[APB 2.10] Define Leader Page Structure and Behaviour
export default function LeaderPag() {
  //[APB 2.11] Set States
  const [cards, setCards] = useState([]);
  const [leaderImg, setLeaderImg] = useState(1);
  // const [flip, setFlip] = useState(0);
 
  //Handle Searching for Leaders by Name in Real Time on the Browser Page
  const search = async (name) => {
    if(name && name.length >2){
    const database = 'http://localhost:8080/dbscompdex/search/leaderinfo'
    const res = await axios.post(database, {
      name
    });

    if(res && res.data && res.data.length >=0){
      setCards(res.data);
    }
    } else {
      if(name.length === 0){
        await fetchAll();
      }
    }
  }
  
  //Axios Call to get all Leader Information Records and Set Cards
  const fetchAll = async () => {
    const database = 'http://localhost:8080/dbscompdex/leaderinfo'
    const res = await axios.get(database);
    setCards(res.data)
    console.log(res)
  }


  //[APB 2.12] Get Request to Database for All Leader Info Records
  useEffect(()=> {
    (async () => {
      await fetchAll()
    })()},[])

      
  //[APB 2.13] Dynamic Card Structure and Card Content to be Created using Table Columns
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <h2> See The List of Event Topping Leaders Below </h2>
        <Container sx={{ py: 8 }} maxWidth="md">
      <TextField id = "leader-search-field" input type="text" variant ="outlined" label="Leader Name" onChange={e => search(e.currentTarget.value)} />
      <br></br> 
      <br></br>

          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card class="my-result"
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                >
                  <CardMedia class="my-image"
                    component="img"
                    sx={{}}
                    image={leaderImg ? card.ImageURLFront : card.ImageURLBack}
                    alt="random"
                    height="300"
                  />
                  {/* {leaderImg} */}
                  {leaderImg ? <Button 
                  size="small" 
                  onClick={()=>{setLeaderImg(0)}}
                  >
                    Flip</Button> : <Button size="small" onClick={()=>{setLeaderImg(1)}}>Flip</Button>}

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" className='capitalise'>
                      {card.Leader}
                    </Typography>
                    <Typography>
                      {card.CardSet}
                    </Typography>
                    <BasicModal card={card} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <PaginationRounded />
        <br></br>
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