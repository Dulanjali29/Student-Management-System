import React, { useState } from 'react'
import Dashboard from '../pages/Dashboard/Dashboard'
import './App.css'
import SignUp from '../pages/SignUp/SignUp'
import SignIn from '../pages/SignIn/SignIn'
import  Box  from '@mui/material/Box';
import {Route,Routes,Link,Navigate} from 'react-router-dom'

import Main from '../component/Main/Main'

function App() {
 
const [signin,setSignin]=useState(false);
  return (
<div>
  {
    signin ?
    <Dashboard/>
    :
    <Box sx={{display:'flex',justifyContent:'center',marginTop:5}}>
    <Routes>
    <Route path='*' element={< Navigate to ={'/signin'} />}/>
      <Route path={'/signin'} element={<SignIn/>}/>
      <Route path={'/signup'} element={<SignUp/>}/>
    </Routes>
    </Box>
  }


  

</div>

  )
}

export default App
