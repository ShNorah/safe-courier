import React,{useState} from 'react';
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import { useDispatch } from 'react-redux';

import {createParcel} from '../../actions/parcels';

//import { createParcel } from '../../api';

const Form = ()=>{
    const [parcelData, setparcelData] = useState({
        parcelCode: '', parcelWeight: '', parcelDestination: '', currentLocation: '', parcelStatus: '', description: ''
    })
    const classes = useStyles();

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault(); //not to get a refresh in the browser
        dispatch (createParcel(parcelData));  //pass all the data from our state

    }
    const clear = () =>{

    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate  className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6"> Create Parcel Delivery oders </Typography>
                <TextField 
                name ="parcelCode" variant="outlined" label ="parcelCode" fullWidth value ={parcelData.parcelCode}
                onChange={(e)=> setparcelData({...parcelData, parcelCode: e.target.value})}>                   
                </TextField>
                <TextField 
                name ="parcelWeight" variant="outlined" label ="parcelWeight(kg)" fullWidth value ={parcelData.parcelWeight}
                onChange={(e)=> setparcelData({...parcelData, parcelWeight: e.target.value})}>                   
                </TextField>
                <TextField 
                name ="description" variant="outlined" label ="description" fullWidth value ={parcelData.description}
                onChange={(e)=> setparcelData({...parcelData, description: e.target.value})}>                   
                </TextField>
                
                <div>
                <TextField 
                 required
                 id="outlined-required"
                 label="From"
                name ="currentLocation" variant="outlined" value ={parcelData.currentLocation}
                onChange={(e)=> setparcelData({...parcelData, currentLocation: e.target.value})}>                   
                </TextField> 

                <TextField 
                required
                id="outlined-required"
                label="To"
                name ="parcelDestination" variant="outlined" value ={parcelData.parcelDestination}
                onChange={(e)=> setparcelData({...parcelData, parcelDestination: e.target.value})}>                   
                </TextField>
                </div>
         
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit Order</Button> 
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>    
            </form>

        </Paper>
    );
}

export default Form;