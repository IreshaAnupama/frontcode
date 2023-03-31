import React from 'react'
import { useLocation } from 'react-router-dom';

function PickupConformComponent() {
  const location=useLocation();
  //const parcel=location.state.pickup;
    console.log(location.state.pickup.cost);
    console.log('location.state.pickup=>' +JSON.stringify());
  return (
    <div>
        utdcujgvb
    </div>
  )
}

export default PickupConformComponent
