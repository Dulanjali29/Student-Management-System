import React from 'react'
import Home from '../pages/Home/Home'
import './App.css'
import SignUp from '../pages/SignUp/SignUp'
import Signin from '../pages/Signin/Sigin'
import { Box } from '@mui/material'

function App() {
 

  return (
<div>
  {/* <Box sx={{display:'flex',justifyContent:'center'}}>
    <SignUp/>
  </Box> */}
  <Box sx={{display:'flex',justifyContent:'center'}}>
    <Signin/>
  </Box>
</div>

  )
}

export default App
