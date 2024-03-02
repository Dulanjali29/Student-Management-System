import React, { useEffect, useState } from 'react'
import Dashboard from '../pages/Dashboard/Dashboard'
import './App.css'
import SignUp from '../pages/SignUp/SignUp'
import SignIn from '../pages/SignIn/SignIn'
import Box from '@mui/material/Box';
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import './App.css'


function App() {

  const [signin, setSignin] = useState(false);

  useEffect(() => {
    const key = localStorage.getItem('stmToken')
    console.log(key);

    if (key !== null) {
      setSignin(true);
    } else {
      setSignin(false);
    }
  }, []);
  return (
    <div>
      {
        signin ?
          <Dashboard />
          :
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
            <Routes>
              <Route path={'*'} element={< Navigate to={'/signin'} />} />
              <Route path={'/signin'} element={<SignIn />} />
              <Route path={'/signup'} element={<SignUp />} />
            </Routes>
          </Box>
      }




    </div>

  )
}

export default App
