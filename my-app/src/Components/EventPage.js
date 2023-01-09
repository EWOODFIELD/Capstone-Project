//[AppComp 1.04]

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
import {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import EventModal from './EventModal';
import PaginationRounded from './Pagination';

//[APB 1.70] Define Theme for Page Content
const theme = createTheme({
  palette: {
    primary: {
      main: '#4A8E51'
    }
  },
});


//[APB 1.80] Define Event Page Structure
export default function EventPage() {

  //[APB 1.81] Set States
  const [cards, setCards] = useState([]);
  const [currentOrg, setCurrentOrg] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  


  //[APB 1.82] Get Request to Database for All Event Detail Records
  useEffect(()=> {
    const database = 'http://localhost:8080/dbscompdex/'
      axios.get(database)
      .then(response=> {console.log(response); setCards(response.data);
        setLoading(false);
      console.log(cards)})
      .catch(error => {console.log(error)})
      },[])

  //[APB 1.83] Dynamic Card Structure and Card Content to be Created using Table Columns
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
      <h2> See Our List of Events Below</h2>
        <Container sx={{ py: 8 }} maxWidth="md">
            <Box>
              {loading ? <p>
                Loading...
              </p> : null}
            </Box>
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card class="my-result"
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                >
                  <CardMedia
                    component="img"
                    sx={{}}
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

                  <EventModal event={card} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <PaginationRounded />
        <br></br>
      </main>
     
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