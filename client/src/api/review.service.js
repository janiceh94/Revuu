import apiClient from './axios.config';

const reviews = '/review';

const getAllReviews = () => {
    return apiClient.get(`${reviews}`);
}

const get = (id) => {
    return apiClient.get(`${posts}/${id}`);
}

const create = (data) => {
    return apiClient.post(`${reviews}`, data);
}

const update = (id, data) => {
    return apiClient.put(`${reviews}/${id}`);
}

const destroy = (id) => {
    return apiClient.delete(`${reviews}/${id}`);
}

export {
    getAllReviews, 
    get, 
    create,
    update, 
    destroy
}