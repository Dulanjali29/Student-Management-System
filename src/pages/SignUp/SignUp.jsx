import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Margin } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import instance from '../../service/AxiosOrder';
import Alert from '../../common/Alert/Alert';

export default function SignUp() {

  const [usernm, setUsernm] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerAction = () => {
    instance.post('/register', {
      name: usernm,
      email: email,
      password: password
    })
      .then(function (response) {
        console.log(response);
        Alert('success', 'Success..', 'User Registration Successful!')
        clearFields()


      })
      .catch(function (error) {
        console.log(error);
        Alert('error', 'Oops..', 'Something Went Wrong!')
      });

  }
  const clearFields = () => {
    setUsernm("");
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <Card sx={{ minWidth: 300, maxWidth: 350, padding: 5 }}   >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar
            alt="Remy Sharp"
            src="../src/assets/user1.png"
            sx={{ width: 60, height: 60 }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <h1 >Sign Up</h1>
        </Box>
        <Box sx={{ marginRight: 2 }}>

          <TextField
            sx={{ margin: 1 }}
            fullWidth
            id="usernm"
            label="Name *"
            variant="outlined"
            value={usernm}
            onChange={(val) => setUsernm(val.target.value)}
          />
          <TextField
            sx={{ margin: 1 }}
            fullWidth
            id="email"
            label="E mail * "
            value={email}
            onChange={(val) => setEmail(val.target.value)}
          />
          <TextField
            sx={{ margin: 1 }}
            fullWidth
            id="password"
            type='password'
            label="Password * "
            variant="outlined"
            value={password}
            onChange={(val) => setPassword(val.target.value)}
          />
        </Box>


        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, width: 330, marginLeft: 1 }}>
          <Button variant="contained" fullWidth onClick={registerAction} >SIGN UP</Button>
        </Box>
        <Box sx={{ fontSize: '0.1rem', display: 'flex', justifyContent: 'end', marginTop: 2 }}>

          <Link to={'/signin'}>
            <Button variant="text" >Already have an account?Sign in</Button>
          </Link>
        </Box>
      </Card>
    </div>

  )
}