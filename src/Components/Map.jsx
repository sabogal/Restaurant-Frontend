import React from 'react'
import {
    GoogleMap,
    LoadScript,
    Polygon,
    InfoWindow,
    Marker,
  } from "@react-google-maps/api";
import { googleMapsApiKey } from './urls';
const Map = (props) => {
    const mapStyles = {
        height: '700px',
        width: '100%',
      };
    
      const defaultCenter = {
        lat: 3.386786,
        lng: -76.537602,
      };
    const info = props.info;
    console.log(info);
  return (

      <>
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
         mapContainerStyle={mapStyles}
         zoom={5}
         center={defaultCenter}
          
          >
            {info.map((data, index) => (
              <React.Fragment key={data.id}>
                <Marker
            key={index}
            position={{ lat: data.location.lat, lng: data.location.lng }}
            label={`${index + 1}`}  // Opcional: agregar etiquetas a los marcadores
          />
                
              </React.Fragment>
            ))}
          </GoogleMap>
        </LoadScript> 
      </>
    
  )
}

export default Map
