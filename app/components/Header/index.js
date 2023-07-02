
import { metadata } from "@/app/layout"
import { useSelector} from "react-redux"
import HeaderTransport from "../HeaderTransport"
import GitHubIcon from '@mui/icons-material/GitHub';


const Header = () => {

    const transport = useSelector(state => state.changePage.transport.transportValue);


    return (
    <>
            <div className="header_title_container">
                <div className="header_title">
                    {metadata.title}
                </div> 
                <div className="header_title_description">
                <span>{metadata.description} &nbsp; </span> <GitHubIcon fontSize="small"/> <span>&nbsp; /speedo-ua</span>
                </div>   
            </div>
            <div className="header_transport_container">
            {transport !=='All' ? (<HeaderTransport/>) : ('')}
            </div>
 
    </>

    )
    
}

export default Header