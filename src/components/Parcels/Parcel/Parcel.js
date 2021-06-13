import React from 'react';
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

const Parcel = ({parcel})=>{
    const classes = useStyles();
    return(
          <Card className={classes.card}>
              <CardMedia className={classes.media} image={'https://images.pexels.com/photos/4246238/pexels-photo-4246238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} title={parcel.title} />
              <div className={classes.overlay}>
                  <Typography variant="h6">{parcel.creator}</Typography>
                  <Typography variant="body2">{moment(parcel.createdAt).fromNow()}</Typography>
                  </div>
                  <div className={classes.overlay2}>
                      <Button style={{ color: 'white' }} size="small" onClick={() => {}}>
                          <MoreHorizIcon fontSize="default" /></Button>
                      </div>
                      <CardContent>
                      <Typography className={classes.parcelWeight} gutterBottom variant="h5">{parcel.parcelDestination}</Typography>
                      </CardContent>
                      <CardActions className={classes.cardActions}>
                           <Button size="small" color="primary" onClick={() => {}}>
                               <DeleteIcon fontSize="small" /> Delete
                               </Button>
                           </CardActions>
          </Card>   
    );
}

export default Parcel;

