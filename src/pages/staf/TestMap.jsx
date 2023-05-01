import React, { useEffect, useState } from "react";
import axios from "axios";
import DriverService from "../../service/DriverService";

export default function TestMap() {
  const [parcels,setParcels] =useState([]);
  useEffect(()=> {
      loadParcels();
  },[]);
  const loadParcels= async ()=>{
      const result= await DriverService.getDriverLocation(1);
      setParcels(result.data);
      console.log(result.data);
  } ;


  let dis = "g";
  
  var config = {
    method: "get",
    //https://maps.googleapis.com/maps/api/distancematrix/json?origins=%7Bparcels.latitude%7D,%7Bparcels.longitude%7D%2C%20DC&destinations=New%20York%20City%2C%20NY&units=imperial&key=AIzaSyDwtBza38O5StjIz7dPbWDcX8BK-JSD2z0
    url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins={parcels.latitude},{parcels.longitude}%2C%20{parcels.latitude},{parcels.longitude}&destinations=New%20York%20City%2C%20NY&units=imperial&key=AIzaSyDwtBza38O5StjIz7dPbWDcX8BK-JSD2z0",
    headers: {},
  };
  const [selected, setSelected] = useState({ lat: "6.927079", lng: "79.861244" });

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data.rows));
      // console.log(response.data.rows);

      const elements = response.data.rows;
      dis=elements.map((element) => { 
        //console.log(element.elements[0].distance.text);
        dis = element.elements[0].distance.text;
        console.log(dis);
        setSelected({ lat: dis, lng: dis });
        return dis;
      });
    })
    .catch(function (error) {
      console.log(error);
    });

    const [details, setDetails] = useState({
      latitude: "",
      longitude: "",
    });


  return <div>TestMap 
    : {selected.lat}
    gaththa location: {parcels.latitude}
  </div>;
}
