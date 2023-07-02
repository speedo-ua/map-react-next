import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/material';

import { useDispatch } from "react-redux"
import {setAllTransport } from '@/app/features/changeStatesSlice';


const ButtonHome = () => {

    const dispatch = useDispatch();

    const clickHandler = () =>{
        dispatch(setAllTransport());

    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <Button value='All' onClick={clickHandler} fontSize="large" sx={{width: '97vw', height: '80px', margin:'5px'}} variant="contained" startIcon={<HomeIcon/>}> 
            All transport
        </Button>
    </Box>
    )

}

export default ButtonHome;