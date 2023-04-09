import './globals.css'
import { Form } from 'react-bootstrap';
import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";


export default function DevelopEx() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:"AIzaSyCAALkJistFQz8Q9Rm5qZro60hvjbcCvmM",
    libraries: ["places"],
  });

  

  if(!isLoaded) return <div> looading....</div>;
  return <Map />;
  

}

function Map(){
  const center =useMemo(()=>({lat:44, lng: -80}),[]);
  const [selected,setSelected] = useState(null);

  const [coordinates, setCoordinates] = useState({lat:6.927079, lng:79.861244});
  const handleDragEnd =(e) => {
  setCoordinates({lat:e.latLng.lat(), lng:e.latLng.lng()});
  console.log(coordinates);
  }

  return (
    <>
      <div className="places-container">
        
        
        
        
         <PlacesAutocomplete setSelected={setSelected}  />
      </div>

      <GoogleMap 
        zoom={10} 
        center={selected}
        mapContainerClassName="map-container">
            
            {selected &&  <Marker position={selected} onDragEnd={handleDragEnd} draggable={true} />} 
      </GoogleMap>
   </>
  );
}



const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

   const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();

      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setSelected({ lat, lng });
  }; 
              
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className='="combobox-input'
        placeholder="Search an addrress"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" && 
              data.map (({place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
                ))}
          </ComboboxList>
        </ComboboxPopover>
    </Combobox>
    
    
    
      

  
  );
};

