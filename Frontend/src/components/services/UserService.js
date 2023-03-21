import axios from 'axios';

const USER_API_URL = 'http://localhost:8081/user';

const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
    }
}

class UserService {
    getAllUsers() {
        return axios.get(USER_API_URL + "/all", options);
    }
    getUserByEmail(email) {
        return axios.get(USER_API_URL + "/" + email, options)
    }

}
export default new UserService();