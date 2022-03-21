import apiClient from './axios.config';

const user = 'api/user';

const get = (data) => {
    return apiClient.get(`${user}/profile`, data);
}

const update = (id, data) => {
    return apiClient.put(`${user}/${id}`, data);
}

const destroy = (id) => {
    return apiClient.delete(`${user}/${id}`);
}

export {
    get, 
    update, 
    destroy
}