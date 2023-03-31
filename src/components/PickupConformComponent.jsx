import React from 'react'
import { useLocation } from 'react-router-dom';

function PickupConformComponent() {
  const location=useLocation();
    console.log(location.state.pickup.cost);
    //console.log('pickup =>' +JSON.stringify());
  return (
    <div>
        PickUpFormComponent
    </div>
  )
}

export default PickupConformComponent
