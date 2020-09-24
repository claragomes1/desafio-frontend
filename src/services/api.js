import axios from 'axios';

const api = axios.create({
    baseURL: 'http://desafio-clara-com.umbler.net/'
});



export default api;