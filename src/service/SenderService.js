import axios from "axios";

const CREATE_PICKUP_REQUEST="http://localhost:8080/user/addparcel";

const CREATE_CUSTOMER_REQUEST="http://localhost:8080/user/createCustomer";

    const KEY='https://maps.googleapis.com/maps/api/distancematrix/json?origins=7.457272,79.825382&destinations=6.845450,79.958389|7.463590,79.850640&key=AIzaSyDwtBza38O5StjIz7dPbWDcX8BK-JSD2z0';
    



class SenderService{

    addPickup(pickup){
        return axios.post(CREATE_PICKUP_REQUEST,pickup);
    }

    createCustomer(details){
        return axios.post(CREATE_CUSTOMER_REQUEST,details);
    }

    getMap(userProfile){
        return axios.get(KEY)                                                                                                                        

    }



}

export default new SenderService()