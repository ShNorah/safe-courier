import React,{useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import DeleteIcon from '@material-ui/icons/Delete';

import * as api from '../../api/index'

import { useDispatch } from 'react-redux';
import { deleteParcel } from '../../actions/parcels';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  container:{
    marginTop: theme.spacing(4),
  },
 
}));


const Album = () =>{
  
  const classes = useStyles();
  const dispatch = useDispatch();

  const [parcels, setParcels] = useState([])
  useEffect(() => {
   newParcel()

 }, [])

 const newParcel = async() =>{
   const result = await api.fetchParcels();
   console.log(result);
   setParcels(result.data)

 }
console.log(parcels);

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.container}>
        {/* intro */}
        <div className={classes.heroContent} >
          <Container maxWidth="sm" >
            <Typography component="h1" variant="h2" align="center" color="secondary" gutterBottom>
              Make Parcel Orders!
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Best solutions for delivery services
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End intro */}
          <Grid container spacing={4}>
            {parcels.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.pexels.com/photos/4246238/pexels-photo-4246238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                  
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.parcelCode}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Status
                    </Button>
                    <Button size="small" color="primary" onClick={() => {}} >
                      Edit
                    </Button>
                    <Button size="small" color="secondary" onClick={() => dispatch(deleteParcel(card._id))}>
                      <DeleteIcon fontSize="small" /> Delete
                      </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Album
