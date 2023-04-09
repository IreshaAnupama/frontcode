

  import React from 'react'
  import { GoogleMap, useJsApiLoader,Marker,useLoadScript } from '@react-google-maps/api';
  import { useState } from 'react';

  const containerStyle = {
    width: '100%',
    height: '800px'
  };



  function MyComponent() {
    const { isLoaded } = useJsApiLoader({
      id: 'my-project-cs304-371916',
      googleMapsApiKey: "AIzaSyD0Zw3uHJdRndDSN5OnCa1aflSbltWKtzg"
    })

    const [map, setMap] = React.useState(null)

    const [coordinates, setCoordinates] = useState({lat:6.927079, lng:79.861244});

    const handleDragEnd =(e) => {
      setCoordinates({lat:e.latLng.lat(), lng:e.latLng.lng()});
      console.log(coordinates);
    }

    const onLoad = React.useCallback(function callback(map) {
      
      const bounds = new window.google.maps.LatLngBounds(coordinates);
      map.fitBounds(bounds);

      setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])

    

    
    return isLoaded ? (
      <div>
        <input
          id="pac-input"
          class="controls"
          type="text"
          placeholder="Search Box"
        />
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinates}
          zoom={9}
          onLoad={onLoad}
          onUnmount={onUnmount}
          
        >
          { <Marker
            position={coordinates}
            onDragEnd={handleDragEnd}
            draggable={true}/>
        /* Child components, such as markers, info windows, etc. */
        }
        
        </GoogleMap>
      </div>
    ) : <></>
  }

  export default React.memo(MyComponent)