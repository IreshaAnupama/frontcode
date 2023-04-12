/*import './globals.css'
import { useNavigate } from "react-router-dom";
import { Container, Form } from 'react-bootstrap';
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
import {Button, Row, Col} from 'react-bootstrap';


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
  const [selected,setSelected] = useState({lat:6.927079, lng: 79.861244});

  const [coordinates, setCoordinates] = useState({lat:6.927079, lng:79.861244});
  const handleDragEnd =(e) => {
  setCoordinates({lat:e.latLng.lat(), lng:e.latLng.lng()});
  console.log(coordinates);
  }

  const navigate = useNavigate();
  const success="location saved";

  const handleClick = () => {
    navigate("/signing", { state:{data: coordinates,success} });
  };

  return (
    <>
      <div className="places-container">
        <Container>
            <Row>
              <Col>
                <PlacesAutocomplete setSelected={setSelected}  />
              </Col>
              <Col>
                <Button onClick={handleClick} variant="primary" type="submit">
                  Save Location
                </Button>
              </Col>
            </Row>
         </Container>
      </div>

      <GoogleMap 
        zoom={15} 
        center={selected}
        mapContainerClassName="map-container">
            
            {selected &&  <Marker position={selected} onCursorChanged={handleDragEnd} draggable={true} />} 
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
*/

