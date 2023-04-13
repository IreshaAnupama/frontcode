import { DistanceMatrixService } from '@react-google-maps/api';
import { useState } from 'react';
import { google } from '@react-google-maps/api';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Button } from 'react-bootstrap';
import axios from 'axios';

function Imageexample() {

  //https://cros-anywhere.herokuapp.com/
  //Access-Control-Allow-Origin:

  function handleClick(){
    const URL='https://maps.googleapis.com/maps/api/distancematrix/json?origins=7.457272,79.825382&destinations=6.845450,79.958389|7.463590,79.850640&key=AIzaSyCAALkJistFQz8Q9Rm5qZro60hvjbcCvmM';
    axios.get(URL)
    .then(response=>{
      console.log(response);
    })
    .catch(error => {
      console.log(error.message);
    });
    

  }
  return (
    <div>Imageexampl
      e
      <Button className="btn btn-success" onClick={handleClick}> save location</Button>
   :</div>
  )
}

export default Imageexample