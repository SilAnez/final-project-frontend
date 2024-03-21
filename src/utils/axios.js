import axiosDefault from 'axios';
import store from '../store';

const axios = axiosDefault.create({
    baseURL: 'https://hotels-api.academlo.tech'
});

axios.interceptors.request.use(function (config) {
    const token = store.getState().app.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default axios;
