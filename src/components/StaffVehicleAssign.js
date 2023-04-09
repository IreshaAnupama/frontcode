import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';


function StaffVehicleAssign() {

    const [parcels,setParcels] =useState([]);

    useEffect(()=> {
        loadParcels();
    },[]);

    const loadParcels= async ()=>{
        const result= await axios.get("http://localhost:8080/user/staffVehicle");

        setParcels(result.data);
        console.log(result);
    } ;

    const[vehicle,setVehicle]=useState({
      pickupVehicleNo:"",
      deliveryVehicleNo:""
    });
    const {pickupVehicleNo,deliveryVehicleNo}=vehicle
    const onInputChange=(e) => {
      setVehicle({...vehicle,[e.target.name]:e.target.value});
    };





    const onSubmit =(name)=>async (e)=>{
      e.preventDefault();
      const id=name.parcel.parcelId;
      const result=await axios.patch("http://localhost:8080/user/"+id,vehicle).then(() => window.location.reload());
     
      console.log(vehicle);
     
      
     
    };
  return (
    <div>
            
         <Table striped bordered hover>
        <thead>
          <tr>
            <th>Parcel ID</th>
            <th>Sender Postal code</th>
            <th>Receiver Postal Code</th>
            <th>Length</th>
            <th>Width</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Vehice type</th>
            <th>Pick up Vehicle</th>
            <th>Send Vehicle</th>
          </tr>
        </thead>
        <tbody>
            {parcels.map((parcel,index)=>(
              
              
                <tr>
                    
                
                <td>{parcel.parcelId}</td>
                <td>{parcel.senderPostalCode}</td>
                <td>{parcel.receiverPostalCode}</td>
                <td>{parcel.length}</td>
                <td> {parcel.width} </td>
                <td> {parcel.height} </td>
                <td> {parcel.weight} </td>
                <td> {parcel.vehicleType} </td>
                <td> {parcel.pickupVehicle}
                <Form> 
                      <Form.Control type="text" 
                      placeholder="Pickup Vehicle number" 
                      name="pickupVehicleNo"
                      value={parcel.pickupVehicleNo}
                      onChange={(e) => onInputChange(e)}/>
                      <Form.Text className="text-muted"></Form.Text>
                      </Form> </td>
                <td> {parcel.deliveryVehicle}
                <Form > 
                      <Form.Control type="text" 
                      placeholder="Delevery Vehicle number" 
                      name="deliveryVehicleNo"
                      value={parcel.deliveryVehicleNo}
                      onChange={(e) => onInputChange(e)}/>
                      <Form.Text className="text-muted"></Form.Text>
                      </Form>
  
                 </td>
                 <td> <button type="submit" className="btn btn-outline-primary" onClick={onSubmit({parcel})} >
              Submit
            </button> </td>
                </tr>
              

            ))}


              </tbody>
            </Table>
            
        </div>
  )
}

export default StaffVehicleAssign