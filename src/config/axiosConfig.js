import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/decplmax/v1/api',
});

export default instance;
