import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
const YOUR_API_KEY = "";//"AIzaSyCSPg-EKxxvO3YRJ-nMNTR2-mNQISqkz-k";

function WayPoint() {
  const [parcels,setParcels] =useState([]);
  const [parcel2,setParcel2] =useState([]);
  useEffect(()=> {
      loadParcels();
  },[]);
  const loadParcels= async ()=>{
      const result= await axios.get("http://localhost:8080/user/2/getCourierLocation");
      const result2= await axios.get("http://localhost:8080/user/2/getCourierParcelsLocation")
      setParcels(result.data);
      setParcel2(result2.data);
      console.log(result.data);
      console.log(result2.data);
  } ;

fetch('https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': YOUR_API_KEY,
    'X-Goog-FieldMask': 'originIndex,destinationIndex,duration,distanceMeters,status,condition'
  },
  body: JSON.stringify({
    "origins": [
      {
        "waypoint": {
          "location": {
            "latLng": {
              "latitude": 37.420761,
              "longitude": -122.081356
            }
          }
        },
        "routeModifiers": { "avoid_ferries": true}
      },
      {
        "waypoint": {
          "location": {
            "latLng": {
              "latitude": 37.403184,
              "longitude": -122.097371
            }
          }
        },
        "routeModifiers": { "avoid_ferries": true}
      }
    ],
    "destinations": [
      {
        "waypoint": {
          "location": {
            "latLng": {
              "latitude": 37.420999,
              "longitude": -122.086894
            }
          }
        }
      },
      {
        "waypoint": {
          "location": {
            "latLng": {
              "latitude": 37.383047,
              "longitude": -122.044651
            }
          }
        }
      }
    ],
    "travelMode": "DRIVE",
    "routingPreference": "TRAFFIC_AWARE"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));


  return (
    <div>WayPoint</div>
  )
}

export default WayPoint