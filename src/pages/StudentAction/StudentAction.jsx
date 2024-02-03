import * as React from 'react';
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Alert from '../../common/Alert/Alert'
import { useState } from 'react';
import instance from '../../service/AxiosOrder';
import AppBar from '@mui/material/AppBar';


export default function StudentAction() {
   
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")

    const saveStudent = () => {
        instance.post('/student/save', {
            student_name: name,
            student_age: age,
            student_address: address,
            student_contact: contact
        })
            .then(function (response) {
                console.log(response);
               
                Alert('success', 'Success..', 'Student Saved Successful !')
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

    return (

        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ minWidth: 600, maxWidth: 1400, height: 500, padding: 5, marginTop: 5, backgroundColor: '#E0FFFF' }}   >

                    <Box sx={{ display: 'flex', justifyContent: 'center', color: '#4169E1' }}>
                        <h1 >Student Information</h1>
                    </Box >
                    <Box >
                        <Box sx={{ flexGrow: 1, paddingTop: 3 }}>
                            <AppBar position="static">

                            </AppBar>
                        </Box>
                        <Box>

                            <Box sx={{ marginTop: 3 }}>

                                <TextField
                                    sx={{ margin: 1, width: 400 }}

                                    id="name"
                                    label="Name *"
                                    variant="outlined"
                                    value={name}
                                    onChange={(val) => setName(val.target.value)}
                                />
                                <TextField
                                    sx={{ margin: 1, width: 400 }}
                                    fullWidth
                                    id="age"
                                    label="Age * "
                                    variant="outlined"
                                    value={age}
                                    onChange={(val) => setAge(val.target.value)}
                                />
                            </Box>
                            <Box>
                                <TextField
                                    sx={{ margin: 1, width: 400 }}
                                    fullWidth
                                    id="address"
                                    label="Address * "
                                    variant="outlined"
                                    value={address}
                                    onChange={(val) => setAddress(val.target.value)}
                                />
                                <TextField
                                    sx={{ margin: 1, width: 400 }}
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

                    <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: 2, marginRight: 1 }}>
                        <Box sx={{ marginTop: 2, width: 200, marginLeft: 1 }}>
                            <Button variant="contained" fullWidth onClick={() => saveStudent()}>Save</Button>
                        </Box>
                        <Box sx={{ marginTop: 2, width: 200, marginLeft: 3 }}>
                            <Button variant="contained" fullWidth onClick={() => clearFields()}>Clear</Button>
                        </Box>


                    </Box>

                </Card>
            </Box>
        </div>

    )
}