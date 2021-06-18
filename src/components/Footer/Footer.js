import React from 'react'
import {Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    color: '#1d2143',
    marginTop: theme.spacing(4),
  },

}));

function Footer() {
  const classes = useStyles();

    return (
        <Container>
          <Grid>
            <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          safecourier
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          All rights reserved @sharon
        </Typography>
      </footer>   
          </Grid>
        </Container>
    )
}

export default Footer

