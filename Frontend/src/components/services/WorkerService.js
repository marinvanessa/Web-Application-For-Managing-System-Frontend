import axios from 'axios';

const WORKERS_API_URL = 'http://localhost:8081/workers';

const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
    }
}

class WorkerService {

    getWorkerWithExpensiveHalls() {
        return axios.get(WORKERS_API_URL + "/workersForExpensiveHalls");
    }

    getWorkerWithCheapHalls() {
        return axios.get(WORKERS_API_URL + "/workersForCheapHalls");
    }

    getAllWorkersInVacation() {
        return axios.get(WORKERS_API_URL + "/workersInVacation");
    }

    getAllWorkersThatEndsVacationBeforeReservations() {
        return axios.get(WORKERS_API_URL + "/workersEndsVacationBeforeReservations")
    }

    getAllAvailableWorkersForReservations() {
        return axios.get(WORKERS_API_URL + "/workersAvailableForAllReservations");
    }

    getWorkersByHallId(hallId) {
        return axios.get(WORKERS_API_URL + "/workersReservations/" + hallId);
    }

    getNoWorkersByHallId(hallID) {
        return axios.get(WORKERS_API_URL + "/hallsWorkers/" + hallID)
    }

    getNoHallsPerWorker() {
        return axios.get(WORKERS_API_URL + "/hallsPerWorker", options);
    }


    getAllWorkersByUserID(userId) {
        return axios.get(WORKERS_API_URL + "/all/" + userId);
    }

}
export default new WorkerService();