import axios from "axios";

const CREATE_DRIVER='http://localhost:8080/user/register';
    
    
    

class DriverService{
    createDriver(driver){
        const token=axios.post(CREATE_DRIVER,driver);
        return token;
    }

}

export default new DriverService()







