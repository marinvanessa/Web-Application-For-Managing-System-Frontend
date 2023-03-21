import axios from 'axios';

const RESERVATIONS_API_URL = 'http://localhost:8081/reservations';

const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
    }
}

class ReservationService {

    getExpensiveReservations() {
        return axios.get(RESERVATIONS_API_URL +"/expensiveReservations");
    }

    getCheapReservations() {
        return axios.get(RESERVATIONS_API_URL +"/cheapReservations");
    }

    getAllReservationByDimension() {
        return axios.get(RESERVATIONS_API_URL + "/dimensionEqualThanMax");
    }

    getAllReservationsWithoutGuests() {
        return axios.get(RESERVATIONS_API_URL + "/noGuests");
    }

    getAllConfirmedReservations(value) {
        return axios.get(RESERVATIONS_API_URL + "/confirmedReservations/" + value);
    }

    getReservationsByUser(userId) {
        return axios.get(RESERVATIONS_API_URL + "/all/" + userId);
    }

    deleteReservation(id) {
        axios.delete( RESERVATIONS_API_URL + '/delete/' + id, options).then(
            res => {
                window.location.reload();
            }
        )
    }

    confirmReservation(id) {
        axios.put(RESERVATIONS_API_URL + "/confirm/" + id, options).then(
            res => {
                sessionStorage.setItem("reservation_id", id);
                window.location.reload();
            }
        )
    }

    editReservation(id, description, reservationDate, time) {
        axios.put(RESERVATIONS_API_URL + "/edit/" + id, {
            "description": description,
            "reservationDate": reservationDate,
            "time": time
        }, options).then(res => {
            window.location.reload();
        })
    }

    addReservation(description, reservationDate, time, hall, userId) {
        axios.post(RESERVATIONS_API_URL, {
            "description": description,
            "reservationDate": reservationDate,
            "time": time,
            "hall": {
                "id": hall
            },
            "user" : {
                "id": userId
            },
        }, options).then(res => window.location.reload())
    }
}
export default new ReservationService();