import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from './HomePage';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../App';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        DBSCompDex
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function LoginForm() {
  const[userdetails, setUserDetails] = useState([]);
  const{setCurrentUser} = useContext(CurrentUserContext);
  const[LUserName, setLUserName] = useState("");
  const[LPassword, setLPassword] = useState("");
  const[ValidateMsg, setValidateMsg] = useState("");


  //My Code
  let navigate=useNavigate();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   navigate("/home") 
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'), //should be ${userName}?
  //     password: data.get('password'), //should be ${userPassword}?
  //   });
  // };

  useEffect(()=> {
    const database = 'http://localhost:8080/dbsuserdex/findusers'
      axios.get(database)
      .then(response=> {console.log(response); setUserDetails(response.data)})
      .catch(error => {console.log(error)})
      },[])

//validate the logins
const validateLogin=()=>

{
  let matchedUserName=false
    for (let u of userdetails)
    {
      if (LUserName===u.UserName)
      {
        matchedUserName=true
        if (LPassword===u.UserPassword)
        {
          console.log(u.UserName, u.UserPassword)
          setCurrentUser(u)
          localStorage.setItem('currentUser', JSON.stringify(u))
          navigate('/home');
        }
        else 
        {
            setValidateMsg('Incorrect password, please try again.');
        }
      }
    }
    if (!matchedUserName) 
    {
      setValidateMsg('Incorrect username, please register first.');
    }
}


//My Code
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className="Login-Background" style={{backgroundColor: "rgba(50%,50%,50%, 0.7)"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          {/* My Code */}
            Sign in {ValidateMsg}
          </Typography>
          <Box component="form"  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Username"
              label="UserName"
              name="Username"
              autoComplete="Username"
              autoFocus
              onChange={event => {setLUserName(event.target.value)}}
              value={LUserName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange = {event => {setLPassword(event.target.value)}}
              value={LPassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={validateLogin}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2"> 
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
