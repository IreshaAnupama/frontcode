/*import { DistanceMatrixService } from '@react-google-maps/api';
import { useState } from 'react';
import { google } from '@react-google-maps/api';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Button } from 'react-bootstrap';
import React,{useEffect,useState} from 'react'
import axios from 'axios';




function Imageexample() {
  const [parcels,setParcels] =useState([]);

  //https://cros-anywhere.herokuapp.com/
  //Access-Control-Allow-Origin:
  const loadParcels= async ()=>{
    const result= await axios.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins=7.457272,79.825382&destinations=6.845450,79.958389|7.463590,79.850640&key=AIzaSyDwtBza38O5StjIz7dPbWDcX8BK-JSD2z0");
    setParcels(result.data);
    console.log(result);
} ;

 /* function handleClick(){
  
const listUsers = async () => {
  try {
    const res = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=7.457272,79.825382&destinations=6.845450,79.958389|7.463590,79.850640&key=AIzaSyDwtBza38O5StjIz7dPbWDcX8BK-JSD2z0');
    console.log(res.data.data);
  } catch (err) {
    console.error(err);
  }
};
listUsers();
  }

  /*function handleClick(){
    const URL='https://maps.googleapis.com/maps/api/distancematrix/json?origins=7.457272,79.825382&destinations=6.845450,79.958389|7.463590,79.850640&key=AIzaSyDwtBza38O5StjIz7dPbWDcX8BK-JSD2z0';
    const res =await axios.get(URL);
    console.log(res);

  }*/
  /*

  var axios = require('axios');
  function mapc(){
var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver%20BC%7CSeattle&destinations=San%20Francisco%7CVictoria%20BC&mode=bicycling&language=fr-FR&key=AIzaSyDwtBza38O5StjIz7dPbWDcX8BK-JSD2z0',
  headers: { }
};


axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
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
*/