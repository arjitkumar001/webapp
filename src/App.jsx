import React, { useEffect, useState } from 'react'
import './App.css'
import TopBar from './TopBar'
import LandingPage from './LandingPage';
import GetStarted from './GetStarted';
import {  Routes, Route } from 'react-router-dom';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (     

  
  <div>
      <Routes>
        <Route path="/" element={isLoading ? <LandingPage/>:<GetStarted/>} />
        <Route path="/started" element={<TopBar/>} />
      </Routes>
     
      </div>
      
  )
}

  


export default App;
