import axios from 'axios';

const GUESTS_API_URL = 'http://localhost:8081/guests';

const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
    }
}
class GuestService {

    getNoOfGuests(reservationId) {
        return axios.get(GUESTS_API_URL + "/noGuests/" + reservationId);
    }

    getAllGuestsByReservationID(reservationId) {
        return axios.get(GUESTS_API_URL + "/" + reservationId);
    }

    deleteGuest(id) {
        axios.delete( GUESTS_API_URL + '/delete/' + id, options).then(
            res => {
                window.location.reload();
            }
        )
    }

    addGuest(firstName, lastName, phone_number, covid_certification, reservationId) {
        axios.post(GUESTS_API_URL, {
            "firstName": firstName,
            "lastName": lastName,
            "phone_number": phone_number,
            "covid_certification": covid_certification,
            "reservation" : {
                "id": reservationId
            },
        }, options).then(res => window.location.reload())
    }

    editGuest(guestId, firstName, lastName, phone_number) {
        axios.put(GUESTS_API_URL + "/" + guestId, {
            "firstName": firstName,
            "lastName": lastName,
            "phone_number": phone_number
        }, options).then(res => {
            window.location.reload();
        })
    }

}
export default new GuestService();
