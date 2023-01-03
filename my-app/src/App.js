
import './App.css';
import React from 'react';
import MenuAppBar from './Components/Appbar';
import LoginForm from './Components/LoginForm';
import EventPage from './Components/EventPage';
import LeaderPag from './Components/LeaderPage';
import HomePage from './Components/HomePage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import BasicModal from './Components/Modal';
import RegistrationForm from './Components/RegistrationForm';
import { useState } from 'react';
import Context from '@mui/base/TabsUnstyled/TabsContext';
import Template from './Components/Template';
import SubmissionForm from './Components/SubmissionForm';
export const CurrentUserContext = React.createContext();



function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
    <div>
      <MenuAppBar />
      <div className="App">
        <Routes>
        <Route path ="/" element={<LoginForm /> } />
        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/leaders" element={<LeaderPag />}>
        {/* <Route path=":leaderid" element={<BasicModal/>} />*/}
        {/* <Route path="/register" element={<RegistrationForm />} /> */}
        </Route>
        <Route path='/eventinfoupdate' element={<Template/>}>
              <Route path=':eventeditbyid' element={<SubmissionForm/>}/>
            </Route>

        </Routes>
        
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
