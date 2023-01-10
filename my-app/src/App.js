//Main Application Imports

import './App.css';
import React from 'react';
import LoginForm from './Components/LoginForm';
import EventPage from './Components/EventPage';
import LeaderPag from './Components/LeaderPage';
import HomePage from './Components/HomePage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Template from './Components/Template';
import EventIDForm from './Components/EventIDForm';
import EventNameForm from './Components/EventNameForm';
import { Profile } from './Components/userProfile';
import ResponsiveAppBar from './Components/Appbar';
import Logout from './Components/Logout';

//Define Main Front End Application Structure and Routes
function App() {
  
//Return Main Front End Application Structure and Routes
  return (
    <div>
      <ResponsiveAppBar/>
      <div className="App">
        <Routes>
          <Route path ="/" element={<LoginForm /> } />
          <Route path="/home" element={<HomePage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/leaders" element={<LeaderPag />} />
        
        <Route path="/logoff" element ={<Logout />} />
        <Route>
        <Route path="/profile" element={<Profile />}></Route>
        </Route>
        <Route path='/eventinfoupdate' element={<Template/>}>
              <Route path='id' element={<EventIDForm/>}/>
              <Route path='name' element={<EventNameForm/>}/>
            </Route>

        </Routes>
        
      </div>
    </div>
  );
}

export default App;  //Export App to other components
 