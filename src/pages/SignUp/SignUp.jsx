import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Margin } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';

export default function SignUp(){
  // const signUp(){

  // }
    return(
        <div>
             <Card sx={{minWidth:300,maxWidth:350,padding:5}}   >
                <Box sx={{display:'flex', justifyContent:'center'}}>
                <Avatar
        alt="Remy Sharp"
        src="../src/assets/user1.png"
        sx={{ width: 60, height: 60 }}
      />   
                </Box>
                <Box sx={{display:'flex',justifyContent:'center'}}>
                <h1 >Sign Up</h1>
                </Box>
                <Box sx={{marginRight:2}}>
                <TextField
                sx={{margin:1}}
                fullWidth
                 id="usernm"
                  label="Name *" 
                  variant="outlined" 
                  />
                 <TextField
                sx={{margin:1}}
                fullWidth
                 id="email"
                  label="E mail * " 
                  variant="outlined" 
                  />
                  <TextField
                sx={{margin:1}}
                fullWidth
                 id="oupassword"
                 type='password'
                  label="Password * " 
                  variant="outlined" 
                  />
                </Box>
                

                  <Box sx={{display:'flex',justifyContent:'center',marginTop:2,width:330,marginLeft:1}}>
                  <Button variant="contained" fullWidth onClick={()=>{SignUp()}} >SIGN UP</Button>
                  </Box>
                  <Box sx={{fontSize:'0.1rem',display:'flex',justifyContent:'end',marginTop:2}}>
                 
                  <Link to={'/signin'}>
                  <Button variant="text" >Already have an account?Sign in</Button> 
                  </Link>
                  </Box>
             </Card>
        </div>
       
    )
}