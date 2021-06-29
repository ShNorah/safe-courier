import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'})

//https://safe-courier-backend.herokuapp.com

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;

});

export const fetchParcels = ()=> API.get('/api/v1/parcels');

export const createParcel = (newParcel) => API.post('/api/v1/parcels', newParcel);

export const deleteParcel = (id) => API.delete(`/api/v1/parcels/${id}`);

export const updateParcel = (id, updatedParcel) => API.patch(`/api/v1/parcels/${id},`, updatedParcel);

//auth routes
export const signIn = (formData) => API.post('/api/v1/users/auth/signin', formData);
export const signUp = (formData) => API.post('/api/v1/users/auth/signup', formData);


