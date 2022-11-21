import axios from "axios";

const URL = '//localhost:5000/'

function aplyDefaultFormatToken(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
  }

// Requisições do login

function login (body) {
    const promise = axios.post(`${URL}`, body)
    return promise
}

//Requisição de registro

function register (body) {
    const promise = axios.post(`${URL}register`, body)
    return promise
}

//Requisições de transação

function getMoviments (token) {
    const tokenConfig = aplyDefaultFormatToken(token)
    const promise = axios.get(`${URL}transactions`, tokenConfig)
    return promise
}

function postMoviment (body, token) {
    const tokenConfig = aplyDefaultFormatToken(token)
    const promise = axios.post(`${URL}transactions`, body, tokenConfig)
    return promise
}


const api = {
    login,
    register, 
    getMoviments,
    postMoviment
}

export default api