import CircularProgress from '@mui/material/CircularProgress';


const Loader = () =>{
    return ( 
                <div className="main_container">
                        <CircularProgress color="inherit" size={80} />
                </div>
    )
}

export default Loader;