import apiClient from "./axios.config";

const auth = 'api/auth';
const users = 'api/user';

const register = (email, password) => {
    return apiClient    
        .post(`${auth}/register`, {email, password})
        .then((res) => {
            // console.log("result:",res);
        })
}

const login = (email, password) => {
    try {
        return apiClient    
            .post(`${auth}/login`, {email, password})
            .then((res) => {
                // console.log(res)
                if(res.data.token){
                    localStorage.setItem('user', JSON.stringify(res.data.token))
                }
                return res.data.token;
            })
        }catch (err) {
            console.log(err)
    }
}

const currentUser = () => {
    let user = localStorage.getItem("user");
    return JSON.parse(user)
}

const getProfile = () => {
    return apiClient.get(`${users}/profile`)
}

const logout = () => {
    localStorage.removeItem("user")
}

export {
    register, 
    login, 
    currentUser, 
    getProfile, 
    logout
}