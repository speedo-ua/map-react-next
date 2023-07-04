import { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ButtonLike from '../ButtonLike';
import Rating from '@mui/material/Rating';

import BortNumber from '../BortNumber';


const TransportCard = ({data, icon}) => {
    const [valueRaiting, setValueRaiting] = useState(1);
    const [toggle, setToggle] = useState({
                                          buttonLike: false,
                                          buttonDislike: false
                                         });

    const transportType = useSelector(state => state.changePage.transport.transportType);

    //Raiting handle
    const handleChange = (value) => {
      if ((valueRaiting ===0 && value === -1 ) || (valueRaiting === 5 && value === 1)) {
          return
      } else setValueRaiting(valueRaiting+value);
    }

    // Toggle Likeicon depending on the state of Dislikeicon (on/off state)
    const toggleHandle = (tglLikeValues) =>{
              setToggle(tglLikeValues)
    }


    return (
        <Card sx={{ display: 'flex', m:1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography textAlign='center' fontWeight={'bold'} variant="h6" component="div">
              {icon} № {data.number}
            </Typography>

            <BortNumber number={data.bort_number}/>
            <Typography textAlign='center' variant="subtitle1" color="text.secondary" component="div">
              Current speed: {data.speed}
            </Typography>
          </CardContent>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m:2}}>
            <Box sx={{width: '100%', m:1, height:'50%', display: 'flex', justifyContent:'space-between'}}>
                <ButtonLike props = {'like'} onToggle={toggleHandle} toggle={toggle} onChange={handleChange}/>
                <ButtonLike props = {'dislike'} onToggle={toggleHandle} toggle={toggle} onChange={handleChange}/>
            </Box>
            <Box>
                <Rating name="read-only" value={valueRaiting} size="medium" readOnly />
            </Box>
          </Box>

        </Box>
      </Card>

    )
}
export default TransportCard;