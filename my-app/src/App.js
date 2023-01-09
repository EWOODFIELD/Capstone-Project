import './App.css';
import React from 'react';
import MenuAppBar from './Components/Appbar2';
import LoginForm from './Components/LoginForm';
import EventPage from './Components/EventPage';
import LeaderPag from './Components/LeaderPage';
import HomePage from './Components/HomePage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import BasicModal from './Components/Modal';
import RegistrationForm from './Components/RegistrationForm';
import { useState } from 'react';
import Context from '@mui/base/TabsUnstyled/TabsContext';
import Template from './Components/Template';
import EventIDForm from './Components/EventIDForm';
import EventNameForm from './Components/EventNameForm';
import { Profile } from './Components/userProfile';
import ResponsiveAppBar from './Components/Appbar';
import Products from './Components/Phil';
import Logout from './Components/Logout';




function App() {
  

  return (
    
    <div>
      {/* <MenuAppBar /> */}
      <ResponsiveAppBar/>
      <div className="App">
        <Routes>
        <Route path ="/" element={<LoginForm /> } />
        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/leaders" element={<LeaderPag />}>
        
        
        {/* <Route path=":leaderid" element={<BasicModal/>} />*/}
        {/* <Route path="/register" element={<RegistrationForm />} /> */}
        </Route>
        <Route path="/logoff" element ={<Logout />} />
        <Route path="/phil" element ={<Products />}></Route>
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

export default App;
