import axios from "axios";

const CREATE_DRIVER='http://localhost:8080/user/register';

const GET_LOCATION='http://localhost:8080/user/1/getCourierLocation';
    
    
    

class DriverService{
    createDriver(driver){
        const token=axios.post(CREATE_DRIVER,driver);
        return token;
    }
    getDriverLocation(id){
        return axios.get(GET_LOCATION,id);
    }

}

export default new DriverService()







