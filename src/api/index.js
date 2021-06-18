import axios from 'axios';

// const url = "http://localhost:5000/parcels";

const url = "https://safe-courier-backend.herokuapp.com/parcels";

export const fetchParcels = ()=> axios.get(url);

export const createParcel = (newParcel) => axios.post(url, newParcel);

export const deleteParcel = (id) => axios.delete(`${url}/${id}`);

export const updateParcel = (id, updatedParcel) => axios.patch(`${url}/${id},`, updatedParcel);


