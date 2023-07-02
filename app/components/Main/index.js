import Map from "../Map"
import Transport from "../Transport"
import { useSelector } from "react-redux"


const Main = () => {
    const currentPage = useSelector(state => state.changePage.pageValue);
    const transport = useSelector(state => state.changePage.transport);

        if (currentPage === 'Map') {
          return <Map/>
        }
        else return (
            <Transport transport={transport}/> 
        )     
}

export default Main;