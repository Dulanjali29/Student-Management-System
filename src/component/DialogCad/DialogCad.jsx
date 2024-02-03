import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Dialog from '@mui/material/Dialog';
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Alert from '../../common/Alert/Alert'
import { useState } from 'react';
import instance from '../../service/AxiosOrder';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });



export default function DialogCad({open,close,updateStudent,updateData}){

    
    const [name, setName] = useState(updateData?.name);
    const [age, setAge] = useState(updateData?.age);
    const [address, setAddress] = useState(updateData?.address);
    const [contact, setContact] = useState(updateData?.contact);
    
    const updateStudentData = () => {
       
        instance.put('/student/update/'+updateData.id, {
            student_name: name,
            student_age: age,
            student_address: address,
            student_contact: contact
        })
            .then(function (response) {
               console.log(response);
                updateStudent()
                Alert('success', 'Success..', 'Student Update Successful !')
                clearFields()

            })
            .catch(function (error) {
                console.log(error);
                Alert('error', 'Oops..', 'Something Went Wrong!')
            });

    }

    const clearFields = () => {

        setName("");
        setAge("");
        setAddress("");
        setContact("");
    }
    return(
      <Dialog open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={close}
      aria-describedby="alert-dialog-slide-description"
      >
     
        <div>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ minWidth: 500, maxWidth: 1400, height: 450, padding: 5,  backgroundColor: '#E0FFFF' }}   >

                <Box sx={{ display: 'flex', justifyContent: 'center', color: '#4169E1' }}>
                    <h1 >Update Student Information</h1>
                </Box >
                <Box >
                    
                    <Box >
                       
                        <Box sx={{ marginTop: 1,display:'flex',justifyContent:'center'}}>

                            <TextField
                                sx={{ margin: 2, width: 400 }}

                                id="name"
                                label="Name *"
                                variant="outlined"
                                value={name}
                                onChange={(val) => setName(val.target.value)}
                            />
                            <TextField
                                sx={{ margin: 2, width: 400 }}
                                fullWidth
                                id="age"
                                label="Age * "
                                variant="outlined"
                                value={age}
                                onChange={(val) => setAge(val.target.value)}
                            />
                        </Box>
                        <Box  sx={{ marginTop: 1,display:'flex',justifyContent:'center'}}>
                            <TextField
                                sx={{ margin: 2, width: 400 }}
                                fullWidth
                                id="address"
                                label="Address * "
                                variant="outlined"
                                value={address}
                                onChange={(val) => setAddress(val.target.value)}
                            />
                            <TextField
                                sx={{ margin: 2, width: 400 }}
                                fullWidth
                                id="contact"
                                label="Contact NO * "
                                variant="outlined"
                                value={contact}
                                onChange={(val) => setContact(val.target.value)}
                            />
                        </Box>
                    </Box>

                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, marginRight: 5 }}>
                    <Box sx={{ marginTop: 2, width: 200, marginLeft: 5 }}>
                        <Button variant="contained" fullWidth onClick={() => updateStudentData()}>Update</Button>
                    </Box>
                    <Box sx={{ marginTop: 2, width: 200, marginLeft: 3 }}>
                        <Button variant="contained" fullWidth onClick={() => close()}>Back</Button>
                    </Box>
                 </Box>   

            </Card>
        </Box>
    </div>
    </Dialog>
    );
}