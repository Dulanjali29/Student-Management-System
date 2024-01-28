import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect,useState } from 'react';
import instance from '../../service/AxiosOrder';
import  Button  from '@mui/material/Button';
import Alert from '../../common/Alert/Alert';
import axios from 'axios';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import  IconButton  from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link,Navigate } from 'react-router-dom';
import EditStudent from '../../component/DialogCad/DialogCad';




export default function StudentView() {
    const [data, setData] = useState([])
    const [popup,setPopup]=useState(false);
    const [updateId,setUpdateId]=useState()
   

    const deleteStudent=(id)=>{
        instance.delete('/student/delete/'+id)
        // console.log(id)
        .then(response => {
          console.log(response)
         getData()

        })
        .catch(error => {
          console.error(error);
          Alert('error','Oops..','Something Went Wrong!')
        });
    }
    const updateStudent=()=>{
      getData()
      closePopup()
    }
    const openPopup=(id)=>{
      setPopup(true)
      setUpdateId(id)
     

      console.log(id);
    }
    const closePopup=()=>{
      setPopup(false)
    }
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
                <Box>
               
                  <IconButton
                    color='error'
                    aria-label="delete"
                    onClick={() => deleteStudent(params.row.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    color='success'
                    aria-label="edit"
                    onClick={() =>{ openPopup(params.row.id)}}
                  >
                    <EditIcon />
                  </IconButton>
                
                </Box>
              ),
            },
      ]; 

    const getData=()=>{
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
    }
    useEffect(() => {
      getData(setData)
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
                    <EditStudent open={popup} close={closePopup} id={updateId} update={()=>updateStudent()}/>
                </div>
           
        </div>


    );
}