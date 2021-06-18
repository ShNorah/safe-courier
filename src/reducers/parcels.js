import { FETCH_ALL, CREATE, DELETE, UPDATE  } from '../constants/actionTypes';

export const parcels = (parcels =[], action) =>{  //initial state is an empty array

    switch (action.type) {
        case FETCH_ALL:
            return action.payload;   //payload is actually our parcels

        case CREATE:
            return [...parcels, action.payload];

        case DELETE:
            return parcels.filter((parcel) => (!parcel._id === action.payload) )  ;
            
        case UPDATE:
            return parcels.map((parcel) => parcel._id === action.payload._id ? action.payload : parcel)    

        default:
            return parcels;
            
    }
}

