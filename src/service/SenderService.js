import axios from "axios";

const CREATE_PICKUP_REQUEST="http://localhost:8080/user/addparcel";



class SenderService{

    addPickup(pickup){
        return axios.post(CREATE_PICKUP_REQUEST,pickup);
    }




}

export default new SenderService()