import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { CardActions } from "@material-ui/core";
import {convertDate, convertTime, formatHour} from "./timeOrder.js"

const useStyles = makeStyles({
  root: {
    minWidth: "25vw",
    marginLeft: "0.2rem",
  },
  title: {
    fontSize: 14
  },
  
});

export const CardOrder = (props) => {
  const classes = useStyles();

  const [status, setStatus] = useState(props.order.status);
  
  const orderStatus = {
    "pending": "Pendente",
    "doing": "Em preparo",
    "done": "Pedido pronto"
  }

  const updateOrderStatus = (newStatus) => {
    const token = localStorage.getItem('token');
    let orderId = props.order.id;
    fetch(`https://lab-api-bq.herokuapp.com/orders/${orderId}`, {
      method: "PUT",
        headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": token,
        },
        body: JSON.stringify({
          "status": newStatus
        })
    })
      .then(response => {
        if (response.status === 200) {
          setStatus(newStatus);
        }
      })
      .catch(() => {alert('algo deu errado')});
  };

  const createdAtTime = convertTime(props.order.createdAt);
  const createdAtDate = convertDate(props.order.createdAt);
  const difference = formatHour(new Date(props.order.updatedAt), new Date(props.order.createdAt));
  
  return (
    
      <Grid key={props.order.id} item xs={6} sm={4} >
        <Card className={classes.root} style={{backgroundColor:'#3e9920'}}>
          <CardContent >
            <p style={{color:'#fff'}}>Mesa: {props.order.table + " - " + props.order.client_name}</p>
            <p style={{color:'#fff'}}>Status: {orderStatus[status]}</p>
            <p style={{color:'#fff'}}>Criado em: {createdAtDate + " às " + createdAtTime}</p>
            <p style={{color:'#fff'}}>Duração: {difference}</p>
            {
              props.order.Products.map((product, index) => (
            <p  key={index} style={{color:'#fff'}}>{product.qtd +  "x  " + product.name}</p>
              ))
            }
          </CardContent>
          <CardActions>
            <Button size="small" variant={status === "doing" ? "contained" : "outlined"} disabled={status === "doing" ? true : false} style={{color: "#fff"}} onClick={() => updateOrderStatus("doing")}>Em preparo</Button>
            <Button size="small" variant={status === "done" ? "contained" : "outlined"} disabled={status === "done" ? true : false} style={{color:"#fff"}} onClick={() => updateOrderStatus("done")}>Pedido pronto</Button>
          </CardActions>
        </Card>
      </Grid>
  );
}