import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect,useState } from 'react';
import instance from '../../service/AxiosOrder';
import  Button  from '@mui/material/Button';
import Alert from '../../common/Alert/Alert';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import  IconButton  from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



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
    const [data, setData] = useState([])
   

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'age', headerName: 'Age', type:'number',width: 130 },
        { field: 'address', headerName: 'Address', width: 200 },
        { field: 'contact', headerName: 'Contact', width: 200},
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
              <div>
             
                <IconButton
                  color='error'
                  aria-label="delete"
                  onClick={() => deleteStudent(params.row.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            ),
          },
    ]; 

    const deleteStudent=(id)=>{
        instance.delete('/student/delete/'+id)
        // console.log(id)
        .then(response => {
          console.log(response)
          Alert('success','Success..','Student Delete Successful !')
          window.location.reload()
        })
        .catch(error => {
          console.error(error);
          Alert('error','Oops..','Something Went Wrong!')
        });
    }

    useEffect(() => {
        instance({
          method: 'get',
          url: '/student/getAll',
        })
          .then(function (response) {
            console.log(response.data);
            const array = [];
            response.data.forEach(val => {
              array.push({
                id: val.id,
                name: val.student_name,
                age: val.student_age,
                address: val.student_address,
                contact: val.student_contact,
               
              });
             
            });
           
            setData(array);
    
          });
      }, []);
    
    
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
                        {/* <Button sx={{marginLeft:4}} variant="contained" color="error"   onChange={(val)=>setId(val.target.value)} onClick={()=>{deleteStudent(params.row.id)}}>Delete</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
          

                <div style={{ height: 400, width: '100%' ,paddingTop:30}}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        initialState={{
                            pagination: {
                              paginationModel: { page: 0, pageSize: 10 },
                            },
                          }}
                          pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
           
        </div>


    );
}