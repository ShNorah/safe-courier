import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Parcel from './Parcel/Parcel.js';
import useStyles from './styles';

const Parcels = ({ setCurrentId }) => {
  const parcels = useSelector((state) => state.parcels);
  const classes = useStyles();

  return (
  
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {parcels.map((parcel) => (
          <Grid key={parcel._id} item xs={12} sm={6} md={6}>
            <Parcel parcel={parcel} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    
  );
};

export default Parcels;


