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

const getUsers=()=>axiosInstance.get('/get');

const LoginData = (email, password) => axiosInstance.post('/v1/auth/authenticate', {email, password});

const getHalls=()=>axiosInstance.get(`/hall/getAlls`);

// const addhalls=(hallname,description,location,organiser,contact,vegPrice,nonveg,reviews,type,halltype,guestRange,priceRange)=>
//     axiosInstance.post('/hall/addHalls',{hallname,description,location,organiser,contact,
//         hallDetails:{
//             vegPrice,
//             nonveg,
//             reviews,
//             guestRange,priceRange
//         },
//     type,halltype});
const addhalls = (newHall) => {
    return axiosInstance.post('/hall/addHalls', 
      newHall
    , {
        headers: {
            "Content-Type": "application/json"
        }
    });
};
    const bookHall = (hallID, occasion, guest, contact, budget, food, fromdate, todate, bookingStatus) =>
        axiosInstance.post(`/booking/bookHalls/${hallID}`, {
            occasion,
            guest,
            contact,
            budget,
            food,
            fromdate,
            todate,
            bookingStatus,
            
        });
    
const getBooking=()=>axiosInstance.get(`/booking/getAlls`)
const deleteHall=(hallId)=>axiosInstance.delete(`/hall/deleteHall/${hallId}`)
const updateHall=(hallId,hall)=>axiosInstance.put(`/hall/putHall/${hallId}`,hall)
// const updateHall=(hallId,hall)=>axiosInstance.put(`/hall/putHall`,hall)
// const updateHall=(hallId)=>axiosInstance.put(`/hall/putHall/${hallId}`)
const gethallforowners=()=>axiosInstance.get(`/booking/get/requests`)
const approveBooking = (id) => axiosInstance.patch(`/booking/approveBooking/${id}`);
const denyBooking = (id) => axiosInstance.patch(`/booking/denyBooking/${id}`);

export { axiosInstance, Register, LoginData, addhalls, getHalls, deleteHall, updateHall, getUsers, bookHall, getBooking,gethallforowners ,approveBooking,denyBooking};



