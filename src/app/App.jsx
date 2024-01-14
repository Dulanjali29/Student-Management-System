import React from 'react'
import Home from '../pages/Dashboard/Dashboard'
import './App.css'
import SignUp from '../pages/SignUp/SignUp'
import Signin from '../pages/Signin/Sigin'
import  Box  from '@mui/material/Box';


function App() {
 

  return (
<div>
  {/* <Box sx={{display:'flex',justifyContent:'center',marginTop:5}}>
    <SignUp/>
  </Box> */}
  {/* <Box sx={{display:'flex',justifyContent:'center'}}>
    <Signin/>
  </Box> */}
  <Home/>
</div>

  )
}

export default App
