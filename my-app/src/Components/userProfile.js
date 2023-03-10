import React from 'react'
import { useContext, useState, useEffect } from 'react';
import axios from 'axios'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { CustomContext } from './Context';
import Logo from './BGImage4.png'

export const Profile = () => {
  let navigate = useNavigate();
  const theme = createTheme({
    palette: {
      primary: {
        main: '#4A8E51'
      }
    },
  });

  // const currentUserString = localStorage.getItem('currentUser');
  // const currentUser = JSON.parse(currentUserString);
  // state and useeffect

  const [user, setUser] = useState([]);
  const [updated, setUpdated] = useState(false);
  let {setCurrentUser, currentUser} = useContext(CustomContext);
  
  //gets user profile
  useEffect(()=> {
      console.log(`Fetching ${currentUser}'s information`)
      axios.get('http://localhost:8080/dbsuserdex/finduserbyid/'+currentUser.ID)
      .then(response=> {console.log(response.data); setUser(response.data[0]);})
      .catch(error => {console.log(error)})
    },[currentUser.ID, updated])

  const [UserName, setUserName] = useState('')
  const [PassWord, setPassWord] = useState('')

  //updates a user
  const userUpdate = () => {
      console.log(currentUser)
      const updateUser={'id':currentUser.ID, 'UserName': UserName, 'UserPassword': PassWord}
      const axUsers=`http://localhost:8080/dbsuserdex/updateuserbyid/`+currentUser.ID
          console.log(axUsers)
          axios.put(axUsers, updateUser)
          .then(response=> {console.log(response); setUpdated(response.data)})
          .catch(error => {console.log(error)});
    }
  
  //logs user out
  const loggingOff = () => {
    setCurrentUser({
      ID: "",
      UserName: "",
      UserPassword: ""
    })
    // localStorage.removeItem('currentUser');
    navigate('/');
  }
  function navigateToLogin(){
    navigate('/')
  }
  if (currentUser =={}){
    navigateToLogin()
    //return (<h1> Please sign in</h1>)
  } else {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <main>
            {/* Hero unit */}
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
                >
                <Container maxWidth="sm">
                    <Typography
                    component="h1"
                    variant="p"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    >
                      <Button onClick={loggingOff}>Log out</Button>
                        <div className="userInfo">
                            {currentUser.ID ?
                                <>
                                <h3>Hi {currentUser.UserName}</h3>
                                <img id="profile-image" alt='user' width={400} height={400}  src={Logo}></img>

                                <br></br>

                                <form>
                                <div><TextField 
                                type='text' 
                                onChange={e=>setUserName(e.target.value)} 
                                defaultValue={currentUser.UserName} 
                                label="Username"></TextField></div>

                                <br></br>

                                <div><TextField 
                                type='password' 
                                onChange={e=>setPassWord(e.target.value)} 
                                defaultValue={currentUser.UserPassword} 
                                label="Password"></TextField></div>
                                
                                <br></br>

                                <Button onClick={userUpdate}>Update</Button>
                                </form>
                                </>
                                : <p> User: {currentUser.ID} not found</p>
                                }
                            </div>     
                        </Typography>
                    </Container>
                </Box>
            </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          DBSCG CompDex 2023
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>         
    )
  }
  
}