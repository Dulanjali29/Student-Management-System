import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextField({value,lable,type,onChange,width}){
    return(
        <TextField value={value} id="outlined-basic" label={lable} type={type} color="success"  variant="outlined" onChange={onChange} sx={{width:{width},margin:1}} />
    )
}


