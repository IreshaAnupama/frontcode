import axios from "axios";

const CREATE_DRIVER="http://localhost:8080/user/createDriver";
    
    
    

class DriverService{
    createDriver(driver){
        return axios.post(CREATE_DRIVER,driver);
    }

}

export default new DriverService







