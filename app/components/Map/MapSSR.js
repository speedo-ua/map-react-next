'use client'
import {useState, useEffect} from 'react'
import { createData } from "@/app/services/createData";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { Icon } from 'leaflet'
import { useSelector } from "react-redux"
import { handlers } from '@/app/features/handlers';


const MapSSR = () => {

  const [bus, setBus] = useState([])
  const [icon, setIcon] = useState('')
  const [mylocation, setMylocation] = useState([48.46867262693987, 35.05030991076834])
  const transport = useSelector(state => state.changePage.transport);
  const { iconHandlerMap } = handlers;
  const data = createData(transport);

  useEffect(()=>{
      myPosition()
      setIcon(iconHandlerMap(transport.transportType))
    }, [])

    useEffect(()=>{
      if (transport.transportValue !=='All') {
        setTimeout(() => {
        dataRequest();
        myPosition();
        }, 5000);
      }
    }, [bus])


 const dataRequest = () =>{
        data.then(res=>{
          setBus(res)
          });
    }

  const myPosition = () => {
    const successCallback = (position) =>{
      setMylocation([position.coords.latitude, position.coords.longitude])
    }
    navigator.geolocation.getCurrentPosition(successCallback)
  }

  const iconTransport = new Icon({
    iconUrl:icon,
    iconSize: [30,30]
  })

  const iconMyLocation = new Icon({
    iconUrl:'./img/mylocation.png',
    iconSize: [30,30]
  })


  if (transport !== 'All' && bus.length>0){

    return (
      <MapContainer center={[48.46867262693987, 35.05030991076834]} zoom={13} scrollWheelZoom={false} style={{height: '80vh'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mylocation} icon={iconMyLocation}> </Marker>
        {bus.map((elem, index)=>{
            return (
            <Marker key={index} position={[elem.lat, elem.lon]} icon={iconTransport}>
                <Popup>
                 {elem.bort_number}
                </Popup>
            </Marker>
            )
          }
        )}
      </MapContainer>

    )
  } 
  else return (
      <main>
        <MapContainer center={[48.46867262693987, 35.05030991076834]} zoom={13} scrollWheelZoom={false} style={{height: '80vh'}}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            <Marker position={mylocation} icon={iconMyLocation}>
            </Marker>
        </MapContainer>
      </main>
    )
}

export default MapSSR;