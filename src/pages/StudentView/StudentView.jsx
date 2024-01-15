import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

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

export default function StudentView() {
    return (
        <div>
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Student Details
            </Typography>
            <div style={{ height: 400, width: '70%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>

    );
}