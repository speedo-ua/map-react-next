import {useEffect, useRef, useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from "react-redux"
import {setTransport, setTransportType} from '@/app/features/changeStatesSlice';
import SnackbarErrors from "../Snackbar/Snackbar";



const InputSearch = ({data}) => {
    
    const [type, setType] = useState('')
    const [placeholder, setPlaceholder] = useState('Choose Type first')
    const [disabledInput, setDisabledInput] = useState(true)
    const [error, setError] = useState({text:'error',
                                        color: 'error',
                                        open: false
                                        })
    const inputRef = useRef();
    const submitRef = useRef();
    const dispatch = useDispatch();
    const regExpBus = /^\d{1,3}[aAbBаАбБгГ]?$/;
    const regExpMun = /^\d{1,2}[aAbBаАбБ]?$/;
    const regExpSubm = /.{4}/
    

    useEffect(()=>{
        inputRef.current.focus()

    }, [type, data, error])
    
    const handleChange = (e) =>{
        setType(e.target.value);
        setDisabledInput(false)
        setPlaceholder('Enter number')
          
    }

    const handleInput = ()=>{
      const res = regExpSubm.test(inputRef.current.value)
      if (res) submitRef.current.focus()
    }

    const handleSubmit = ()=>{
      const resBus = regExpBus.test(inputRef.current.value)
      const resMun = regExpMun.test(inputRef.current.value)

      if (type==='bus' && resBus || type!=='bus' && resMun ){
        if (data.length===0){
          return setError({text: 'Nothing found. Try another Type and/or Number', color:'warning', open: true})
        } else {
        dispatch(setTransport(inputRef.current.value));
        dispatch(setTransportType(type))
        }
      }
      else return setError({text: 'Please enter 1-3 digits first and additionally may be a letter "A" or "Б", or "Г" ', color:'error', open: true})
    }

    const toggleError = (value) =>{
      setError({...error, open:value})
}
    
  return (
    <>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:'100%'}}
    > 
    <Box sx={{display:'flex', width:'30%'}}>
        <FormControl sx={{width:'100%'}} >
        <Select
          displayEmpty
          id="transport-select-label"
          value={type}
          onChange={handleChange}
        >
          <MenuItem disabled value=''>Type</MenuItem>
          <MenuItem value='bus'>Bus</MenuItem>
          <MenuItem value='tram'>Tram</MenuItem>
          <MenuItem value='trol'>Trol</MenuItem>
        </Select>
      </FormControl>
    </Box>
     
      <InputBase
        sx={{ ml: 3, flex: 1, WebkitAppearance: 'none'}}
        placeholder={placeholder}
        inputProps={{ disabled: disabledInput, min:1, max:200, 'aria-label': 'search google maps' }}
        inputRef={inputRef}
        onChange={handleInput}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton ref={submitRef} onClick={handleSubmit} type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    <SnackbarErrors error={error} onToggle={toggleError}/>
    </>
  );
}

export default InputSearch;