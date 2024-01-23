import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Margin } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';
import instance from '../../service/AxiosOrder';
import { useState } from 'react';
import Alert from '../../common/Alert/Alert'

export default function SignIn(){

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const loginAction=()=>{
    instance.post('/login', {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response.data.token);
      localStorage.setItem('stmToken',response.data.token);
      window.location.reload();
      Alert('success','Success Registration','User Login Successful!')
    })
    .catch(function (error) {
      console.log(error);

    });
  }
    return(
        <div>
             <Card sx={{minWidth:300,maxWidth:350,padding:5}}   >
                <Box sx={{display:'flex', justifyContent:'center'}}>
                <Avatar
        alt="Remy Sharp"
        src="../src/assets/user1.png"
        sx={{ width: 60, height: 80 }}
      />   
                </Box>
                <Box sx={{display:'flex',justifyContent:'center'}}>
                <h1 >Sign in</h1>
                </Box>
                <Box sx={{marginRight:2}}>
               
                 <TextField
                sx={{margin:1}}
                fullWidth
                 id="email"
                  label="E mail * " 
                  variant="outlined" 
                
                  onChange={(val)=>setEmail(val.target.value)}
                  />
                  <TextField
                sx={{margin:1}}
                fullWidth
                 id="password"
                 type='password'
                  label="Password * " 
                  
                  onChange={(val)=>setPassword(val.target.value)}
                  />
                </Box>
                

                  <Box sx={{display:'flex',justifyContent:'center',marginTop:2 ,width:330,marginLeft:1}}>
                  <Button variant="contained" fullWidth onClick={loginAction} >SIGN IN</Button>
                  </Box>
                  <Box sx={{fontSize:'0.1rem',display:'flex',justifyContent:'end',marginTop:2}}>
                  
                  <Link to={'/signup'}>
                  <Button variant="text" >Don't have an account? Sign Up</Button>
                  </Link>
                  </Box>
             </Card>
        </div>
       
    )
}