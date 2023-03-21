import axios from 'axios';

class AuthenticationService {

    registerUser(firstName, lastName, email, password) {
        axios.post('http://localhost:8081/register', {
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'password': password

        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

}
export default new AuthenticationService();