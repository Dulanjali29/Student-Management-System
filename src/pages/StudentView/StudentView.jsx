import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'age', headerName: 'Age', width: 130 },

    {
        field: 'address',
        headerName: 'Address',

        width: 250,

    },
    {
        field: 'contact',
        headerName: 'Contact',
        type: 'number',
        width: 150,
    },
];

const rows = [
    { id: 1, name: 'Dulanji', age: 45, address: 'Dodangaslanda', contact: '0774545458' },

];
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
export default function StudentView() {
    return (
        <div >
            <Typography
                sx={{ flex: '1 1 100%' ,color:'#4169E1'}}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Student Details
            </Typography>
            <Box sx={{ flexGrow: 1,paddingTop:3}}>
                <AppBar position="static">
                    <Toolbar sx={{backgroundColor:'#6495ED'}}>
                        Search Student

                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
          

                <div style={{ height: 400, width: '100%' ,paddingTop:30}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        // initialState={{
                        //     pagination: {
                        //         paginationModel: { page: 0, pageSize: 5 },
                        //     },
                        // }}
                        // pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
           
        </div>


    );
}