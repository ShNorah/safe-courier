import React, {useEffect}  from 'react';
import Parcels from '../Parcels/Parcels';

import Maps from '../Maps/Maps'

import {Container, Grow, Grid} from '@material-ui/core';
import Form from '../Form/Form';

import { useDispatch } from 'react-redux'; //allows us to dispacth an action
import { getParcels} from '../../actions/parcels'; //import actions
import { Typography } from '@material-ui/core';

const Home = () => {

   // const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getParcels());
    }, [dispatch]);
    
    return (
        <Grow in>
        <Container>
             <Grid container justify="center" alignItems="stretch" spacing={3} gutterBottom>
             <Grid item xs={12} sm={6}>
             <Typography component="h1" variant="h2" align="center" color="primary" gutterBottom>
              Welcome to safecourier 
            </Typography>             
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
              The Best Solutions for your Delivery Services
            </Typography>       
                </Grid>
                <Grid item xs={12} sm={6}>             
                    <Form />          
                </Grid>
            </Grid>
            <Grid item>
                <Parcels />
            </Grid>
            <Grid >
            <Maps/>
            </Grid>  
        </Container>
    </Grow>

    );

}

export default Home;