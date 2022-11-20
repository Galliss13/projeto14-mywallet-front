import axios from "axios";

const URL = 'localhost:5000'

function aplyDefaultFormatToken(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
  }

// Requisições do login

function login (body) {
    const promise = axios.post(`${URL}/login`, body)
    return promise
}

//Requisição de registro

function register (body) {
    const promise = axios.post(`${URL}/register`, body)
    return promise
}

const api = {
    login,
    register
}

export default api