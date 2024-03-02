import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import instance from '../../service/AxiosOrder';
import Alert from '../../common/Alert/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import DialogCad from '../../component/DialogCad/DialogCad';

export default function StudentView() {
  const [data, setData] = useState([])
  const [popup, setPopup] = useState(false);
  const [updateData, setUpdateData] = useState()


  const deleteStudent = (id) => {
    instance.delete('/student/delete/' + id)

      .then(response => {
        console.log(response)
        
        Alert('success', 'Delete Student', 'Student Delete Successful !')
        getStudentData()

      })
      .catch(error => {
        console.error(error);
        Alert('error', 'Oops..', 'Something Went Wrong!')
      });
  }

  const updateStudent = () => {
    getStudentData()
    closePopup()
  }

  const openPopup = (val) => {
    setPopup(true)
    setUpdateData(val)

  }

  const closePopup = () => {
    setPopup(false)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'age', headerName: 'Age', type: 'number', width: 130 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'contact', headerName: 'Contact', width: 200 },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => (
        <Box>

        
          <IconButton
            color='success'
            aria-label="edit"
            onClick={() => { openPopup(params.row) }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color='error'
            aria-label="delete"
            onClick={() => deleteStudent(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];
  const getStudentData = () => {
    instance({
      method: 'get',
      url: '/student/getAll',
    })
      .then(function (response) {

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
    getStudentData(setData)
  }, []);
  return (
    <div >
      <Typography
        sx={{ flex: '1 1 100%', color: '#4169E1' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Student Details
      </Typography>




      <div style={{ height: 400, width: '80%', paddingTop: 30 }}>
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

        {popup &&
          <DialogCad open={popup} close={closePopup} updateData={updateData} updateStudent={() => updateStudent()} />

        }
      </div>

    </div>


  );
}