export const parcels = (parcels =[], action) =>{  //initial state is an empty array

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;   //payload is actually our parcels
        case 'CREATE_ALL':
            return [...parcels, action.payload];
        default:
            return parcels;
            
    }
}

