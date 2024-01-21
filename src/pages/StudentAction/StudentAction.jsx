import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Margin } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


export default function StudentAction() {

    // const Search = styled('div')(({ theme }) => ({
    //     position: 'relative',
    //     borderRadius: theme.shape.borderRadius,
    //     backgroundColor: alpha(theme.palette.common.white, 0.15),
    //     '&:hover': {
    //         backgroundColor: alpha(theme.palette.common.white, 0.25),
    //     },
    //     marginLeft: 0,
    //     width: '100%',
    //     [theme.breakpoints.up('sm')]: {
    //         marginLeft: theme.spacing(1),
    //         width: 'auto',
    //     },
    // }));
    
    // const SearchIconWrapper = styled('div')(({ theme }) => ({
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // }));
    
    // const StyledInputBase = styled(InputBase)(({ theme }) => ({
    //     color: 'inherit',
    //     width: '100%',
    //     '& .MuiInputBase-input': {
    //         padding: theme.spacing(1, 1, 1, 0),
    //         // vertical padding + font size from searchIcon
    //         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    //         transition: theme.transitions.create('width'),
    //         [theme.breakpoints.up('sm')]: {
    //             width: '12ch',
    //             '&:focus': {
    //                 width: '20ch',
    //             },
    //         },
    //     },
    // }));
    return (
        
        <div>
            <Box sx={{display:'flex',justifyContent:'center'}}>
            <Card sx={{ minWidth: 600, maxWidth: 1400,height:500, padding: 5 ,marginTop:5,backgroundColor:'#E0FFFF'}}   >
                {/* <Box sx={{display:'flex', justifyContent:'center'}}>
                <Avatar
        alt="Remy Sharp"
        src="../src/assets/user1.png"
        sx={{ width: 60, height: 60 }}
      />   
                </Box> */}
                <Box sx={{ display: 'flex', justifyContent: 'center' ,color:'#4169E1' }}>
                    <h1 >Student Information</h1>
                </Box >
                <Box >
                <Box sx={{ flexGrow: 1,paddingTop:3}}>
                <AppBar position="static">
                    {/* <Toolbar sx={{backgroundColor:'#6495ED'}}>
                       

                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search Student"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar> */}
                </AppBar>
            </Box>
            <Box>
                    <Box sx={{marginTop:3}}>
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

                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'end' ,marginTop:2,marginRight:1 }}>
                    <Box sx={{ marginTop: 2, width: 200, marginLeft: 1 }}>
                        <Button variant="contained" fullWidth >Save</Button>
                    </Box>
                    <Box sx={{  marginTop: 2, width: 200, marginLeft: 3 }}>
                        <Button variant="contained" fullWidth >Update</Button>
                    </Box>
                    <Box sx={{  marginTop: 2, width: 200, marginLeft: 3 }}>
                        <Button variant="contained" fullWidth  onClick={()=>{deleted()}} >Delete</Button>
                    </Box>
                  
                </Box>

            </Card>
            </Box>
        </div>

    )
}