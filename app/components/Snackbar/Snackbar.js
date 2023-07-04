import {useEffect, useState, forwardRef} from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import zIndex from '@mui/material/styles/zIndex';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


 function SnackbarErrors({error, onToggle}) {
  const [open, setOpen] = useState(error.open);

  useEffect(()=>{
    setOpen(error.open)
  }, [error.open])


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    onToggle(false)
  };

  console.log(open)

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar sx={{zIndex:'100', mb:'10vh'}} open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity={error.color} sx={{ width: '100%'}}>
          {error.text}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default SnackbarErrors