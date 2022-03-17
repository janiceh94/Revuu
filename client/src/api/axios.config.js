import axios from 'axios';

const backendAPI = 'http://revuu.herokuapp.com/api';

let user = JSON.parse(localStorage.getItem('user'))

const apiClient = axios.create({
    baseUrl: `${backendAPI}`,
    header: {
        'Content-type': 'application/json',
        authorization: `Bearer ${user}`
    },
});

export default apiClient;