import { createData } from "@/app/services/createData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
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
import InputSearch from "../InputSearch";
import MainText from "../MainText/MainText";


const Transport =  ({transport}) => {

    const [type, setType] = useState([]);
    const [icon, setIcon] = useState();

    const [isLoading, setIsloading] = useState(true);

    const {iconHandlerTransport} = handlers;
    const selector = useSelector(state => state.changePage.transport);

    const dispatch = useDispatch();

    const data = createData(transport);

    console.log(selector)
    
  
    useEffect(()=>{
        console.log('rendering TRANSPORT')
        setIsloading(true)
        setIcon(iconHandlerTransport(transport.transportType))
        data.then(res=>{
            setType(res);
            setIsloading(false);
        });
    }, [transport])


    const clickHandler = (e) =>{
        dispatch(setTransport(e.currentTarget.value))
    }


    if (isLoading){
        return  <Loader/>
    } 
    else {
        if (transport.transportType === 'All' || type.length===0){
            return(
            <>
                <div className="main_container"> 
                    <div className="main_text">
                        <MainText/>
                    </div>
                    <div className="main_button_menu">
                        <TransportType/>
                    </div>
                    <div className="main_search">
                        <InputSearch data={type}/>
                    </div> 
                </div>
                
            </>
            )
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
                    <ButtonTransport value = 'home'  widthProps='100%' heightProps='15vh'/>  
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