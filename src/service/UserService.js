import axios from 'axios';

const USER_API_GET_ALL_USER="http://localhost:8080/user/get/all";

class UserService{
    getUsers(){
        return axios.get(USER_API_GET_ALL_USER);
    }
}

export default new UserService()