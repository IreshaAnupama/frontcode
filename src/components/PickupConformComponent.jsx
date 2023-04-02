import React from 'react'
import SenderService from '../service/SenderService';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function PickupConformComponent() {
  const location=useLocation();
  const parcel=location.state.pickup;
   // console.log(location.state.pickup.cost);
   // console.log('location.state.pickup=>' +JSON.stringify());
   console.log(parcel);
    let deleveryCost;

    if(parcel.senderDistrict===parcel.receiverDistrict){
      deleveryCost=150;
  }else{
    deleveryCost=250;
  }

    const newParcel={


        pickupDate: parcel.pickupDate,
        timeFrom: parcel.timeFrom,
        timeTo: parcel.timeTo,
        postMethod: parcel.postMethod,
        vehicleType: parcel.vehicleType,
        paymentType: parcel.paymentType,
        specialNote: parcel.spetialNote,
        parcelCost: parcel.cost,
        deleveryCost:deleveryCost,

      senderName: parcel.senderName, 
      senderEmail: parcel.senderEmail,
      senderPhoneNo: parcel.senderPhoneNo,
      senderAddress: parcel.senderAddress,
      senderCity: parcel.senderCity,
      senderDistrict: parcel.senderDistrict,

          receiverPhoneNo: parcel.receiverPhoneNo,
          receiverName: parcel.receiverName,
          receiverAddress: parcel.receiverAddress,
          receiverDistrict: parcel.receiverDistrict,
          receiverCity: parcel.receiverCity,
        

    }

    let savePickup=(e) => {
      e.preventDefault();
      SenderService.addPickup(newParcel).then(res =>{
        console.log("savePickup");
    }  )};

   // SenderService.addPickup(newParcel).then(res =>{
      console.log(newParcel);
    

      
        //this.props.navigate("/pickupConformComponent",{state:{parcel}}) 
    //});

  
  return (
    <div>
        PickUpFormComponent
        <Button className="btn btn-success" onClick={savePickup}> Check Out
      </Button>
    </div>
  )
}

export default PickupConformComponent
