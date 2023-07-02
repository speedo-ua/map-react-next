import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MapIcon from '@mui/icons-material/Map';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '@/app/features/changeStatesSlice';

export default function TheBottomNavigation() {

  const currentPage = useSelector ((state)=>state.changePage.pageValue);
  const dispatch = useDispatch();
 

  return (
    <Box >
      <BottomNavigation
        showLabels
        value={currentPage}
        onChange={(event, newValue) => {
          dispatch(setPage(newValue));
          
        }}
        sx={{height: '10vh'}}
      >
        <BottomNavigationAction label="Transport" icon={<DirectionsBusIcon />} value={'Transport'}/>
        <BottomNavigationAction label="Map" icon={<MapIcon />} value={'Map'}/>
      </BottomNavigation>
    </Box>
  );
}