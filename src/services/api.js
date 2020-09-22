import axios from 'axios';

const api = axios.create({
    baseURL: 'https://desafio-stilingue-backend.herokuapp.com/'
});



export default api;