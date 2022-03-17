import apiClient from './axios.config';

const comments = '/comments';

const create = (rid, data) => {
    return apiClient.post(`${comments}/${rid}`, data);
}

const update = (rid, cid, data) => {
    return apiClient.put(`${comments}/${rid}/${cid}`, data);
}

const destroy = (rid, cid) => {
    return apiClient.delete(`${comments}/${rid}/${cid}`);
}

export {
    create,
    update, 
    destroy
}