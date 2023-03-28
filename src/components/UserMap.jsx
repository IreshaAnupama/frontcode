import React from 'react'
import { GoogleMap, useJsApiLoader,Marker,useLoadScript } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '800px'
};

const center = {
  lat: 7.285039899999999,
  lng: 80.6169968,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'my-project-cs304-371916',
    googleMapsApiKey: "AIzaSyD0Zw3uHJdRndDSN5OnCa1aflSbltWKtzg"
  })

  const [map, setMap] = React.useState(null)

  const [coordinates, setCoordinates] = useState({lat:37.7749, lng:-122.4194});

  const handleDragEnd =(e) => {
    setCoordinates({lat:e.latLng.lat(), lng:e.latLng.lng()});
  }

  const onLoad = React.useCallback(function callback(map) {
    
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        
      >
        { <Marker
          position={center}
          onDragEnd={handleDragEnd}
          draggable={true}
      
    />/* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)