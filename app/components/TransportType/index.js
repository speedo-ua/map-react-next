import ButtonTransport from "../ButtonTransport";


const TransportType =() => {


    return (
        <>
            <div className="main_button">
                <ButtonTransport widthProps='30vw' heightProps='15vh' value = 'bus' />
            </div>
            <div className="main_button">
                <ButtonTransport widthProps='30vw' heightProps='15vh' value = 'tram' />
            </div>
            <div className="main_button">
                <ButtonTransport widthProps='30vw' heightProps='15vh' value = 'trol' />
            </div>
        </>

    )

}

export default TransportType;