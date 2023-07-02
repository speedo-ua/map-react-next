import React from 'react';
import ButtonTransport from '../ButtonTransport';
import TransportCard from '../TransportCard';


const TransportValue = ({data, icon}) => {

  return (
          <>
          <ButtonTransport value = 'home'/>
          {data.map((item, index) => (
            <TransportCard data = {item} icon={icon} key={index}/>
          ))}

          </>
        );
  }

export default TransportValue