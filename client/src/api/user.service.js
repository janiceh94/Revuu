import apiClient from './axios.config';

const user = 'api/user';

const get = (id) => {
    console.log(id)
    return apiClient.get(`${user}/${id}`);
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