import axios from 'axios';


const HALL_API_URL = 'http://localhost:8081/halls';

const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
    }
}
class HallService {

    getAllHallsWithReservations() {
        return axios.get(HALL_API_URL + "/allHallsWithReservations");
    }

    getAllHalls() {
        return axios.get(HALL_API_URL + "/all", options);
    }

}
export default new HallService();
