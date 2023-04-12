import React, { useState } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer,useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 41.3851,
  lng: 2.1734,
};

const directionsServiceOptions = {
  origin: 'Chicago, IL',
  destination: 'Los Angeles, CA',
  waypoints: [
    { location: 'Joplin, MO' },
    { location: 'Oklahoma City, OK' },
    { location: 'Amarillo, TX' },
    { location: 'Gallup, NM' },
    { location: 'Flagstaff, AZ' },
    { location: 'Las Vegas, NV' },
    { location: 'Bakersfield, CA' },
    { location: 'Los Angeles, CA' },
  ],
  travelMode: 'DRIVING',
};

export default function CheckOut() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:"AIzaSyCAALkJistFQz8Q9Rm5qZro60hvjbcCvmM",
    
  });
    
  if(!isLoaded) return <div> looading....</div>;
  return <Map />;
}

  function Map(){
  const [response, setResponse] = useState(null);

  const directionsCallback = (res) => {
    
    if (res !== null) {
      
      console.log(res);
      //setResponse(res);
      
    }
    else{
      setResponse(null);
    }
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}
    >
      <DirectionsRenderer
        options={directionsServiceOptions}
        callback={directionsCallback}
      />
      
        {<DirectionsService
          options={{
            directions: response,
          }} 
          
        />}
      
    </GoogleMap>
  );
}

