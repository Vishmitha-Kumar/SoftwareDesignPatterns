import axios, { Axios } from 'axios';
const baseURL = 'http://localhost:8080/api';
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
const Register = (name, email, password, role) => axiosInstance.post(`${baseURL}/v1/auth/register`, {name, email, password, role});

const LoginData = (email, password) => axiosInstance.post('/v1/auth/authenticate', {email, password});

const getHalls=()=>axiosInstance.get('/hall/getAlls');

const addhalls=(hallname,description,location,organiser,contact,vegPrice,nonveg,reviews,type,halltype,guestRange,priceRange)=>
    axiosInstance.post('/hall/addHalls',{hallname,description,location,organiser,contact,
        hallDetails:{
            vegPrice,
            nonveg,
            reviews,
            guestRange,priceRange
        },
    type,halltype});

const deleteHall=(hallId)=>axiosInstance.delete(`/hall/deleteHall/${hallId}`)
const updateHall=(hallId,hall)=>axiosInstance.put(`/hall/putHall/${hallId}`,hall)


export { axiosInstance, Register,LoginData,addhalls,getHalls,deleteHall,updateHall }