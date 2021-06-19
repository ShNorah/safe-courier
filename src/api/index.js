import axios from 'axios';

const API = axios.create({ baseURL: 'https://safe-courier-backend.herokuapp.com'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;

});

export const fetchParcels = ()=> API.get('/parcels');

export const createParcel = (newParcel) => API.post('/parcels', newParcel);

export const deleteParcel = (id) => API.delete(`/parcels/${id}`);

export const updateParcel = (id, updatedParcel) => API.patch(`/parcels/${id},`, updatedParcel);

//auth routes
export const signIn = (formData) => API.post('/users/auth/signin', formData);
export const signUp = (formData) => API.post('/users/auth/signup', formData);


