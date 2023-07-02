// import { useEffect } from "react";
import ButtonTransport from "../ButtonTransport";
import { Box } from '@mui/material';
// import { useSelector } from "react-redux"


const TransportType =() => {


    return (
        <>
        <Box>
            <ButtonTransport value = 'bus' />
            <ButtonTransport value = 'tram' />
            <ButtonTransport value = 'trol' />
        </Box>
        </>

    )

}

export default TransportType;