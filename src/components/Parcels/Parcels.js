import React from 'react';
import Parcel from './Parcel/Parcel.js';
import useStyles from './styles'

const Parcels = ()=>{
    const classes = useStyles();
    return(
        <>
        <h1>parcels</h1>
        <Parcel />
        <Parcel />
        </>
    );
}

export default Parcels;