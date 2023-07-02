import HomeIcon from '@mui/icons-material/Home';
import TramIcon from '@mui/icons-material/Tram';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';


export const handlers = {
    iconHandlerTransport: (value) =>{
        if (value === 'bus') return <DirectionsBusIcon fontSize="large"/>;
        if (value === 'tram') return <TramIcon fontSize="large"/>;
        if (value === 'trol') return <NoCrashIcon fontSize="large"/>;
        if (value === 'home') return <HomeIcon fontSize='large'/>
    }, 
    
    iconHandlerMap: (value)=>{
                    if (value === 'bus') return './img/bus_50.png'
                    if (value === 'tram') return './img/tram_50.png'
                    if (value === 'trol') return './img/trol_50.png'
    },
    

}