import ButtonHome from "../ButtonHome";
import { Box, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';



const ErrorComponent = () =>{

    return (
        <>
        <ButtonHome/>
        <Box>
            <Typography className="error_message">
                Ooops... Something wrong..  
            </Typography>
            <Typography className="error_smile">
            <SentimentVeryDissatisfiedIcon sx={{fontSize:'200px'}}/>
            </Typography>
            
        </Box>
        </>
    )
}

export default ErrorComponent;