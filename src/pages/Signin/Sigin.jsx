import { Margin } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
export default function Signin(){
    return(
        <div>
             <Card sx={{minWidth:300,maxWidth:350,margin:2,padding:1}}   >
                <h1 sx={{display:'flex',justifyContent:'center'}}>Sign Up</h1>
                <TextField
                sx={{margin:1}}
                fullWidth
                 id="outlined-basic"
                  label="E mail *" 
                  variant="outlined" 
                  />
                 <TextField
                sx={{margin:1}}
                fullWidth
                 id="outlined-basic"
                  label="Password * " 
                  variant="outlined" 
                  />
               
                  <Box sx={{display:'flex',justifyContent:'center'}}>
                  <Button variant="contained" fullWidth>SIGNIN</Button>
                  </Box>
             </Card>
        </div>
       
    )
}