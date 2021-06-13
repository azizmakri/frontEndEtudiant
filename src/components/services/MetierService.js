import axios from 'axios';

const METIER_API_BASE_URL = "http://localhost:8080/api/v1/metiers";

class MetierService {

    getMetiers(){
        return axios.get(METIER_API_BASE_URL);
    }

    createMetier(metier){
        return axios.post(METIER_API_BASE_URL, metier);
    }

    getMetierById(metierId){
        return axios.get(METIER_API_BASE_URL + '/' + metierId);
    }

    updateMetier(metier, metierId){
        return axios.put(METIER_API_BASE_URL + '/' + metierId, metier);
    }

    deleteMetier(metierId){
        return axios.delete(METIER_API_BASE_URL + '/' + metierId);
    }
    
}

export default new MetierService()