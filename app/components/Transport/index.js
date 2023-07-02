import { createData } from "@/app/services/createData";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { setTransport } from '@/app/features/changeStatesSlice';
import React from "react";
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ErrorComponent from "../ErrorComponent";
import TransportValue from "../TransportValue";
import TransportType from "../TransportType";
import ButtonTransport from "../ButtonTransport";

import { handlers } from "@/app/features/handlers";
import Loader from "../Loader";


const Transport =  ({transport}) => {

    const [type, setType] = useState([]);
    const [icon, setIcon] = useState();

    const [isLoading, setIsloading] = useState(true);

    const {iconHandlerTransport} = handlers;

    const dispatch = useDispatch();

    const data = createData(transport);
    
  
    useEffect(()=>{
        console.log('rendering TRANSPORT')
        setIcon(iconHandlerTransport(transport.transportType))
        data.then(res=>{
            setType(res);
            setIsloading(false);
        });
    }, [transport])


    const clickHandler = (e) =>{
        setIsloading(true)
        dispatch(setTransport(e.currentTarget.value))
    }


    if (isLoading){
        return  <Loader/>
    } 
    else {
        if (transport.transportType === 'All'){
            return <div className="main_container"> <TransportType/> </div>
        }
        if (type.length>0 && transport.transportValue === 'All') {
            const list = type.map((elem, index) => {
                        return  <Badge key={index} badgeContent={elem[1]} color='primary' > 
                                    <Button key={elem[0]} value={elem[0]} onClick={clickHandler} fontSize="large" sx={{width: '110px'}} variant="contained" startIcon={icon}> 
                                        № {elem[0]}
                                    </Button>
                                </Badge>       
            })
            return ( 
            <>
                
                <Stack sx={{m:1, display:'flex', justifyContent:'center'}} spacing={{ xs: 1.2, sm: 1 }} direction="row" alignItems="center" useFlexGap flexWrap="wrap">
                    <ButtonTransport value = 'home'/>  
                    {list}
                </Stack>
            </>)
        }  
        if (type.length>0 && transport.transportValue !== 'All') {
             return <TransportValue data={type} icon={icon}/>
        }
        if (transport.transportValue === undefined) {
            return <ErrorComponent/>
            } 
    }

}

export default Transport;