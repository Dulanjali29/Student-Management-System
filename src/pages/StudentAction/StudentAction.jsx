import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Margin } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
export default function StudentAction() {
    return (
        <div>
            <Box sx={{display:'flex',justifyContent:'center'}}>
            <Card sx={{ minWidth: 600, maxWidth: 1200,height:400, padding: 5 ,marginTop:5,backgroundColor:'#E0FFFF'}}   >
                {/* <Box sx={{display:'flex', justifyContent:'center'}}>
                <Avatar
        alt="Remy Sharp"
        src="../src/assets/user1.png"
        sx={{ width: 60, height: 60 }}
      />   
                </Box> */}
                <Box sx={{ display: 'flex', justifyContent: 'center' ,color:'#4169E1' }}>
                    <h1 >Student Details</h1>
                </Box >
                <Box >
                    <Box>
                    <TextField
                        sx={{ margin: 1, width: 400 }}

                        id="student_name"
                        label="Name *"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ margin: 1, width: 400 }}
                        fullWidth
                        id="student_age"
                        label="Age * "
                        variant="outlined"
                    />
                    </Box>
                   <Box>
                   <TextField
                        sx={{ margin: 1, width: 400 }}
                        fullWidth
                        id="student_address"
                        label="Address * "
                        variant="outlined"
                    />
                    <TextField
                        sx={{ margin: 1, width: 400 }}
                        fullWidth
                        id="student_contact"
                        label="Contact NO * "
                        variant="outlined"
                    />
                   </Box>
                   

                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'end' ,marginTop:5,marginRight:10 }}>
                    <Box sx={{ marginTop: 2, width: 200, marginLeft: 1 }}>
                        <Button variant="contained" fullWidth >Save</Button>
                    </Box>
                    <Box sx={{  marginTop: 2, width: 200, marginLeft: 3 }}>
                        <Button variant="contained" fullWidth >Update</Button>
                    </Box>
                    <Box sx={{  marginTop: 2, width: 200, marginLeft: 3 }}>
                        <Button variant="contained" fullWidth >Delete</Button>
                    </Box>
                </Box>

            </Card>
            </Box>
        </div>

    )
}