
import { metadata } from "@/app/layout"
import { useSelector} from "react-redux"
import HeaderTransport from "../HeaderTransport"


const Header = () => {

    const transport = useSelector(state => state.changePage.transport.transportValue);


    return (
    <>
    <header>
            <div className="header_title">
                {metadata.title}    
            </div>
            <div className="header_transport">
            {transport !=='All' ? (<HeaderTransport/>) : ('')}
            </div>
    </header>
 
    </>

    )
    
}

export default Header