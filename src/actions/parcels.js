import { FETCH_ALL, CREATE, DELETE, UPDATE  } from '../constants/actionTypes';

import * as api from '../api';

//action creators, fns that return actions
//an action is an object that has a type and a payload
//data represents our parcels

export const getParcels = () => async (dispatch) =>{
    try{
        const {data} = await api.fetchParcels()
        dispatch({type: FETCH_ALL, paylaod: data});

    }catch(error){
        console.log(error.message)
    }
   
}

export const createParcel = (parcel)=> async (dispatch)=> {
    try{
        const {data}= await api.createParcel(parcel);
        console.log(data)
        dispatch({type: CREATE, paylaod: [data]});

    }catch(error){
        console.log(error)
    }
}

export const deleteParcel = (id) => async(dispatch) =>{
    try{

        await api.deleteParcel(id);
        dispatch({type: DELETE, paylaod: id})

    }catch(error){
        console.log(error);
        
    }
} 

export const updateParcel =(id, parcel) =>async(dispatch) => {
    try{

        const {data} = await api.updateParcel(id, parcel);
        dispatch({type: UPDATE, paylaod: data});

    }catch(error){
        console.log(error);

    }
}