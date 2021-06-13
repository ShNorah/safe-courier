import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'

import { useDispatch } from 'react-redux'; //allows us to dispacth an action

import Parcels from './components/Parcels/Parcels';
import Form from './components/Form/Form';
import couriers from './images/safecourier.png';
import useStyles from './styles'

import { getParcels} from './actions/parcels'; //import actions

const App =()=>{
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getParcels());
    }, [dispatch]);

    return(
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">
                    <img className={classes.image} src={couriers} alt="safecourier" height="60"/>
                    
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Parcels/>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}

export default App;