import React,{useState} from 'react';
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';

//import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import {createParcel} from '../../actions/parcels';

//import { createParcel } from '../../api';

const Form = ()=>{
    const [parcelData, setparcelData] = useState({
        parcelCode: '', parcelWeight: '', parcelDestination: '', parcelStatus: '', creator: ''
    })
    const classes = useStyles();

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault(); //not to get a refresh in the browser
        dispatch (createParcel(parcelData));

    }
    const clear = () =>{

    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate  className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6"> Creating parcel oders </Typography>

                <TextField 
                 name ="creator" variant="outlined" label ="Creator" fullWidth value ={parcelData.creator}
                onChange={(e)=> setparcelData({...parcelData, creator: e.target.value})}>                   
                </TextField>
                <TextField 
                name ="parcelCode" variant="outlined" label ="parcelCode" fullWidth value ={parcelData.creator}
                onChange={(e)=> setparcelData({...parcelData, creator: e.target.value})}>                   
                </TextField>
                <TextField 
                name ="parcelWeight" variant="outlined" label ="parcelWeight" fullWidth value ={parcelData.creator}
                onChange={(e)=> setparcelData({...parcelData, creator: e.target.value})}>                   
                </TextField>
                <TextField 
                name ="parcelDestination" variant="outlined" label ="parcelDestination" fullWidth value ={parcelData.creator}
                onChange={(e)=> setparcelData({...parcelData, parcelDestination: e.target.value})}>                   
                </TextField>
                <TextField 
                name ="parcelStatus" variant="outlined" label ="parcelStatus" fullWidth value ={parcelData.creator}
                onChange={(e)=> setparcelData({...parcelData, parcelStatus: e.target.value})}>                   
                </TextField>

                {/* 
                 <div className ={classes.fileInput}><FileBase type ="file" multiple = {false} onDone ={(base64)=> setparcelData({...parcelData, selectedFile: base64})}/></div>
                */}

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit Order</Button> 
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>    
            </form>

        </Paper>
    );
}

export default Form;