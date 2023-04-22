import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TestMap() {


  let dis = "g";

  var config = {
    method: "get",
    url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Washington%2C%20DC&destinations=New%20York%20City%2C%20NY&units=imperial&key=AIzaSyDwtBza38O5StjIz7dPbWDcX8BK-JSD2z0",
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

  return <div>TestMap 
    : {selected.lat}
  </div>;
}
