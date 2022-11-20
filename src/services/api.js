import axios from "axios";

const URL = 'localhost:5000'

// Requisições do login

function login (body) {
    const promise = axios.post(`${URL}/`, body)
    return promise
}

const api = {
    login
}

export default api