import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useEffect, useState } from "react"

const ButtonLike = (variant) => {
    const {props, onChange, onToggle, toggle} = variant;

    const [icon, setIcon] = useState();
    const [toggleSet, setToggleSet] = useState(toggle)
    const [value, setValue] = useState(false);
    const [raitingStep, setRaitingStep] = useState();


    useEffect(()=>{
        toggleHandler();
        likeHandler();
    }, [value, toggle])

//Rendering Like/Dislike icon 

    const likeHandler = ()=>{
        if (props === 'like') {
            if (value === true){
                setIcon(<ThumbUpIcon fontSize='large'/>);
                setRaitingStep(0);
                setToggleSet({...toggleSet, buttonLike:false})
            } else {
                setIcon(<ThumbUpOffAltIcon fontSize='medium' /> );
                setRaitingStep(1);
                setToggleSet({...toggleSet, buttonLike:true})
            }
            
        } else {
           if (value === true){
            setIcon(<ThumbDownIcon fontSize='large'/>);
            setRaitingStep(0);
            setToggleSet({...toggleSet, buttonDislike:false})
            } else {
                setIcon(<ThumbDownOffAltIcon fontSize='medium'/> );
                setRaitingStep(-1);
                setToggleSet({...toggleSet, buttonDislike:true})
            }
        }
    }


// Toggle Likeicon (dislike) depending on the state of another icon (on/off state)

    const toggleHandler = ()=>{
        if (props === 'like'){
            if (value === true && toggle.buttonDislike === true){
                setValue(false)
                setToggleSet({...toggleSet, buttonLike:false})
            }
        }
        if (props === 'dislike'){
                if (value === true && toggle.buttonLike === true){
                    setValue(false)
                    setToggleSet({...toggleSet, buttonDislike:false})
                }
        }       
    }


    const clickHandler = () =>{
            setValue(!value); 
            onChange(raitingStep); 
            onToggle(toggleSet)
    }


    return (
        <IconButton color="primary" aria-label="like" value = {value} onClick={clickHandler}>
            {icon}
        </IconButton>
    )
}

export default ButtonLike;