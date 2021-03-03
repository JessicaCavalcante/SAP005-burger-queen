import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { CardActions } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "20vw",
  },
  title: {
    fontSize: 14
  },
  
});

export const CardKitchen = () => {
  const classes = useStyles();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
  const token = localStorage.getItem('token');
    fetch('https://lab-api-bq.herokuapp.com/orders/', {
      method: 'GET',
        headers: {
          'Authorization': token,
        },
      })
      .then(response => response.json())
        .then(result => {
          if (result.code && result.code === 401) {
            result = [];
          }
          setOrders(result)
        })
        .catch((error) => {console.log(error)});
  }, []);

  console.log(orders);


  return (
    <div style={{backgroundColor:'#fff'}}>
      <Grid container spacing={3}>
        {
          orders.map((order, index) => (
        <Grid key={index} item xs={3}>
        <Card className={classes.root} style={{backgroundColor:'#3e9920'}}>
          <CardContent >
            <p style={{color:'#fff'}}>Mesa: {order.table + " - " + order.client_name}</p>
            {
              order.Products.map((product, index) => (
            <p  key={index} style={{color:'#fff'}}>{product.qtd +  "x  " + product.name}</p>
              ))
            }
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" style={{color:'#fff'}}>Pedido pronto</Button>
          </CardActions>
        </Card>
        </Grid>
          ))
        } 
      </Grid>
    </div>
  );
}