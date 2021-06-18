import React from 'react'
import { TextField, Grid, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

function Quotes() {
    const classes = useStyles();
    return (
        <Grid>
             <Typography variant="h4" color="" gutterBottom> Get Free Quotation for
        Your Choice </Typography>
        <Paper className={classes.paper} gutterBottom>
          <form className={`${classes.root} ${classes.form}`} noValidate autoComplete="off">
            <div>
        <TextField required id="standard-required"  variant="outlined" label="Name" defaultValue="Full Name" />
        <TextField required id="standard-required" variant="outlined" label="Email" defaultValue="Email" /> 
        <TextField required id="standard-required" variant="outlined" label="Phone No" defaultValue="Phone No" /> 
      </div>
      <div>
      <TextField required id="standard-required" variant="outlined" label="From" defaultValue="Current Location" /> 
        <TextField required id="standard-required" variant="outlined" label="To" defaultValue="Parcel Destination" />
        <TextField fullWidth id="standard-number" variant="outlined"  label="Parcel Weight(kg)" type="number" InputLabelProps={{shrink: true,}}/>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Send Request</Button> 
      </div>
</form>
        </Paper>
        </Grid>
       
    )
}

export default Quotes
