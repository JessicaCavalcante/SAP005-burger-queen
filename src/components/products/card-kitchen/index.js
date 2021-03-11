import React, {useState, useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import { CardOrder } from './card.js';
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';


export const CardKitchen = (props) => {

  const [orders, setOrders] = useState([]);
  const [open, setOpen] = React.useState(false);

  const getData = () => {
    const token = localStorage.getItem('token');
    fetch('https://lab-api-bq.herokuapp.com/orders/', {
      method: 'GET',
        headers: {
          'Authorization': token,
        },
      })
      .then(response => response.json())
        .then(result => {
          if (!result.length) {
            setOpen(true);
          } else {
            setOpen(false);
            result.sort((current, next) => {
              if ( current.id < next.id ) {
                return 1;
              }
              if ( current.id > next.id ) {
                return -1;
              }
              return 0;
            });
          }
          console.log(result);
          setOrders(result)
        })
        .catch((error) => {console.log(error)});
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div style={{backgroundColor:'#fff'}}>
      <Button variant="contained" color="secondary" style={{marginLeft: '0.5rem', marginBottom:'1rem'}} onClick={() => getData()}>Atualizar página</Button>
      <Grid container spacing={3}>
        {
          orders.map((order, index) => (
            <CardOrder key={order.id} order={order} orderKey={index} />
          ))
        }
      </Grid>
      <div style={{marginTop: '2rem'}}>
        <Collapse in={open}>
          <Alert severity="info">
            <AlertTitle>Sem pedidos cadastrados!</AlertTitle>
            Caso tenha algum pedido cadastrado, clique no botão — <strong>Atualizar página</strong>
          </Alert>
        </Collapse>
      </div>
    </div>
  );
}