import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { blue } from '@mui/material/colors';

import { useSelector } from "react-redux"


const HeaderTransport = () => {

    const transport = useSelector(state => state.changePage.transport);

    return (
        <div className='header_transport'>
            <Paper sx={{backgroundColor: blue[700], textAlign: 'center'}} >
                <Box sx={{color:blue[200], fontSize:'0.9rem'}}>{transport.transportType}</Box>
                <Box sx={{color:blue[300], fontSize:'1.3rem', fontWeight:'800'}}>{transport.transportValue}</Box>
            </Paper>
        </div>
    )

}

export default HeaderTransport