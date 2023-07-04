import React from 'react';
import ButtonTransport from '../ButtonTransport';
import TransportCard from '../TransportCard';
import { Box } from '@mui/material';

const TransportValue = ({data, icon}) => {

  return (
          <>
          <Box sx={{display: 'flex', m:1, justifyContent:'center'}}>
          <ButtonTransport value = 'home' widthProps='100%' heightProps='15vh'/>
          </Box>
          {data.map((item, index) => (
            <TransportCard data = {item} icon={icon} key={index}/>
          ))}

          </>
        );
  }

export default TransportValue