/* global google */
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState, useEffect } from "react";

export default function Map(markers) {
    const [markers, setMarkers] = useState([]);
  
  
    const [selected, setSelected] = useState({
      lat: 7.465025999999999,
      lng: 79.86973119999999,
    });
    //console.log(selected);
    const renderMarkers = () => {
      return markers.map((location, index) => {
        return (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            label={`${index + 1}`}
          />
        );
      });
    };
  
    const { isLoaded, loadError } = useJsApiLoader({
      googleMapsApiKey: "AIzaSyCSPg-EKxxvO3YRJ-nMNTR2-mNQISqkz-k",
    });
  
    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';
    return (
      <>
      <GoogleMap
    zoom={15}
    center={selected}
    mapContainerClassName="map-container"
  >
    {renderMarkers()}
  </GoogleMap>
      </>
    );
  }