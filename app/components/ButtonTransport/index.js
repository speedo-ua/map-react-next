import Button from '@mui/material/Button';

import { handlers } from '@/app/features/handlers';
import { useDispatch } from "react-redux"
import {setTransport, setTransportType, setAllTransport} from '@/app/features/changeStatesSlice';


const ButtonTransport = ({value, widthProps, heightProps}) => {

     const { iconHandlerTransport } = handlers;
    const icon = iconHandlerTransport(value);

    const dispatch = useDispatch();

    const clickHandler = (e) =>{
            if (value === 'home'){
                dispatch(setAllTransport());
            } else {
                dispatch(setTransport('All'));
                dispatch(setTransportType(e.currentTarget.value));
            }
    }

      
        return (
        <Button value={value} onClick={clickHandler} sx={{width:widthProps, height:heightProps}} variant="contained" startIcon={icon}> 
            {value}
        </Button>
        )

}

export default ButtonTransport;