import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import HomePage from './HomePage';
import LeaderPage from './LeaderPage';
import EventPage from './EventPage';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function DirectionStack() {
//   return (
//     <div>
// <>
//     <AppBar position="sticky" className='AppBar' sx={{backgroundColor: '#4A8E51'}}>
//       <Toolbar id="tool">          
//         <Typography variant="h6" color="inherit" noWrap id="toolItems">
//           <NavLink to='/'>Home</NavLink>
//           {currentUser && currentUser.UserAdmin ? users : null}
//           {currentUser ? <NavLink to='/profile'>{currentUser.UserName}</NavLink> : <NavLink to='/login' >Login</NavLink>}
//         </Typography>
//       </Toolbar>
//       <Typography variant="h6" id="toolSearch">
//         <PlantSearch/>
//       </Typography>
//     </AppBar>
//     </>

//         <Item><a href={HomePage}></a>Home</Item>
//         <Item><a href={LeaderPage}></a>Leaders</Item>
//         <Item><a href={EventPage}></a>Events</Item>
//         </Typography>
//       </Container>
      
//     </div>
//   );
// }

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  }));
  
  export default function ResponsiveStack() {
    return (
      <div>
        <br></br>
        <Stack
          direction={{ xs: 'row', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
          alignItems="center"
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
    );
  }