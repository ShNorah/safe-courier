import * as api from '../api';

//ction creators, fns that return actions
//an action is an object that has a type and a payload
//data represents our parcels

export const getParcels = () => async (dispatch) =>{
    try{
        const {data} = await api.fetchParcels()
        dispatch({type: 'FETCH_ALL', paylaod: data});

    }catch(error){
        console.log(error.message)
    }
   
}



export const createParcel = (parcel)=> async (dispatch)=> {
    try{
        const {data}= await api.createParcel(parcel);
        dispatch({type: 'CREATE', paylaod: data});

    }catch(error){
        console.log(error)
    }
}